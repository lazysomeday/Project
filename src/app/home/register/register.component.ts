import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  data: any;
  user: any;
  checkuser = true;
  checkpass = true;

  constructor(private router: Router, private auth: AuthService, private api: UserService) { }

  ngOnInit() {
    this.api.showMember().subscribe(data => {
    if (data === null) {
      this.user = [];
    } else {
      this.user = Object.values(data);
    }
     });
  }

  addUsers(data: NgForm) {
    console.log(this.user.length);
  if (data.value.users === '' || data.value.pass === '' || data.value.question === ''
    || data.value.answer === '' || data.value.fname === '' || data.value.lname === ''
    || data.value.day_of_birth === '' || data.value.id_card === '' || data.value.email === ''
    || data.value.address === '' || data.value.mobile === '') {
      swal({
        title: 'ผิดพลาด!',
        text: 'สมัครสมาชิกไม่สำเร็จ กรุณาตรวจสอบและกรอกข้อมูลให้ครบถ้วน',
        type: 'error',
        confirmButtonText: 'ปิด'
      });
} else {
  if (data.value.pass === data.value.password) {
    this.checkpass = true;
    delete data.value.password;

    if (this.user.length === 0 ) {
    this.auth.register(data.value.email, data.value.pass);
      this.api.registerMember(data.value).subscribe();
      swal({
        title: 'สำเร็จ!',
        text: 'สมัครสมาชิกสำเร็จ ปิดหน้าต่างนี้เพื่อเข้าสู่ระบบ',
        type: 'success',
        confirmButtonText: 'ปิด'
      });
      this.router.navigate(['/login']);
    } else {
    let c = 0;
    for (let i = 0 ; i < this.user.length ; i++) {
      if (data.value.users === this.user[i].users) {
        c = c;
      } else {
        c++;
      }
    }
    if (c === this.user.length) {
      this.checkuser = true;
      this.auth.register(data.value.email, data.value.pass);
      this.api.registerMember(data.value).subscribe();
      swal({
        title: 'สำเร็จ!',
        text: 'สมัครสมาชิกสำเร็จ ปิดหน้าต่างนี้เพื่อเข้าสู่ระบบ',
        type: 'success',
        confirmButtonText: 'ปิด'
      });
      this.router.navigate(['/login']);
    } else {
      this.checkuser = false;
    }
  }
  } else {
    this.checkpass = false;
  }
}
    // console.log(data.value);
    // this.api.registerMember(data.value).subscribe();
    // this.auth.register(data.value.email, data.value.pass);
      // swal({
      //   title: 'สมัครสมาชิกสำเร็จ!',
      //   text: 'สมัครสมาชิกสำเร็จ ปิดหน้าต่างนี้เพื่อเข้าสู่ระบบ',
      //   type: 'success',
      //   confirmButtonText: 'ปิด'
      // });
    // if (dataUsers.value.users === '' || dataUsers.value.pass === '' || dataUsers.value.question === ''
    // || dataUsers.value.answer === '' || dataUsers.value.fname === '' || dataUsers.value.lname === ''
    // || dataUsers.value.day_of_birth === '' || dataUsers.value.id_card === '' || dataUsers.value.email === ''
    // || dataUsers.value.address === '' || dataUsers.value.phone_num === '') {
    //   swal({
    //     title: 'สมัครสมาชิกไม่สำเร็จ!',
    //     text: 'สมัครสมาชิกไม่สำเร็จ กรุณาตรวจสอบและกรอกข้อมูลให้ครบถ้วน',
    //     type: 'error',
    //     confirmButtonText: 'ปิด'
    //   });
    // } else {
    //   this.auth.register(dataUsers.value.email, dataUsers.value.pass);
    //   this.api.registerMember(dataUsers.value).subscribe();
    //   swal({
    //     title: 'สมัครสมาชิกสำเร็จ!',
    //     text: 'สมัครสมาชิกสำเร็จ ปิดหน้าต่างนี้เพื่อเข้าสู่ระบบ',
    //     type: 'success',
    //     confirmButtonText: 'ปิด'
    //   });
    //   this.router.navigate(['/login']);
    // }
  }

  /*sw_alert() {
    swal({
      title: 'สำเร็จ!',
      text: 'สมัครสมาชิกสำเร็จ',
      type: 'success',
      confirmButtonText: 'ปิด'
    }).then((result) => {
      if (result.value) {

      }
    });
  }*/
}
