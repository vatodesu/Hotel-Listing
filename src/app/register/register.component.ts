import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email!:string;
password!: string;
hide = true;
  constructor(    public auth: AngularFireAuth,
    private router: Router) { }

  ngOnInit(): void {
  }

  signup(): void{
    this.auth.createUserWithEmailAndPassword(this.email, this.password).catch(error => console.log(error.code)).then(result => console.log(result)).then(() => {
      this.router.navigate(['./login']);
    })
  }
}
