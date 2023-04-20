import { Request, Response } from "express";
import { login, registerNewOrg, registerNewUser } from "../services/auth";

const registerCtrl = async ({ body }: Request, res: Response) => {
  
  if (body.type === "user") {
    const responseUser = await registerNewUser(body);
    if(responseUser===("NOT_VALID_EMAIL")) {
      res.status(400);
      res.send(responseUser);
    }
    else if (responseUser===("ALREADY_USER")){
      res.status(400);
      res.send(responseUser);
    }
    else if(responseUser===("BAD_ROLE")){
      res.status(400);
      res.send(responseUser);
    }
    else {
      res.status(200);
      res.send(responseUser);
    } 
  } 
  else if (body.type === "organization") {
    const responseOrg = await registerNewOrg(body);
    if(responseOrg===("NOT_VALID_EMAIL")){
      res.status(400);
      res.send(responseOrg);
    } 
    else if(responseOrg==="ALREADY_ORG"){
      res.status(400);
      res.send(responseOrg);
    }
    else {
      res.status(200);
      res.send(responseOrg);
    } 
  } 
  else {
    res.status(400);
    res.send("NOT_SPECIFIED_TYPE");
  } 
};

const loginCtrl = async ({ body }: Request, res: Response) => {
  
  const { email, password } = body;
  const response = await login({ email, password });

  if (response === ("PASSWORD_INCORRECT" || "NOT_FOUND_USER")) {
    res.status(403);
    res.send(response);
  }
  else  {
    res.status(200);
    res.send(response);
  }
  
};

const tokenCtrl = async({ body }: Request, res: Response) => {
    res.status(200);
    res.send();
};

export { loginCtrl, registerCtrl, tokenCtrl };

