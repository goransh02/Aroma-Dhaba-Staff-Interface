import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';

import { HttpClient, HttpParams } from '@angular/common/http';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})


export class HomepageComponent {
   temp: any;
  pendingproducts: any;
  acceptedproducts: any;
  dispatchedproducts: any;
  panelOpenState = true;
  orders = [
    {
        token: 0,
        items: [
            {
                index: 0,
                quantity: 2,
            },
            {
                index: 1,
                quantity: 3,
            },
        ],
        total_amt: 110,
        status: 0,
        details: {
            name: "Paneer Frankie",
            phone: "9636541817",
            hostel: "h3",
        }
    },
    {
        token: 1,
        items: [
            {
                index: 0,
                quantity: 2,
            },
            {
                index: 1,
                quantity: 3,
            },
        ],
        total_amt: 110,
        status: 0,
        details: {
            name: "Paneer Frankie",
            phone: "9636541817",
            hostel: "h3",
        }
    },
]
  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    var url = "http://192.168.0.100:3000/get_pending_orders/"
    
    this.http.get<any>(url).subscribe(
      data => {
        this.pendingproducts = data
        console.log(data)
      }
    )


  }

  delete(temp:  number){
    var url =  "http://192.168.0.100:3000/get_pending_orders/"
    const params = new HttpParams().set('id', temp);
    this.http.delete(url, { params })
    .subscribe(
      result => console.log(result),
      err => console.error(err)
    );
  }
}