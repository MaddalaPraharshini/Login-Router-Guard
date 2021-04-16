import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  employees: any[] = [];
  constructor() { }

  addEmployee(emp: any) {
    this.employees.push(emp);
  }
  getAllEmployee() {
    return this.employees;
  }
}
