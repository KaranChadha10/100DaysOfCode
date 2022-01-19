import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from 'src/app/_models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
  
  employees: Employee[] = [  
    {  
      id: 1,  
      name: 'Test Name1',  
      email: 'Test Address' 
    },  
    {  
      id: 2,  
      name: 'Test Name2',  
      email: 'Test Address2',  
    },  
    {  
      id: 3,  
      name: 'Test Name3',  
      email: 'Test Address3',  
    }  
  ];  
  constructor() { }

  getEmployees(): Observable<Employee[]> {  
    return of(this.employees);  
  }  
   
}
