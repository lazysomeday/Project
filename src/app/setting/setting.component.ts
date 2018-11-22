import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { ApiService } from '../api.service';
import swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  items = {
    $key: '',
    fname: '',
    lname: '',
    users: '',
    email: '',
    privilege_id: ''
  };
  date;
  datas: any;
  count;

  constructor(private db: AngularFireDatabase, private api: ApiService) {
    this.date = new Date();
  }

  ngOnInit() {

    this.api.settingStatusMember().subscribe(data => {          /* Qurey ข้อมูล */
      this.count = Object.values(data).length;
      this.datas = Object.values(data);
      for (let i = 0; i < Object.values(data).length; i++) {
        this.datas[i].key = Object.keys(data)[i];
      }
    });
  }

  addDataM1_aging(dt: NgForm) {
    if ( dt.value.code1 === ''  || dt.value.barcode1 === '' || dt.value.weight1 === ''
    || dt.value.code2 === '' || dt.value.barcode2 === '' || dt.value.weight2 === '') {
      swal({
        title: 'ผิดพลาด!',
        text: 'เพิ่มข้อมูลตารางไม่สำเร็จ กรุณากรอกข้อมูลให้ครบถ้วน',
        type: 'error',
        confirmButtonText: 'ปิด',
      });
    } else {
      this.api.addMenu1_aging(dt.value).subscribe();
      swal({
        title: 'สำเร็จ!',
        text: 'เพิ่มข้อมูลตารางสำเร็จ',
        type: 'success',
        confirmButtonText: 'ปิด',
      });
    }
  }

  addDataM1_setWeight(de: NgForm) {
    console.log(de.value);
    if ( de.value.code1 === ''  || de.value.barcode1 === '' || de.value.weight_w1 === ''
    || de.value.code2 === '' || de.value.barcode2 === ''
    || de.value.weight_w2 === '' || de.value.name_aging === '') {  // de.value.weight_c1 === '' ||
      swal({
        title: 'ผิดพลาด!',
        text: 'เพิ่มข้อมูลตารางไม่สำเร็จ กรุณากรอกข้อมูลให้ครบถ้วน',
        type: 'error',
        confirmButtonText: 'ปิด',
      });
    } else {
      this.api.addMenu1_setweight(de.value).subscribe();
      swal({
        title: 'สำเร็จ!',
        text: 'เพิ่มข้อมูลตารางสำเร็จ',
        type: 'success',
        confirmButtonText: 'ปิด',
      });
    }
  }

  addDataM2_importD1Type1(dq: NgForm) {
    console.log(dq.value);
    if ( dq.value.code === '' || dq.value.type === '' || dq.value.barcode === ''
    || dq.value.weight_w === '' || dq.value.status === ''
    || dq.value.room === '' || dq.value.name_import === '') {
      swal({
        title: 'ผิดพลาด!',
        text: 'เพิ่มข้อมูลตารางไม่สำเร็จ กรุณากรอกข้อมูลให้ครบถ้วน',
        type: 'error',
        confirmButtonText: 'ปิด',
      });
    } else {
      this.api.addMenu2_importD1Type1(dq.value).subscribe();
      swal({
        title: 'สำเร็จ!',
        text: 'เพิ่มข้อมูลตารางสำเร็จ',
        type: 'success',
        confirmButtonText: 'ปิด',
      });
    }
  }

  edit_StatusMember($key, fname, lname, users, email, privilege_id) {
    this.items.fname = fname;
    this.items.lname = lname;
    this.items.users = users;
    this.items.email = email;
    this.items.$key = $key;
    this.items.privilege_id = privilege_id;
    console.log(this.items.privilege_id);
  }

  onEdit_StatusMember(key, dd: NgForm) {
    console.log(key, dd.value);
    this.api.editStatusMember(key, dd.value).subscribe();
    this.ngOnInit();
    swal({
      title: 'สำเร็จ!',
      text: 'บันทึกการตั้งค่าสิทธิ์ของผู้ใช้งานสำเร็จ',
      type: 'success',
      confirmButtonText: 'ปิด',
     // showConfirmButton: false
    });
    document.getElementById('closeModel').click();
   // setTimeout(() => location.reload(), 1500);
  }

  addDataM4_store1(aa: NgForm) {
    console.log(aa.value);
    if ( aa.value.code === ''  || aa.value.type === '' || aa.value.barcode === ''
    || aa.value.weight_w === '' || aa.value.weight_c === '' || aa.value.age === ''
    || aa.value.status === '' || aa.value.grade === '' || aa.value.price === '') {
      swal({
        title: 'ผิดพลาด!',
        text: 'เพิ่มข้อมูลตารางไม่สำเร็จ กรุณากรอกข้อมูลให้ครบถ้วน',
        type: 'error',
        confirmButtonText: 'ปิด',
      });
    } else {
      this.api.addMenu4_store(aa.value).subscribe();
      swal({
        title: 'สำเร็จ!',
        text: 'เพิ่มข้อมูลตารางสำเร็จ',
        type: 'success',
        confirmButtonText: 'ปิด',
      });
    }
  }

  sw_alert() {
    swal({
      title: 'ยืนยัน!',
      text: 'ต้องการลบบัญชีผู้ใช้งานนี้หรือไม่?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'ยืนยัน',
      cancelButtonText: 'กลับ'
    }).then((result) => {
      if (result.value) {
        swal({
          title: 'สำเร็จ!',
          text: 'ลบผู้ใช้งานสำเร็จ!',
          type: 'success',
          confirmButtonText: 'ปิด'
        });
      }
    });
  }
}
