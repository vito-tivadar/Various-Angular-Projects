import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { loginObject } from '../common/types/object-types';
import { BadInputError, GlobalError, NotFoundError } from './../common/errors/errors';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../common/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form;
  invalidLoginInfo: boolean = false;

  constructor(
    builder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = builder.group({
      email: ['', [Validators.email, Validators.required]],
      password: [],
      showPassword: [],
    });
  }

  ngOnInit(): void {}

  submitLoginInfo() {
    let info: loginObject = {
      email: this.email?.value,
      password: this.password?.value,
    };

    this.authService.login(info).subscribe({
      next: (response: any) => {
        this.invalidLoginInfo = true;
        localStorage.setItem('token', response.token);
        let returnURL = this.route.snapshot.paramMap.get('returnURL');
        this.router.navigate([returnURL || '/']);
      },
      error: (response: GlobalError) => {
        this.invalidLoginInfo = true;
      },
    });
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }
}
