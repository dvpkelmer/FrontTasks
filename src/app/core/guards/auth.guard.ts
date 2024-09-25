import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('authToken');
    
    // Si el token existe, permitir acceso a la ruta
    if (token) {
      return true;
    }

    // Si no hay token, redirigir al login
    this.router.navigate(['/auth']);
    return false;
  }
}
