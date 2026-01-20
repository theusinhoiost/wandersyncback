import { IsMobilePhone } from "class-validator";
import { News } from "src/news/entities/news.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column()
    name: string;
    @Column({ unique: true })
    email: string;
    @Column({ unique: true })
    @IsMobilePhone("pt-BR")
    phone: string;
    @Column()
    password: string;
    @Column({ default: false })
    forceLogout: boolean;
    @OneToMany(() => News, (news) => news.user)
    news: News[];
    @Column({ nullable: true })
    avatarUrl: string;

    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;


}


