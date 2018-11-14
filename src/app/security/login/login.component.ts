import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {AuthService} from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string;

  public password: string;

  public hidePassword = true;

  public success = undefined;

  public sending = false;

  public form;

  constructor(private auth: AuthService, private router: Router) {
    this.form = new FormGroup({});
  }

  public ngOnInit() {
    this.form.addControl('email', new FormControl('', Validators.required));
    this.form.addControl('password', new FormControl('', Validators.required));
  }

  public login() {

    //this.router.navigate([this.auth.redirectUrl]);
        

   if (!this.form.valid) {
      return;
    }
    this.sending = true;

    this.success = undefined;

    this.auth.login(this.form.value).subscribe(
      (success) => {
        this.success = (true === success);

        this.sending = false;

        if (this.success) {
          this.router.navigate([this.auth.redirectUrl]);
        }
      }
    );
  }
}
