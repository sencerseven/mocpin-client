import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';

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
  loading = true;

  
  constructor(private router: Router) {
    this.router.events.subscribe((e : RouterEvent) => {
        console.log("navigate");
        this.navigationInterceptor(e);
      
       
     });
  }

  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true
    }

    setTimeout(() =>{
      if (event instanceof NavigationEnd) {
        this.loading = false
      }
  
      // Set loading state to false in both of the below events to hide the spinner in case a request fails
      if (event instanceof NavigationCancel) {
        this.loading = false
      }
      if (event instanceof NavigationError) {
        this.loading = false
      }
    },300);
    
  }
  ngOnInit(): void
  {
    this.title = 'My first AGM project';
    this.lat = 51.678418;
    this.lng = 7.809007;
  }
 
}