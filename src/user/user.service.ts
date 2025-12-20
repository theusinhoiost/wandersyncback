import { ConflictException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { HashingService } from 'src/common/hashing/hashing.service';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly hashingService: HashingService
    ) { }
    async create(dto: CreateUserDto) {
        const existsEmail = await this.userRepository.exists({
            where: {
                email: dto.email
            }
        });
        const existsPhone = await this.userRepository.exists({
            where: {
                phone: dto.phone
            }
        });
        if (existsEmail && existsPhone) {
            throw new ConflictException('Algo está inválido');
        }

        const hashedPassword = await this.hashingService.hash(dto.password);

        const newUser: CreateUserDto = {
            name: dto.name,
            email: dto.email,
            phone: dto.phone,
            password: hashedPassword,
        };

        const created = await this.userRepository.save(newUser);
        return created;
    }
    findByEmail(email: string) {
        return this.userRepository.findOne({
            where: {
                email: email
            }
        });

    }
    save(user: User) {
        return this.userRepository.save(user);
    }
    findByID(id: string) {
        return this.userRepository.findOneBy({ id })
    };

}
