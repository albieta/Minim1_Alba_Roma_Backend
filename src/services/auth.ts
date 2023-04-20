import { Organization } from "../interfaces/organization.interface";
import { User } from "../interfaces/user.interface";
import OrganizationModel from "../models/organization";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from '../utils/jwt.handle';
import { Auth } from './../interfaces/auth.interface';

function isEmail(input: string): boolean {
  const pattern: RegExp = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
  return pattern.test(input);
}

const registerNewUser = async ({ email, password, name, surname, role }: User) => {
 
  
  const allowedRoles = ["admin", "need", "help"];

  if (!allowedRoles.includes(role)) {
    return "BAD_ROLE";
  }
  if (isEmail(email)===false) return "NOT_VALID_EMAIL";
  const checkIsUser = await UserModel.findOne({ email });
  if (checkIsUser) return "ALREADY_USER";
  const checkIsOrg = await OrganizationModel.findOne({ email });
  if (checkIsOrg) return "ALREADY_ORG";

  const passHash = await encrypt(password); 

  const registerNewUser = await UserModel.create({email, password: passHash, name, surname, role});
  return registerNewUser;
};

const registerNewOrg = async ( { email, password, name } : Organization) => { // NOTA: website is optional, so it won't be added when registering
  
  if (isEmail(email)===false) return "NOT_VALID_EMAIL";

  const checkIsOrg = await OrganizationModel.findOne({ email });
  if (checkIsOrg) return "ALREADY_ORG";
  const checkIsUser = await UserModel.findOne({ email });
  if (checkIsUser) return "ALREADY_USER";
  
  const passHash = await encrypt(password); 

  const registerNewOrg = await OrganizationModel.create({email, password: passHash, name });
  return registerNewOrg;
};

const login = async ({ email, password }: Auth) => {
  const checkIsUser = await UserModel.findOne({ email });
  const checkIsOrg = await OrganizationModel.findOne({ email });
  const checkIs = checkIsUser ? checkIsUser : checkIsOrg;
  //if (!checkIsUser && !checkIsOrg) {
  if (!checkIs) {
    return "NOT_FOUND_USER"; // or NOT_FOUND_ORG
  }
  else {
    const passwordHash = checkIs.password; 
    const isCorrect = await verified(password, passwordHash);
    if (!isCorrect) return "PASSWORD_INCORRECT";
    if (checkIsUser) {
      const token = generateToken(checkIs.email, checkIsUser.role);
      const data = {token, user: checkIs};
      return data;  
    } else {
      const token = generateToken(checkIs.email, "help");
      const data = {token, organization: checkIs};
      return data;  
    }
  }
};

export { registerNewUser, registerNewOrg, login };

