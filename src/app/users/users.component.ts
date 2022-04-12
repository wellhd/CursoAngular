import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/business/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: any[] | undefined;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.fetchUsers().subscribe((resposta) => {
      this.users = resposta.data;
    });
  }
}
