import { Component, Input } from '@angular/core';
import { checkTypes } from './add/add.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  @Input() projectData!: checkTypes[];
}
