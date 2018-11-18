import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { GlobalService } from 'src/app/global.service';
import { AuthService } from 'src/app/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public test;
  checkUsers = [];
  check = 0;
  data;
  checkuser = [];
  checkpass = [];
  checkemail = [];
  logindata: Observable<any[]>;
  constructor(private db: AngularFireDatabase, private router: Router, private global: GlobalService,
    private auth: AuthService) {
      this.logindata = this.db.list('/users').valueChanges();
      this.logindata.subscribe(data => {
        data.forEach(element => {
          this.checkemail.push(element.email);
          this.checkpass.push(element.pass);
          this.checkuser.push(element.users);
        });
      });
   }

  ngOnInit() {
  }

  authenUsers(data: NgForm) {
    let c = 0;
    for (let i = 0 ; i < this.checkemail.length; i++) {
      if ((this.checkemail[i] === data.value.users || this.checkuser[i] === data.value.users) && this.checkpass[i] === data.value.pass) {
        this.check = 1;
        c = i;
        break;
      } else {
        this.check = 0;
      }
    }
    if (this.check === 1) {
      this.auth.login(this.checkemail[c], this.checkpass[c]);
    } else {
      swal({
        title: 'ผิดพลาด!',
        text: 'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง กรุณาตรวจสอบใหม่อีกครั้ง',
        type: 'error',
        confirmButtonText: 'ปิด'
      });
    }
  }
}
