import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from '@angular/router';

@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
email!:string;
password!: string;
  hide = true;


  constructor(
    public auth: AngularFireAuth,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signIn(): void{
    this.auth.signInWithEmailAndPassword(this.email, this.password).catch(error => console.log(error.code)).then(result => console.log(result)).then(() =>{
      this.router.navigate(['/hotel-list'])
    })
  }
}
