import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../user';

@Component({
  selector: 'user-full-info',
  templateUrl: './userFullInfo.component.html',
  styleUrls: ['./userFullInfo.component.css'],
})
export class UserFullInfoComponent implements OnInit{
  
  @Input() user: User;

  lat: number;
  lng: number;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.lat =  +this.user.address.geo.lat; 
    this.lng =  +this.user.address.geo.lng; 
  }

}