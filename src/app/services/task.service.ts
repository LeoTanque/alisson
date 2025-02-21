import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:8080/api/tasks';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }


  getAllTasks(): Observable<any> {
    return this.http.get(this.apiUrl, { headers: this.getHeaders() });
  }

  getTaskById(taskId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${taskId}`, { headers: this.getHeaders() });
  }

  createTask(task: any): Observable<any> {
    return this.http.post(this.apiUrl, task, { headers: this.getHeaders() });
  }

  updateTask(taskId: number, task: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${taskId}`, task, { headers: this.getHeaders() });
  }

  deleteTask(taskId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${taskId}`, { headers: this.getHeaders() });
  }

}
