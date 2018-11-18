import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) {

  }

  ngOnInit() {
    this.auth.cookieAuth().subscribe(data => {      /* ดักBug ถ้ายังไม่ log in ให้กลับไปหน้า home*/
      if (data === null) {
        this.router.navigate(['/']);
      }
    });
  }

}
