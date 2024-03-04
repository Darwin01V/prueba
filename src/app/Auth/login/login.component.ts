import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Login } from '../Interface/login.interface';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputTextModule,FormsModule,RouterLink],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  private email:string = 'test@test.com'
  private password : string = 'admin12345'

  data: Login = {
    email: 'test@test.com',
    password: 'admin12345'
  }

  constructor(private router: Router) {}

  onSubmit(){
    if(this.email !== this.data.email){
      return alert("Email Incorrecto")
    }

    if(this.password !== this.data.password){
      return alert("Password Incorrecto")
    }

    localStorage.setItem('user','true')
    this.router.navigate(['/user']);


  }
}
