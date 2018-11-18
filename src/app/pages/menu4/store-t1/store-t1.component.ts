import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { AngularFireAuth } from 'angularfire2/auth';
import { GlobalService } from 'src/app/global.service';
import { Menu4Service } from '../menu4.service';

@Component({
  selector: 'app-store-t1',
  templateUrl: './store-t1.component.html',
  styleUrls: ['./store-t1.component.css']
})
export class StoreT1Component implements OnInit {
  check = 3;
  items = {
    $key: '',
    code: '',
    type: '',
    barcode: '',
    weight_w: '',
    weight_c: '',
    age: '',
    status: '',
    grade: '',
    price: ''
  };

  $key = '';
  public user;
  detail;
  public privilege_id;
  count;
  datas: any;
  dis: boolean;

  constructor(public db: AngularFireDatabase, private afAuth: AngularFireAuth, private global: GlobalService,
    private api: Menu4Service) {
  }

  ngOnInit() {
    this.afAuth.authState.subscribe(data => {

      this.detail = this.db.list('/users', ref => ref.orderByChild('email').equalTo(data.email)).valueChanges();
      this.detail.subscribe( snap => {
        snap.forEach(element => {
          this.global.setUser(element.users);
          this.privilege_id = element.privilege_id;

          if (this.privilege_id === '1') {
            this.dis = false;
          } else {
            this.dis = true;
          }
        });
      });
    });

    this.api.showMenu4_store_t1().subscribe(data => {          /* Qurey ข้อมูล */
      this.count = Object.values(data).length;
      this.datas = Object.values(data);
      for (let i = 0; i < Object.values(data).length; i++) {
        this.datas[i].key = Object.keys(data)[i];
      }
    });
  }

  selectMenu(v) {
    if ( v.value === '1') {
      this.check = 3;
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

  editForm($key, code, type, barcode, weight_w, weight_c, age, status, grade, price) {
    this.items.$key = $key;
    this.items.code = code;
    this.items.type = type;
    this.items.barcode = barcode;
    this.items.weight_w = weight_w;
    this.items.weight_c = weight_c;
    this.items.age = age;
    this.items.status = status;
    this.items.grade = grade;
    this.items.price = price;
  }

  onEdit(key, ed: NgForm) {
    this.api.editMenu4_store_t1(key, ed.value).subscribe();
    this.ngOnInit();
    swal({
      title: 'สำเร็จ!',
      text: 'บันทึกการเปลี่ยนแปลงสำเร็จ',
      type: 'success',
      confirmButtonText: 'ปิด',
      // showConfirmButton: false
    });
    document.getElementById('openModalButton').click();
  }

  onDelete(key) {
    swal({
      title: 'ยืนยัน!',
      text: 'ต้องการลบข้อมูลนี้หรือไม่?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'ยืนยัน',
      cancelButtonText: 'กลับ'
    }).then((result) => {
      if (result.value) {
        this.api.removeMenu4_store_t1(key).subscribe();
        this.ngOnInit();
        swal({
          title: 'สำเร็จ!',
          text: 'ลบข้อมูลสำเร็จ',
          type: 'success',
          showConfirmButton: true,
          confirmButtonText: 'ปิด'
        });
      }
    });
  }

  filter_1(e1) {
    console.log(e1.value);
    if (e1.value === 'ทั้งหมด') {
      this.api.showMenu4_store_t1().subscribe(data => {
        this.count = Object.values(data).length;
        this.datas = Object.values(data);
        for (let i = 0; i < Object.values(data).length; i++) {
          this.datas[i].key = Object.keys(data)[i];
        }
      });
    } else {
      this.api.filter1(e1.value).subscribe(data => {
        if (data != null) {
          this.count = Object.values(data).length;
          this.datas = Object.values(data);
          for (let i = 0; i < Object.values(data).length; i++) {
            this.datas[i].key = Object.keys(data)[i];
        }
      } else {
          this.count = 0;
          this.datas = [];
        }
      });
    }
  }
  filter_2(e2) {
    console.log(e2.value);
    if (e2.value === 'ทั้งหมด') {
      this.api.showMenu4_store_t1().subscribe(data => {
      this.count = Object.values(data).length;
      this.datas = Object.values(data);
      for (let i = 0; i < Object.values(data).length; i++) {
        this.datas[i].key = Object.keys(data)[i];
        }
      });
    } else {
      this.api.filter2(e2.value).subscribe(data => {
        if (data != null) {
          this.count = Object.values(data).length;
          this.datas = Object.values(data);
          for (let i = 0; i < Object.values(data).length; i++) {
            this.datas[i].key = Object.keys(data)[i];
        }
      } else {
          this.count = 0;
          this.datas = [];
        }
      });
    }
  }
  filter_3(e3) {
    console.log(e3.value);
    if (e3.value === 'ทั้งหมด') {
      this.api.showMenu4_store_t1().subscribe(data => {
      this.count = Object.values(data).length;
      this.datas = Object.values(data);
      for (let i = 0; i < Object.values(data).length; i++) {
        this.datas[i].key = Object.keys(data)[i];
        }
      });
    } else {
      this.api.filter3(e3.value).subscribe(data => {
        if (data != null) {
          this.count = Object.values(data).length;
          this.datas = Object.values(data);
          for (let i = 0; i < Object.values(data).length; i++) {
            this.datas[i].key = Object.keys(data)[i];
        }
      } else {
          this.count = 0;
          this.datas = [];
        }
      });
    }
  }
  filter_4(e4) {
    console.log(e4.value);
    if (e4.value === 'ทั้งหมด') {
      this.api.showMenu4_store_t1().subscribe(data => {
      this.count = Object.values(data).length;
      this.datas = Object.values(data);
      for (let i = 0; i < Object.values(data).length; i++) {
        this.datas[i].key = Object.keys(data)[i];
        }
      });
    } else {
      this.api.filter4(e4.value).subscribe(data => {
        if (data != null) {
          this.count = Object.values(data).length;
          this.datas = Object.values(data);
          for (let i = 0; i < Object.values(data).length; i++) {
            this.datas[i].key = Object.keys(data)[i];
        }
      } else {
          this.count = 0;
          this.datas = [];
        }
      });
    }
  }
}
