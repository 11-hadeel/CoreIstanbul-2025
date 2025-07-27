import { Component ,OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})

export class UserListComponent implements OnInit {
  users: any[] = [];
  loading = true;
  error = '';
constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userService.getAllUsers().subscribe({
      next: data => {
        this.users = data;
        this.loading = false;
      },
      error: err => {
        this.error = 'Could not load users';
        this.loading = false;
  }
    });
  }

  goToUser(id: number) {
    this.router.navigate(['/user', id]);
  }
}