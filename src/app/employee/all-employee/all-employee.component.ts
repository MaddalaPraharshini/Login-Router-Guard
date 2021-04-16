import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-all-employee',
  templateUrl: './all-employee.component.html',
  styleUrls: ['./all-employee.component.css']
})
export class AllEmployeeComponent implements OnInit {
  emps!: any[];
  constructor(private eService: EmpService) { }

  ngOnInit(): void {
    this.emps = this.eService.getAllEmployee();
  }

}
