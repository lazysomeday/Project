import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-aging',
  templateUrl: './history-aging.component.html',
  styleUrls: ['./history-aging.component.css']
})
export class HistoryAgingComponent implements OnInit {

  constructor() { }

  check = 11;

  ngOnInit() {
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
}
