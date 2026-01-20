import {
    IsEmail,
    IsString,
    IsNotEmpty,
    IsMobilePhone,
    IsOptional,
} from "class-validator";

export class CreateUserDto {
    @IsString({ message: "O nome deve ser válido" })
    @IsNotEmpty({ message: "O nome não pode estar vazio" })
    name: string;

    @IsEmail({}, { message: "Email inválido" })
    email: string;

    @IsString({ message: "A senha deve ser válida" })
    @IsNotEmpty({ message: "A senha não pode estar vazia" })
    password: string;

    @IsMobilePhone("pt-BR")
    phone: string;

    @IsOptional()
    @IsString()
    avatarUrl?: string;
}
