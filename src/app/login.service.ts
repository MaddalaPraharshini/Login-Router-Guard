import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  users: User[] = [
    { uname: "Divya", password: "123" },
    { uname: "Sai", password: "456" },
    { uname: "Nikhila", password: "45678" }
  ];

  authFlag: boolean = false;
  setAuthFlag(): boolean {
    return this.authFlag;
  }

  constructor() { }
  validateLogin(data: any): boolean {
    for (let u of this.users) {

      if (u.uname === data.uname && u.password === data.password) {
        this.authFlag = true;
        return true;
      }

    }
    this.authFlag = false;
    return false;
  }
}

