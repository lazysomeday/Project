import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SimulationService } from '../simulation.service';
import swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-department1',
  templateUrl: './department1.component.html',
  styleUrls: ['./department1.component.css']
})
export class Department1Component implements OnInit {
  date;

  constructor(private api: SimulationService) {
    this.date = new Date();
  }

  ngOnInit() {
  }

  addDp1(dt: NgForm) {
    console.log(dt.value);
    if ( dt.value.code1 === ''  || dt.value.barcode1 === '' || dt.value.weight1 === ''
    || dt.value.code2 === '' || dt.value.barcode2 === '' || dt.value.weight2 === ''
    || dt.value.type === '' || dt.value.room === '' || dt.value.name_import === '') {
      swal({
        title: 'ผิดพลาด!',
        text: 'เพิ่มข้อมูลไม่สำเร็จ กรุณากรอกข้อมูลให้ครบถ้วน',
        type: 'error',
        confirmButtonText: 'ปิด',
      });
    } else {
      this.api.addDepartment1(dt.value).subscribe();
      swal({
        title: 'สำเร็จ!',
        text: 'เพิ่มข้อมูลสำเร็จ',
        type: 'success',
        confirmButtonText: 'ปิด',
      });
    }
  }

}
