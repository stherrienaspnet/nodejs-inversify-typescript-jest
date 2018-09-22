import {IUserRepository, UserRepository} from "./user.repository";

describe('UserRepository', () => {
    let repository: IUserRepository;

    beforeAll(()=>{
        repository = new UserRepository();
    });

    it("getAll should return a user", () => {
        const users = repository.getAll();

        expect(users.length).toBeGreaterThan(0);
    });
});