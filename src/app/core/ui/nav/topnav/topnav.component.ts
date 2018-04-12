import { Component, OnInit } from '@angular/core';

import { NavService } from '../nav.service';

import { Link } from '../models/link.model';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: [ './topnav.component.scss' ]
})
export class TopnavComponent implements OnInit {
  private _links: Array<Link>;

  constructor(private navService: NavService) {}

  ngOnInit() {
    this._links = this.navService.links;
  }

  get links(): Array<Link> { return this._links; }
}
