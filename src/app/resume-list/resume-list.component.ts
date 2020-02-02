import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-resume-list',
  templateUrl: './resume-list.component.html',
  styleUrls: ['./resume-list.component.scss']
})
export class ResumeListComponent implements OnInit {

  @Input()
  title: string;
  @Input()
  date: string;
  @Input()
  location: string;
  @Input()
  description: string;
  @Input()
  tasks: Array<string>;

  constructor() {
  }

  ngOnInit() {
  }

}
