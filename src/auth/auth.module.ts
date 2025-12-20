import { InternalServerErrorException, Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UserModule } from "src/user/user.module";
import { JwtModule } from "@nestjs/jwt";
import { CommonModule } from "src/common/common.module";
import { JwtStrategy } from "./strategies/jwt.strategy";



@Module({
    imports: [UserModule, JwtModule.registerAsync({
        useFactory: () => {
            const secret = process.env.JWT_SECRET;
            if (!secret) {
                throw new InternalServerErrorException(
                    'JWT_SECRET not found in .env',
                );
            }
            return {
                secret,
                signOptions: { expiresIn: parseInt(process.env.JWT_EXPIRATION || '86400') },
            }
        }
    }), CommonModule, UserModule],
    exports: [],
    controllers: [AuthController],
    providers: [AuthService,JwtStrategy],
})
export class AuthModule { }
