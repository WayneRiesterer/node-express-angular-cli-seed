import { Component, OnInit } from '@angular/core';

import { NavService } from '../nav.service';

import { Link } from '../models/link.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  private _links: Array<Link>;

  constructor(private navService: NavService) {}

  ngOnInit() {
    this._links = this.navService.links;
  }

  get links(): Array<Link> { return this._links; }
}
