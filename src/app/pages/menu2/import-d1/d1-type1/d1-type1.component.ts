import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { UserService } from 'src/app/home/user.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Menu2Service } from '../../menu2.service';
import { Menu1Service } from 'src/app/pages/menu1/menu1.service';

@Component({
  selector: 'app-d1-type1',
  templateUrl: './d1-type1.component.html',
  styleUrls: ['./d1-type1.component.css']
})
export class D1Type1Component implements OnInit {
  /*--- ตัวแปรในฟังก์ชัน checkAll_list() ---*/
  a = 0;
  c = {
    check : false
  };
  /*--- ตัวแปรในฟังก์ชัน selectMenu() ---*/
  check = 9;
  hh = true;
  data: any;
  count;

  constructor(private api: Menu2Service, private authAf: AngularFireAuth, private user: UserService,
    private router: Router, public api_menu1: Menu1Service) {
  }

  ngOnInit() {
    // this.api.showMenu2_importD1Type1().subscribe(data => {
    //   this.count = Object.values(data).length;        /* นับจำนวนรายการทั้งหมดในตาราง */
    //   this.data = Object.values(data);                /* Qurey ข้อมูล */
    //   for (let i = 0; i < Object.values(data).length; i++) {
    //     this.data[i].key = Object.keys(data)[i];
    //   }
    // });
      this.api_menu1.showMenu1_aging().subscribe(data => {
      this.count = Object.values(data).length;        /* นับจำนวนรายการทั้งหมดในตาราง */
      this.data = Object.values(data);                /* Qurey ข้อมูล */
      for (let i = 0; i < Object.values(data).length; i++) {
        this.data[i].key = Object.keys(data)[i];
      }
    });

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

  // hide(a) {
  //   this.hh = a;
  //   this.count = 5;
  // }
}
