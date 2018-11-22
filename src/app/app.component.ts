import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User;
  myText: string;

  constructor() {
    this.user = new User(
      'Emma Chang',
      'Medical Doctor',
      '8888 hello lane, Austin, TX',
      [
        '512-555-3333',
        '512-555-2222'
      ]);
  }
}
