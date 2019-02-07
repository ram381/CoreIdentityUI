import { Component, OnInit } from '@angular/core';
import { Employee } from  '../model';
import { Router } from "@angular/router"; 
import {EmployeeService } from '../_service'


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];  
  constructor( private router:Router,private empService:EmployeeService) { }

  ngOnInit() {  
    this.empService.getAllEmployees()  
      .subscribe((data: Employee[]) => {  
       
        this.employees = data;  
      });  
  }  

  viewEmpDetails(employee: Employee): void {  
    console.log(employee);
    localStorage.removeItem('editEmpId');  
    localStorage.setItem('editEmpId', employee.id);  
    this.router.navigate(['view-emp']);  
  } 
}
