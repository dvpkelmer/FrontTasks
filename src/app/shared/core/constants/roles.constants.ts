export const roleAccessMap: { [key: string]: string[] } = {
    'Administrador': ['tasks', 'users', 'assign','delete'], // El administrador tiene acceso a todos los módulos
    'Supervisor': ['tasks','assign'], // El supervisor solo tiene acceso a tareas
    'Empleado': ['tasks'] // El empleado solo tiene acceso a tareas
  };