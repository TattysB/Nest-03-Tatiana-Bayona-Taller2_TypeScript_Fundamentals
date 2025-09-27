import { User } from "../Interface/User";

export class ApiService {
     private apiUrl = "https://dummyjson.com/users";

     async getUsers(): Promise<User[]> {
        try{
            const response =await fetch(this.apiUrl);
            const data = await response.json();

            return data.users.map((user: any) => ({
                name: user.firstName + " " + user.lastName,
                age: user.age,
                email: user.email,
                gender: user.gender,
            }));

        } catch (error) {
            console.error("Error al obtener usuarios:", error); 
            return [];
        }
       // TODO: Hacer fetch a la API y mapear solo name, age, email, gender
       // Usar try-catch para manejo de errores
     }

     async getUserById(id: number): Promise<User | null> {

        try{
            const response = await fetch(`${this.apiUrl}/${id}`);

            const data = await response.json();
            return{
                name: data.name,
                age: data.age,
                email: data.email,
                gender: data.gender,
            };
            }catch (error) {
                console.error("Error al obtener usuario por ID:", error); 
                return null;
        }
       // TODO: Obtener un usuario específico de la API
     }
   }