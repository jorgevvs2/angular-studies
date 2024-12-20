import { Component, computed, EventEmitter, Input, input, Output} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Input({required: true}) user!: User
  @Output() onSelect = new EventEmitter<string>();

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(){
    this.onSelect.emit(this.user.id);
  }
}

