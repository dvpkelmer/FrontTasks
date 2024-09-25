import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUseCases } from 'src/app/application/auth/auth.usecases';
import { TokenResponseModel } from 'src/app/domain/auth/models/token.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private readonly _authUseCases: AuthUseCases, private _router : Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
  
      this._authUseCases.login(email, password).then((response: TokenResponseModel) => {
        const token = response.token.token;
        localStorage.setItem('authToken', token); 
        this._router.navigate(['home/users']);
      }).catch((error) => {
        console.error('Error during login', error);
      });
    }
  }
  
}
