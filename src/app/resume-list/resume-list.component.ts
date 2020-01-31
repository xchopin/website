import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-resume-list',
  templateUrl: './resume-list.component.html',
  styleUrls: ['./resume-list.component.scss']
})
export class ResumeListComponent implements OnInit {

  @Input()
  private title: string;
  @Input()
  private date: string;
  @Input()
  private location: string;
  @Input()
  private description: string;
  @Input()
  private tasks: Array<string>;

  constructor() {
  }

  ngOnInit() {
  }

}
