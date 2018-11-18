import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

public isLogin;
public user;
detail;
public privilege_id;

  constructor(private auth: AuthService, private afAuth: AngularFireAuth,
    private db: AngularFireDatabase, private global: GlobalService) {
    this.afAuth.authState.subscribe(data => {

      this.detail = this.db.list('/users', ref => ref.orderByChild('email').equalTo(data.email)).valueChanges();
      this.detail.subscribe( snap => {
        snap.forEach(element => {
          this.user = element.fname + ' ' + element.lname;
          this.global.setUser(element.users);
          this.privilege_id = element.privilege_id;
        });
      });
    });
    this.auth.cookieAuth().subscribe(data => {
      this.isLogin = data;
    });
  }

  ngOnInit() {

  }

  logout() {
    this.auth.logout();
  }
}
