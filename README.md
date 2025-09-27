# Proyecto Taller-02-TypeScript

Este proyecto fue desarrollado como parte del Taller 02 en
**TypeScript**, aplicando conceptos de **Programación Orientada a
Objetos (POO)**, **herencia**, **interfaces**, **inyección de
dependencias** y manejo de buenas prácticas en la organización de
código.

-----------------------------------------------------------------------

#  Proyecto Taller 02 - TypeScript

## 1. Explicación personal de cada parte implementada
En el proyecto se implementaron varias clases y servicios para simular un sistema de gestión de empleados:  
- Se definieron **interfaces** para tipar la información de los usuarios.  
- Se implementó la clase abstracta **BaseEmployee**, que contiene los atributos y métodos comunes de cualquier empleado.  
- Se derivaron las clases **Developer** y **Manager** aplicando herencia.  
- Se creó un servicio **ApiService** que se conecta a una API externa para traer datos de usuarios.  
- Se creó un **EmployeeService** que administra la lista de empleados y se comunica con `ApiService`.  
- El archivo **main.ts** sirve como punto de entrada de la aplicación.

## 2. Descripción de la herencia utilizada
La herencia se aplicó con la clase **BaseEmployee**, que actúa como padre de:  
- **Developer**: hereda los atributos y métodos de `BaseEmployee` y añade `programmingLanguages`.  
- **Manager**: también hereda de `BaseEmployee` y añade atributos/métodos específicos de un gerente.  

Esto evita duplicación de código y asegura que todos los empleados compartan una misma base.

## 3. Cómo implementaste la inyección de dependencias
En `EmployeeService` se utilizó **inyección de dependencias** pasando una instancia de `ApiService` como parámetro en su constructor.  
De esta forma, `EmployeeService` no depende directamente de una implementación específica, sino que puede trabajar con cualquier servicio que provea empleados.  
Esto permite un código más flexible, fácil de probar y desacoplado.

## 4. Dificultades encontradas y soluciones
- **Error con los constructores y super:** los parámetros de las clases derivadas no coincidían con `BaseEmployee`.  
  -  Solución: ajustar los parámetros de los constructores y revisar el orden en `super()`.  
- **Errores de importación (`is declared but never read`):** ocurría al importar algo que no se usaba.  
  -  Solución: eliminar importaciones innecesarias o utilizarlas correctamente.  
- **Problemas con Git (commits mal organizados):** al inicio todo se subió en un solo commit.  
  -  Solución: reiniciar el historial (`git update-ref -d HEAD`) y volver a crear commits organizados.  

## 5.  Instrucciones de ejecución
Para ejecutar el proyecto, sigue estos pasos:

1. Clona el repositorio:  
   ```bash
   git clone <URL-del-repositorio>
   cd Taller-02-TypeScrit

2. Instala las dependencias:  
   ```bash
   npm install
   ```

