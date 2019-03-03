import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data = {username:"",password:""};
  constructor(
    private router: Router) { }

  ngOnInit() {
    
  }
  onLogin():void{
    if(this.data.username == this.data.password){
      this.router.navigate(['/dashboard']);   
    }else 
    if(this.data.username== '' || this.data.password==''){
      alert("Please enter Username and Password")
    }
    else{
      alert('Username / Password is incorrect.');
    }
    
  }
  onAboutus():void{
    this.router.navigate(['/aboutus']);   
  }
}
