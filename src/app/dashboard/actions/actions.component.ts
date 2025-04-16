import { Component } from '@angular/core';
import { checkTypes } from '../projects/add/add.component';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.css',
})
export class ActionsComponent {
  showAddProject: boolean = false;
  showAddIssue: boolean = false;
  showAddUser: boolean = false;

  projectData: checkTypes[] = [];

  setshowAddProject(status: boolean): void {
    this.showAddProject = status;
  }

  setshowAddIssue(status: boolean): void {
    this.showAddIssue = status;
  }

  setshowAddUser(status: boolean): void {
    this.showAddUser = status;
  }
}
