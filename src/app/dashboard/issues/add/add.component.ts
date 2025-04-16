import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-issues',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  @Output() close = new EventEmitter<void>();
  onCancel() {
    this.close.emit();
  }
}
