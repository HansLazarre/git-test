import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ErrorStateMatcher} from '@angular/material';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';

import {CustomValidators} from 'ngx-custom-validators';

import {SecurityService} from '../security.service';


/** Error when invalid control is dirty, touched, or submitted. */
export class AppErrorStateMatcher implements ErrorStateMatcher {
  public isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form;

  public email;
  public password;
  public password2;

  public hidePassword = true;
  public hidePassword2 = true;

  public successful = undefined;

  public sending = false;

  public matcher = new AppErrorStateMatcher();

  private passwordFromControl = new FormControl('', [
    Validators.required,
    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{8,}'),
  ]);

  constructor(private securityService: SecurityService, private router: Router) {

    this.form = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.email,
      ]),

      'password': this.passwordFromControl,

      'password2': new FormControl('', [
        Validators.required,
        CustomValidators.equalTo(this.passwordFromControl)
      ]),
    });
  }

  public ngOnInit() {
  }

  public signup() {

    this.sending = true;

    this.securityService.signup(this.form.get('email').value, this.form.get('password').value).subscribe(
      (response) => {

        this.successful = (response.status === 'success');

        if (true === this.successful) {
          this.router.navigate(['signup-verification']);
        }

        this.sending = false;
      }
    );
  }
}
