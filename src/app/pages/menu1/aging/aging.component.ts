import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { Menu1Service } from '../menu1.service';
import { UserService } from 'src/app/home/user.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aging',
  templateUrl: './aging.component.html',
  styleUrls: ['./aging.component.css']
})
export class AgingComponent implements OnInit {
  date;
  /*--- ตัวแปรในฟังก์ชัน selectMenu() ---*/
  chk;
  name: any;
  idcheck = [];
  selectQuestions: string[] = [];
  /*--- ตัวแปรในฟังก์ชัน checkAll_list() ---*/
  a = 0;
  c = {
    check : false
  };
  /*--- ตัวแปรในฟังก์ชัน selectMenu() ---*/
  check = 3;
  data: any;
  count;

  constructor(private api: Menu1Service, private authAf: AngularFireAuth, private user: UserService,
    private router: Router) {
    this.date = new Date();
  }

  ngOnInit() {
    this.a = 0;

    this.api.showMenu1_aging().subscribe(data => {
      this.count = Object.values(data).length;        /* นับจำนวนรายการทั้งหมดในตาราง */
      this.data = Object.values(data);                /* Qurey ข้อมูล */
      for (let i = 0; i < Object.values(data).length; i++) {
        this.data[i].key = Object.keys(data)[i];
      }
    });

    this.authAf.authState.subscribe(datas => {          /* แสดงชื่อผู้บ่ม */
      this.user.showMemberByEmail(datas.email).subscribe(snap => {
        const values = Object.keys(snap).map(key => snap[key]);
        this.name = values[0].fname + ' ' + values[0].lname;
      });
    });
  }

  selectMenu(k) {      /* checkbox ทีละตัว */
    console.log(k);
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

  checkAll_list() {        /* checkbox ทั้งหมด */
    console.log(this.a);
    if (this.a === 0) {
       this.c.check = true;
       this.idcheck = [];
       this.data.forEach( a => {
          this.idcheck.push(a.key);
          this.selectQuestions.push(a.key);
       });
       this.a = 1;
    } else {
      this.c.check = false;
      this.a = 0;
      this.idcheck = [];
      this.selectQuestions = [];
    }
    console.log(this.idcheck);
  }

  dropdown_search(v) {        /* เลือกประเภทการ search */
    if (v.value === '1') {
      this.check = 4;
    } else {
      this.check = 6;
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

  // changeValue() {       /* เปลี่ยนค่าใน database */
  //   for (let i = 0; i < this.idcheck.length; i++) {
  //     this.api.updateStatus(this.idcheck[i], {process: true}).subscribe();
  //   }
  //   this.ngOnInit();
  // }

  sw_alert() {
    if (this.idcheck.length === 0) {
      console.log('Error');
    } else {
      this.router.navigate(['menu1/set-weight']);
      swal({
        title: 'สำเร็จ!',
        text: 'เลือกรายการบ่มซากเนื้อโคสำเร็จ',
        type: 'success',
        confirmButtonText: 'ปิด'
      });
      document.getElementById('openModalButton').click();
    }
  }
}
