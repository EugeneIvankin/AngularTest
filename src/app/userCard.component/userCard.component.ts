import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { UserFullInfoComponent } from '../userFullInfo.component/userFullInfo.component';
import { User } from '../user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-card',
  templateUrl: './userCard.component.html',
  styleUrls: ['./userCard.component.css']
})

export class UserCardComponent {
  @Input() user: User;

  constructor(private router: Router) {}

  open() {
    this.router.navigate(['full_info_about'],
      {
        queryParams: {
          'id': this.user.id
        }
      });
  }
}
