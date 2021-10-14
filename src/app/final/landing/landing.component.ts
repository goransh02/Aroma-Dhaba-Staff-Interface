import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  pendingproducts: any;
  acceptedproducts: any;
  dispatchedproducts: any;
  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit(): void { }

  task: Task = {
    name: 'Vegeterian',
    completed: false,
    color: 'primary',
    subtasks: [
      { name: 'Paneer Sharwma', completed: false, color: 'primary' },
      { name: 'Paneer Frankie', completed: false, color: 'primary' },
      { name: 'Kurkure Chat', completed: false, color: 'primary' },
      { name: 'Paneer Tagda Frankie', completed: false, color: 'primary' },
      { name: 'Chilly Paneer Dry', completed: false, color: 'primary' },
      { name: 'Paneer Hakka Knoodles', completed: false, color: 'primary' },
    ]
  }; task1: Task = {
    name: 'Non-Veg',
    completed: false,
    color: 'primary',
    subtasks: [
      { name: 'Chicken Sharwma', completed: false, color: 'primary' },
      { name: 'Chicken Frankie', completed: false, color: 'primary' },
      { name: 'Chicken Knoodles', completed: false, color: 'primary' },
      { name: 'Chicken Tagda Frankie', completed: false, color: 'primary' },
      { name: 'Egg Paneer Frankie', completed: false, color: 'primary' },
      { name: 'Chicken Hakka Knoodles', completed: false, color: 'primary' },
    ]
  };

  allComplete: boolean = false;
  panelOpenState = false;
  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }

}

