import { User } from "src/users/entities/user.entity";

export interface AuthenticateRequest extends Request {
    user: User;
}
