import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio2',
  templateUrl: './inicio2.component.html',
  styleUrls: ['./inicio2.component.css'],
})
export class Inicio2Component {
  constructor(private userService: UserService, private router: Router) {}

  onClick() {
    this.userService
      .logout()
      .then(() => {
        this.router.navigate(['/register']);
      })
      .catch((error) => console.log(error));
  }
}
