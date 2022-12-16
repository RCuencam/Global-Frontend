import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { HeaderComponent } from '@coreui/angular';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";

  constructor(public userService: UserService, private router: Router) {
    super();
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
