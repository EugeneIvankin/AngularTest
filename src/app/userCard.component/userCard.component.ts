import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserFullInfoComponent } from '../userFullInfo.component/userFullInfo.component';
import { User } from '../user';


@Component({
  selector: 'user-card',
  templateUrl: './userCard.component.html',
  styleUrls: ['./userCard.component.css']
})

export class UserCard {
  @Input() user: User;
  
  constructor(private modalService: NgbModal){  }

  open() {
    const modalRef = this.modalService.open(UserFullInfoComponent);
    modalRef.componentInstance.user = this.user;
  }
}