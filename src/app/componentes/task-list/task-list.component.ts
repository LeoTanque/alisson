import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  tasks: any[] = [];
  errorMessage: string = '';

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.taskService.getAllTasks().subscribe({

      next: (data) => (this.tasks = data),

      error: (err) => (this.errorMessage = 'Error al cargar las tareas: ' + err.message),
    });
  }

  deleteTask(taskId: number): void {
    if (confirm('¿Estás seguro de eliminar esta tarea?')) {
      this.taskService.deleteTask(taskId).subscribe({
        next: () => {
          alert('Tarea eliminada con éxito.');
          this.loadTasks(); // Recargar la lista de tareas
        },
        error: (err) => alert('Error al eliminar la tarea: ' + err.message),
      });
    }
  }
}
