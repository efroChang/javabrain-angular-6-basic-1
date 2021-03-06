import { Component, OnInit, Input } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  @Input('user') user: User;

  isCollapsed: boolean = true;

  ngOnInit() {
  }

  public onExpandCollapsed(event: any) {
    this.isCollapsed = !this.isCollapsed;
  }
}
