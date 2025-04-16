import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface checkTypes {
  id: number;
  name: String;
  description: String;
  createdAt: Date;
  lastModified?: Date;
}

@Component({
  selector: 'app-add-project',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  @Output() close = new EventEmitter<void>();
  @Input() projectData!: checkTypes[];
  onCancel() {
    this.close.emit();
  }

  data: checkTypes = {
    id: 0,
    name: '',
    description: '',
    createdAt: new Date(),
  };

  handleSubmit(e: SubmitEvent, name: String, description: String) {
    e.preventDefault();
    console.log(this.projectData);
    this.data.id = this.data.id + 1;
    this.data.name = name;
    this.data.description = description;
    this.projectData.push(this.data);
  }
}
