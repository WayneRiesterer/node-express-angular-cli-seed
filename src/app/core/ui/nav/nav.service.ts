import { Link } from './models/link.model';

export class NavService {
  private _links: Array<Link> = [
    new Link('Home', '/'),
    new Link('About', '/about'),
    new Link('Contact', '/contact')
  ];

  get links(): Array<Link> { return this._links; }
}
