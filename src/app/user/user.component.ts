import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule], // Add CommonModule to imports
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  selectedUser: any;

  constructor() {
    this.getRandomUser();
  }

  getRandomUser(): void {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];
    console.log('Selected user:', this.selectedUser);
  }
}
