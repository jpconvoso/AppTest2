import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { DataService  } from '../app/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AppTest2';

  constructor(private dataService: DataService) {}
  fname = '';
  address1 = '';
  address2 = '';
  city = '';
  pincode = '';
  email = '';
  dob = '02-05-2021';
  ngOnInit() {
    this.dataService.sendGetRequest().subscribe((data: any) => {
      this.fname = data.name
      this.address1 = data.address.street;
      this.address2 = data.address.suite;
      this.city = data.address.city
      this.pincode = data.address.zipcode
      this.email = data.email
    });
  }
}
