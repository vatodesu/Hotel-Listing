import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';



@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public auth: AngularFireAuth,
    
  ) { }

  ngOnInit(): void {
  }

  logOut(): void {
    this.auth.signOut().then(() => {
      window.location.reload();
    });
  }
}
