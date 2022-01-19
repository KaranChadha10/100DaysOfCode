import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/_models/employee.model';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  @Input() public employees!: Employee[];
  @Output() public employeeSelected = new EventEmitter<Employee>();

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  selectEmployee(emp: Employee) {  
    this.employeeSelected.emit(emp);     
  }  

}
