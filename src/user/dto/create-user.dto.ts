import { IsEmail, IsString, IsNotEmpty, IsMobilePhone } from "class-validator";

export class CreateUserDto {
    @IsString({ message: 'O nome deve ser valido' })
    @IsNotEmpty({ message: 'O nome não pode estar vazia' })
    name: string;
    @IsEmail({}, { message: 'Email inválido' })
    email: string;
    @IsString({ message: 'A senha deve ser valida' })
    @IsNotEmpty({ message: 'A senha não pode estar vazia' })
    password: string;
    @IsString({ message: 'O telefone deve ser valido' })
    @IsNotEmpty({ message: 'O telefone não pode estar vazio' })
    @IsMobilePhone()
    phone: string;

}
