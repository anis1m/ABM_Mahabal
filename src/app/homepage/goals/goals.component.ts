import { Component } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.css',
})
export class GoalsComponent {
  titles: String[] = [
    'Get out of outdated spreadsheets',
    'See all work in progress at a glance',
    'Easily analyze workflows for bottlenecks and inefficiencies',
    'Reduce app switching',
  ];

  descriptions: String[] = [
    'With a single source of truth, you can check in on any task at any time and get the most up-to-date information available.',
    'Visual tools like Kanban-style boards, Gantt charts, and burndown charts make it easy to get a high-level view of your project at any time.',
    'See where tasks are getting stuck in your workflow, so you can add resources, refine your process, or change requirements.',
    'Organize all your tasks, files, wikis, and code without switching to a different tool or breaking focus.',
  ];

  images: String[] = ['836', '837', '838', '839'];
}
