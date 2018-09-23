import {IUserService, UserService} from "./user.service";
import * as TypeMoq  from 'typemoq';
import {IUserRepository} from "./user.repository";
import {User} from "./user.model";

describe("UserService", () => {
    let service: IUserService;
    let repositoryMock: TypeMoq.IMock<IUserRepository>;

    const users: User[] = [{
        id : 1, age :46, firstName :'Bob', lastName:'Marley'
    }];

    beforeEach(()=>{
        repositoryMock = TypeMoq.Mock.ofType<IUserRepository>();
        repositoryMock.setup(x=> x.getAll()).returns(()=> users).verifiable();
        service = new UserService(repositoryMock.object);
    });

    it("getAll should call expected repository method", () => {
        service.getAll();

        repositoryMock.verifyAll();
    });
});
