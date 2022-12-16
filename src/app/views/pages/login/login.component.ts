import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  msgErrorLogin: string = '';
  isLoadingLogin: boolean = false;

  constructor(private userService: UserService, private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login(): void {
    if(this.loginForm.valid) {
      this.isLoadingLogin = true;
      
      this.userService.login(this.loginForm.value).subscribe(response => {
        if(response.success) {
          this.userService.setUser = response.data.name;
          this.router.navigate(['/home'])
        } else {
          this.msgErrorLogin = response.error;
        }
        this.isLoadingLogin = false;
      })
    }
  }

}
