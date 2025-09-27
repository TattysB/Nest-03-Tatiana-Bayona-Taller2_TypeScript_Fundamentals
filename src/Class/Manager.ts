 import { BaseEmployee } from "./BaseEmployee";
 import { Department } from "../enum/deparmentEnum";
 import { User } from "../Interface/User";

 export class Manager extends BaseEmployee {
     private teamSize: number;

     constructor(
        user: User,
        id: number,
        department: Department, 
        teamSize: number,
    ) {

        super(user,id,department);
        this.teamSize = teamSize;
       // TODO: Implementar
     }

     getDetails(): string {
        return `Manager: ${this.name},Id: ${this.id},Age: ${this.age}, Email: ${
      this.email
    } Gender: ${this.gender}, Team Size: ${this.teamSize}`;
       // TODO: Retornar información del manager
     }

     calculateSalary(): number {
        return 4000 + 300 * this.teamSize;
       // TODO: Salario base 4000 + 300 por cada miembro del equipo
     }
   }