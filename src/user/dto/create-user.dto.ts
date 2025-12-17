import { IsEmail, IsString, IsNotEmpty, Length, Matches } from "class-validator";

export class CreateUserDto {
  @IsString({ message: 'O nome deve ser uma string' })
  @IsNotEmpty({ message: 'O nome não pode estar vazio' })
  name: string;
  @IsEmail({}, { message: 'Email inválido' })
  email: string;
  @IsString({ message: 'A senha deve ser uma string' })
  @IsNotEmpty({ message: 'A senha não pode estar vazia' })
  password: string;
  @IsNotEmpty({ message: 'O telefone não pode estar vazio' })
  @Length(11, 11, { message: 'O telefone deve ter exatamente 11 caracteres' })
  @Matches(/^\d{11}$/, {
    message: 'O telefone deve conter exatamente 11 dígitos numéricos (DDD + número)',
  })
  @IsString({ message: 'O telefone deve ser uma string' })
  phone: string;

}
