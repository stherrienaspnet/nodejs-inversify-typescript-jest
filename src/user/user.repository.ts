import {User} from "./user.model";
import {injectable} from "inversify";

export interface IUserRepository {
    getAll(): User[];
}

@injectable()
export class UserRepository implements IUserRepository {
    private _users: User[];

    constructor() {
        this.loadUsers();
    }

    private loadUsers() {
        this._users = [];

        let user1 = new User();
        user1.id = 1;
        user1.firstName = 'Bob';
        user1.lastName = 'Marley';
        user1.age = 22;
        this._users.push(user1);

        let user2 = new User();
        user2.id = 2;
        user2.firstName = 'Patrick';
        user2.lastName = 'Roy';
        user2.age = 46;
        this._users.push(user2)
    }

    getAll(): User[] {
        return this._users;
    }

}