import type { User } from "../Interface/User";
import type { Department } from "../enum/deparmentEnum";

export abstract class BaseEmployee {
     protected id: number;
     protected name: string;
     protected age: number;
     protected email: string;
     protected gender: string;
     protected department: Department;

     constructor(user: User, id: number, department: Department) {
       // TODO: Implementar constructor
       this.id = id;
       this.name = user.name;
       this.age = user.age;
       this.email = user.email;
       this.gender = user.gender;
       this.department = department;
       
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      throw new Error(`Email inválido: ${this.email}`);
    }

    if (this.age <= 0) {
        throw new Error(`La edad debe ser mayor que cero: ${this.age}`)

    }
     

}
     abstract getDetails(): string;
     abstract calculateSalary(): number;
   }