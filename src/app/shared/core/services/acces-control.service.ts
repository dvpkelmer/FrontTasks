import { Injectable } from '@angular/core';
import { roleAccessMap } from '../constants/roles.constants';

@Injectable({
  providedIn: 'root'
})
export class AccessControlService {

  constructor() { }

  /**
   * Verifica si un usuario tiene acceso a un módulo en función de su rol
   * @param role El rol del usuario ('Administrador', 'Supervisor', 'Empleado')
   * @param moduleName El nombre del módulo al que se intenta acceder (por ejemplo, 'tasks', 'users')
   * @returns true si tiene acceso, false si no tiene acceso
   */
  hasAccess(role: any , moduleName: string): boolean {    

    // Si el rol no está mapeado, denegar acceso
    if (!roleAccessMap[role]) {
      return false;
    }

    // Verificar si el módulo está permitido para el rol dado
    return roleAccessMap[role].includes(moduleName);
  }
}
