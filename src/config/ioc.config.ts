import REPOSITORY_IDENTIFIER from "../constants/repository.identifier";
import SERVICE_IDENTIFIER from "../constants/service.identifier";

import "reflect-metadata";
import {Container} from "inversify";
import {IUserService, UserService} from "../user/user.service";
import {IUserRepository, UserRepository} from "../user/user.repository";


let container = new Container();

container.bind<IUserService>(SERVICE_IDENTIFIER.IUserService).to(UserService);
container.bind<IUserRepository>(REPOSITORY_IDENTIFIER.IUserRepository).to(UserRepository);

export default container;