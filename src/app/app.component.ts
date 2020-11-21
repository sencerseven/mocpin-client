import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string = 'AGM project';
  lat: number;
  lng: number;
  zoom: number;
  loading = false;

  
  constructor(private router: Router) {
   
  }

  
  ngOnInit(): void
  {
    this.title = 'My first AGM project';
    this.lat = 51.678418;
    this.lng = 7.809007;
  }
 
}