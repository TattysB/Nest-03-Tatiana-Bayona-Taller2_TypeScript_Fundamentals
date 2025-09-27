import { BaseEmployee } from "../Class/BaseEmployee";
import { Developer  } from "../Class/ClasesDerivadas";
import { Manager } from "../Class/Manager";
import { Department } from "../enum/deparmentEnum";
import { ApiService } from "./ApiService";

export class EmployeeService {
  private employees: BaseEmployee[] = [];

     constructor(private apiService: ApiService) {
       // TODO: Inyectar ApiService
       }

     async loadEmployeesFromApi(): Promise<void> {
       // TODO: Cargar usuarios desde API y convertir algunos a empleados
       // Crear 2 developers y 1 manager usando los datos de la API

       const users = await this.apiService.getUsers();

       if (users.length >= 3) {
        this.employees.push(new Developer(users[0],1,["TypeScript","Node.js"]));
        this.employees.push(new Developer(users[1],2,["Java","Spring"]));
        this.employees.push(new Manager(users[2],3,Department.HR,5));

     }
    }

     getEmployeeById(id: number): BaseEmployee | undefined {
        return this.employees.find(emp => emp['id'] === id);
       // TODO: Buscar empleado por ID
     }

     getAllEmployees(): BaseEmployee[] {
        return this.employees;
       // TODO: Retornar todos los empleados
     }

     addEmployee(employee: BaseEmployee): void {
        this.employees.push(employee);
       // TODO: Agregar nuevo empleado
     }
   }