import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthUseCases } from 'src/app/application/auth/auth.usecases';
import { AuthRepository } from 'src/app/domain/auth/resporitory/auth.repository';
import { AuthService } from 'src/app/infraestructure/auth/services/auth.service';
import { CommonModule } from '@angular/common';
import { AuthAdapter } from 'src/app/infraestructure/auth/adapters/auth.adapter';



@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    //Material
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [
    { provide: AuthRepository, useClass: AuthService },
     AuthUseCases, AuthAdapter
  ],
})
export class AuthModule { }