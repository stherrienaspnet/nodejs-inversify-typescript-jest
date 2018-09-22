import {User} from "./user.model";
import {IUserRepository} from "./user.repository";
import {inject, injectable} from "inversify";
import REPOSITORY_IDENTIFIER from "../constants/repository.identifier";


export interface IUserService {
    getAll(): User[];
}

@injectable()
export class UserService implements IUserService {
    private _userRepository: IUserRepository;

    constructor(
        @inject(REPOSITORY_IDENTIFIER.IUserRepository) userRepository: IUserRepository
    ) {
        this._userRepository = userRepository;
    }

    getAll(): User[] {
        return this._userRepository.getAll();
    }
}