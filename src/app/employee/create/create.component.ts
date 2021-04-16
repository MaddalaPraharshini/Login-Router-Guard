import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  empForm!: FormGroup;

  constructor(private fb: FormBuilder, private eService: EmpService,
    private router: Router) { }

  ngOnInit(): void {
    this.empForm = this.fb.group({
      eid: ['', Validators.required],
      ename: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }
  get email() {
    return this.empForm.get('email');
  }
  get ename() {
    return this.empForm.get('ename');
  }
  regEmployee() {
    this.eService.addEmployee(this.empForm.value);
    this.router.navigate(['employee/all']);
  }

}
