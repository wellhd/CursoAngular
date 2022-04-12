import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-nave',
  templateUrl: './nave.component.html',
  styleUrls: ['./nave.component.css'],
})
export class NaveComponent implements OnInit {
  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {}

  sair() {
    this.loginService.clearToken();
    this.router.navigate(['/login']);
  }
}
