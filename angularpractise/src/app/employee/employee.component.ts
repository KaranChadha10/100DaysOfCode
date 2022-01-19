import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../core/services/employee-data.service';
import { Employee } from '../_models/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public employee!: Employee;  
  public employees!: Employee[];

  constructor(private _employeeService: EmployeeDataService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this._employeeService.getEmployees()
    .subscribe((emps: Employee[]) => this.employees = emps);
  }

  selected(employee: any){
    this.employee = employee;
  }

}
