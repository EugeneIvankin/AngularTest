import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './user';
  
@Injectable()
export class HttpService{

    private usersUrl = 'http://jsonplaceholder.typicode.com/users';
  
    constructor(
      private http: HttpClient){ }


    /** GET users from the server */
    getUsers (): Observable<User[]> {
        return this.http.get<User[]>(this.usersUrl)
        /*.pipe(
            tap(heroes => console.log(`fetched heroes`)),
            catchError(this.handleError('getHeroes', []))
        );*/
    }


    /*private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
    
          // TODO: better job of transforming error for user consumption
          this.log(`${operation} failed: ${error.message}`);
    
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }
    
      /** Log a HeroService message with the MessageService */
     /* private log(message: string) {
        //this.messageService.add('HeroService: ' + message);
      }*/
}