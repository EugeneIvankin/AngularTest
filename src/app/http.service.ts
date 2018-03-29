import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user';

@Injectable()
export class HttpService {

  private usersUrl = 'http://jsonplaceholder.typicode.com/users';
  users: User[];
  user: User;
  constructor(
    private http: HttpClient) { }

  /** GET users from the server */
  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
}
