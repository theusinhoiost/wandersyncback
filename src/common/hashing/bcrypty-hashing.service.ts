import { HashingService } from "./hashing.service";
import * as bcrypt from 'bcryptjs';
export class BcryptHashingService extends HashingService {
compare(data: string, hashedData: string): Promise<boolean> {
    const isValid = bcrypt.compare(data, hashedData);
    return isValid;
}
async hash(data: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(data, salt);
    return hash;
}
}
