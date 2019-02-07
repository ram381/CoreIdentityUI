import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Employee } from '../model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl: any = 'https://localhost:44318/api/';
  constructor(private http: HttpClient) { }

  getAllEmployees() {
    return this.http.get<Employee[]>(this.baseUrl + `/Employee`);
}

getEmployeeById(id: number) {
    return this.http.get<Employee>(this.baseUrl + `/Employee/` + id);
}



}

 
