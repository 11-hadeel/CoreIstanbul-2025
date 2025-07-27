import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-details',
  standalone: false,
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: any;
  loading = true;
  error = '';

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUserById(id).subscribe({
      next: data => {
        this.user = data;
        this.loading = false;
      },
      error: err => {
        this.error = 'User not found';
        this.loading = false;
      }
    });
  }
}