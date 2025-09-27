import { EmployeeService } from "./Services/EmployeeService";
import { ApiService } from "./Services/ApiService";

async function main(): Promise<void>{

  try{
    const apiService = new ApiService();

    const employeeService = new EmployeeService(apiService);
    await employeeService.loadEmployeesFromApi();

    const employees = employeeService.getAllEmployees();
    

    console.log("===SISTEMA DE EMPLEADOS===");

    employees.forEach((emp) => {
      console.log(emp.getDetails());
      console.log("Salario:",emp.calculateSalary());
      console.log("==========================");
    });
  } catch (error) {
    console.error("Error al cargar empleados:", error);
  }
}
main();

   
