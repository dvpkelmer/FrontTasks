import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AsyncPipe, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { AccessControlService } from 'src/app/shared/core/services/acces-control.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  private breakpointObserver = inject(BreakpointObserver);

  constructor(private _router: Router, private _accessControlService: AccessControlService) {
  }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  logout(): void {
    // Limpiar el localStorage
    localStorage.clear();

    // Redirigir al login
    this._router.navigate(['auth']);
  }

  validatedPermissions(moduleName: string): boolean {
    const rol = localStorage.getItem('rol')
    return this._accessControlService.hasAccess(rol, moduleName);
  }

}
