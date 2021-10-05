import { Component, OnInit } from '@angular/core';

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
  highlights=[
    {title: "shiba inu", image: "https://material.angular.io/assets/img/examples/shiba2.jpg",date: "01/01/2000" , alt: "shiba inu",content: " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan"},
    {title: "shiba inu", image: "https://material.angular.io/assets/img/examples/shiba2.jpg",date: "01/01/2000" , alt: "shiba inu",content: " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan"},
    {title: "shiba inu", image: "https://material.angular.io/assets/img/examples/shiba2.jpg",date: "01/01/2000" , alt: "shiba inu",content: " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan"},
    {title: "shiba inu", image: "https://material.angular.io/assets/img/examples/shiba2.jpg",date: "01/01/2000" , alt: "shiba inu",content: " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan"},
    {title: "shiba inu", image: "https://material.angular.io/assets/img/examples/shiba2.jpg",date: "01/01/2000" , alt: "shiba inu",content: " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan"},
  ]

}
