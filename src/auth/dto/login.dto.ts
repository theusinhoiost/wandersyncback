import { IsEmail, IsNotEmpty, IsString } from "class-validator";



export class LoginDto {
    @IsEmail({}, { message: 'Email inválido' })
    email: string;

    @IsString({ message: 'A senha não pode estar vazia' })
    @IsNotEmpty({ message: 'A senha não pode estar vazia' })
    password: string;
}