import { Component, computed, EventEmitter, Input, input, Output} from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Input({required: true}) user!: User
  @Output() onSelect = new EventEmitter<string>();
  @Input({required: true}) isSelected!: boolean;
  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(){
    this.onSelect.emit(this.user.id);
  }
}

