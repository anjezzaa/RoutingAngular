import { Component, computed, inject, input } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  userId = input.required<string>();
  private tasksService = inject(TasksService);
  userTasks = computed(() => 
    this.tasksService.allTasks().filter(tasks => tasks.userId === this.userId())
  );
}
