import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  message!:string; 
  constructor(private fb: FormBuilder, private router: Router, private lService:LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      uname :['',Validators.required],
      password :['',Validators.required]
    })
  }
  Login() {
    if(this.lService.validateLogin(this.loginForm.value)) {
   
      this.router.navigate(['employee']);
    }
    else {
      
      this.message=`Invalid Username/Password`;
      this.router.navigate(['/']);
      
    }
  }
}
//Sir cheptondi chestunava??..ha avunu..Nen vinale apati nundi
//em chestunav ra kali ga una mama..hahaa vgud ra .. em emo chesptunde vidu..
//ekkadiko pothundu ekado start chesi..chey chey nuv parallel ga..ha ra
//arey mama............😁😁😁ela raa.. emo mama vachesindi atle...niku danam pttalil ...pettu akada pedta...ikada kurnool lo kanapadalii.avuna aithe 5 mins agu..ae ra vastunava kurnool?haa rock kosam vastav kani na kosam ravu le mamaaaaaaaaaa