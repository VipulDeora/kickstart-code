import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-content-not-found',
  templateUrl: './content-not-found.component.html',
  styleUrls: ['./content-not-found.component.scss']
})
export class ContentNotFoundComponent implements OnInit {
  @Input('isAbsoluteNeeded') isAbsoluteNeeded = true;
  @Input('isRefreshNeedToShow') isRefreshNeedToShow = true;

  constructor() { }

  ngOnInit() {
  }

}
