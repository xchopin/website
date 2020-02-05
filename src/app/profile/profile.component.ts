import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  ngOnInit() {

  }

  constructor() {
  }


  calculateAge() {
    const birthday = +new Date('02-26-1995');
    // tslint:disable-next-line:no-bitwise
    return ~~((Date.now() - birthday) / (31557600000));
  }


}
