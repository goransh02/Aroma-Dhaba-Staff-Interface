import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'Staff-Aroma';
  constructor(private http: HttpClient, private router: Router) {}

}
