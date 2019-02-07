import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../_service'
import { Router } from "@angular/router";  
import { Employee} from '../model';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
employee:Employee;

  constructor(private router:Router, private employeeservice:EmployeeService) { }

  ngOnInit() {
    let empid = localStorage.getItem('editEmpId');
    if (+empid > 0) {
      this.employeeservice.getEmployeeById(+empid).subscribe(data => {  
        console.log(data);
        this.employee =data;
      });

  }
  }
  onSubmit() {
    this.router.navigate(['/']);  
  }
 

}
