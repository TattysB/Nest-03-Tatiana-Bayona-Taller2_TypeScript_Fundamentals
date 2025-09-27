 import { User } from "./User";

 export interface Employee extends User {
     id: number;
     name: string;
     age: number;
     email: string;
     gender: string;
     position: string;
     department: string;
     salary: number;
   }