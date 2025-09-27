import { Department } from "../enum/deparmentEnum";
import { BaseEmployee } from "./BaseEmployee";
import { User } from "../Interface/User";

export class Developer extends BaseEmployee {
  private programmingLanguages: string[];

  constructor(
    user: User,
    id: number,
    languages: string[],
  ) {
    super(user, id,Department.IT);
    this.programmingLanguages = languages;

    // TODO: Implementar - siempre será del departamento IT
  }

  getDetails(): string {
    return `Developer: ${this.name}, ID: ${this.id}, Age: ${this.age}, Email: ${
      this.email
    } Gender: ${this.gender},languages: ${this.programmingLanguages.join(
      ", "
    )}`;
    // TODO: Retornar información del desarrollador
  }

  calculateSalary(): number {
    return 3000 + 200 * this.programmingLanguages.length;
  }
}
