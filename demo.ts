import container from "./src/config/ioc.config";
import SERVICE_IDENTIFIER from "./src/constants/service.identifier";
import {IUserService} from "./src/user/user.service";

let service = container.get<IUserService>(SERVICE_IDENTIFIER.IUserService);
let physicalTypes = service.getAll();

console.log('Here is the user list:');
console.log(physicalTypes);

