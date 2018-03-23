import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { User } from '../user';

@Component({
  selector: 'users-dashboard',
  templateUrl: './usersDashboard.component.html',
  styleUrls: ['./usersDashboard.component.css']
})

export class UsersDashboard {

  users: User[];
  
  constructor(private httpService: HttpService) {
    this.getUsers();
  }

  getUsers() {
    this.httpService.getUsers()
      .subscribe(users => this.users = users);
  }
}