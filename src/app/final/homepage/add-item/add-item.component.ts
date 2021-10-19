import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  name: any;
  desc : any;
  price: any;
  message: any;
  constructor(private http: HttpClient, private router: Router, private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    
  }
  contactSubmit(){
    var url="http://127.0.0.1:8000/contact/";
    var body = new FormData();
    body.append('name', this.name)
    body.append('desc', this.desc)
    body.append('price', this.price)
    body.append('message', this.message)
    this.http.post<any>(url,body).subscribe(
      data=>{
        console.log(data)
        if (data=="success"){
          alert("Query Sent Successfully");
        }
      }
    )
  }
}
