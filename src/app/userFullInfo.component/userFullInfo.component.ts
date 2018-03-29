import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user-full-info',
  templateUrl: './userFullInfo.component.html',
  styleUrls: ['./userFullInfo.component.css'],
})
export class UserFullInfoComponent {

  users: User[];
  user: User;
  id: number;
  lat: number;
  lng: number;
  private querySubscription: Subscription;

  constructor(private httpService: HttpService, private route: ActivatedRoute) {
    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
        this.id = queryParam['id'];
      }
  );
    this.getUserById();
  }

  getUserById() {
    this.httpService.getUsers()
      .subscribe(users => {this.users = users;
        this.users.forEach(elem => {
          if (elem.id === +this.id) {
            this.user = elem;
            this.lat =  +this.user.address.geo.lat;
            this.lng =  +this.user.address.geo.lng;
          }
        });
      });
  }
}
