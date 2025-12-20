import { User } from "src/user/entities/user.entity";

export interface AuthenticateRequest extends Request{
    user:User;
}
