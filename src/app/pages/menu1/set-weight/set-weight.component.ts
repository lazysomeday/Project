import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { Menu1Service } from '../menu1.service';
import { UserService } from 'src/app/home/user.service';

@Component({
  selector: 'app-set-weight',
  templateUrl: './set-weight.component.html',
  styleUrls: ['./set-weight.component.css']
})
export class SetWeightComponent implements OnInit {
  date;
  chk;
  idcheck = [];
  selectQuestions: string[] = [];
  /*--- ตัวแปรในฟังก์ชัน checkAll_list() ---*/
  a = 0;
  c = {
    check : false
  };
  /*--- ตัวแปรในฟังก์ชัน selectMenu() ---*/
  check = 11;
  data: any;
  count;

  constructor(private api: Menu1Service, private user: UserService) {
    this.date = new Date();

  }

  // public ngOnInit(): void {
  //   const d = new Date('Sat Oct 27 2018 13:31:16 GMT+0700 (เวลาอินโดจีน)');
  //   console.log(d);
  //   d.setDate(d.getDate() + 10);
  //  console.log(d);
  // }

  ngOnInit() {
    this.api.showMenu1_setWeight().subscribe(data => {
      this.count = Object.values(data).length;        /* นับจำนวนรายการทั้งหมดในตาราง */
      this.data = Object.values(data);                /* Qurey ข้อมูล */
      for (let i = 0; i < Object.values(data).length; i++) {
        this.data[i].key = Object.keys(data)[i];
      }
    });
  }

  checkList(k) {      /* checkbox ทีละตัว */
    this.chk = this.selectQuestions.indexOf(k);
    if (this.chk >= 0) {
      this.idcheck.splice(this.chk, 1);
      this.selectQuestions.splice(this.chk, 1);
    } else {
      this.idcheck.push(k);
      this.selectQuestions.push(k);
    }
    console.log(this.idcheck);
  }

  selectMenu(v) {
    if ( v.value === '1') {
      this.check = 4;
    } else {
      this.check = 8;
    }
  }

  searchTable() {         /* ช่อง search ตาราง */
    let input, filter, table, tr, td, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    table = document.getElementById('tables');
    tr = table.getElementsByTagName('tr');

    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName('td')[this.check];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = '';
        } else {
          tr[i].style.display = 'none';
        }
      }
    }
  }

  sw_alert() {
    swal({
      title: 'ยืนยัน!',
      text: 'ต้องการยืนยันการกำหนดน้ำหนักหรือไม่?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'ยืนยัน',
      cancelButtonText: 'กลับ'
    }).then((result) => {
      if (result.value) {
        swal({
          title: 'สำเร็จ!',
          text: 'กำหนดน้ำหนักสำเร็จ',
          type: 'success',
          confirmButtonText: 'ปิด'
        });
      }
    });
  }
}
