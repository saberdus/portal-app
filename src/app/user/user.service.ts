import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './models/user.model';

@Injectable()
export class UserService {
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  options = {headers: this.httpHeaders};

  constructor(private http: HttpClient) {}

  private userUrl = 'http://localhost:8080/user-portal';

  public getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }

  public findUser(eMail) {
    return this.http.get<User>(this.userUrl +"/"+ eMail +"/", this.options);
  }

  public validateUserCredentials(username, password) {
    return this.http.get<User>(this.userUrl +"/"+ username +"/"+ password)
  }

  public deleteUser(userId) {
    return this.http.delete(this.userUrl +"/"+ userId);
  }

  public createUser(user) {
    user.role = "customer";
    return this.http.post<User>(this.userUrl, user);
  }

  public updateUser(user) {
    return this.http.put<User>(this.userUrl, user);
  }

  public obtainAccessToken(oAuthTokenUrl, paramList, oAuthOptions) {
    return this.http.post<JSON>(oAuthTokenUrl, paramList, oAuthOptions);
  }
}
