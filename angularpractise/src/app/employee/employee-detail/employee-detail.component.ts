import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/_models/employee.model';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  
  @Input() public employee!: Employee;  

  constructor() { }

  ngOnInit(): void {
  }

}
