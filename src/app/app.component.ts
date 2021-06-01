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
  dob = '';
  ngOnInit() {
    this.dataService.sendGetRequest().subscribe((data: any) => {
    console.log(data);
      this.fname = data.name
      this.address1 = data.address.street
      this.address2 = data.address.suite
      this.city = data.address.city
      this.pincode = data.address.zipcode
      this.email = data.email
      this.dob = "05/02/2020"
    });
  }
}
