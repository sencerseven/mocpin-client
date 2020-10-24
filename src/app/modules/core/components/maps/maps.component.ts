import { MapsAPILoader } from '@agm/core';
import { Component, ElementRef, EventEmitter, Input, NgZone, OnInit, Output, ViewChild } from '@angular/core';

export class mapsModel{

  latitude:number;
  longitude:number;
  address:string;
 
}

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  
  @Output("maps") maps: EventEmitter<mapsModel> = new EventEmitter();
  @Input("inputMaps") inputMaps: any;
  
  title: string = 'AGM project';
  latitude: number;
  longitude: number;

  mapsModel:mapsModel;

  zoom: number;
  address: string;
  private geoCoder;

  @ViewChild('search')
  public searchElementRef: ElementRef;


  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }


  ngOnInit() {
    this.mapsModel = new mapsModel();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.geoCoder = new google.maps.Geocoder;
      this.setLocation();
      

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
debugger;
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          console.log(place.geometry.location.lat());
          
          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
          this.getAddress(this.latitude,this.longitude);
        });
      });
    });
  }

  // Get Current Location Coordinates
  private setLocation() {
    if(!this.inputMaps){
      if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition((position) => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
          this.zoom = 15;
          this.getAddress(this.latitude, this.longitude);
        });
      }
    }else{
          this.latitude =this.inputMaps.latitude;
          this.longitude = this.inputMaps.longitude;
          this.zoom = 15;
          this.getAddress(this.latitude, this.longitude);
    }
    
  }


  markerDragEnd($event: MouseEvent) {
    this.latitude = $event['coords'].lat;
    this.longitude = $event['coords'].lng;
    this.getAddress(this.latitude, this.longitude);
  }

  getAddress(latitude, longitude) {
   
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
     
      if (status === 'OK') {
        if (results[0]) {
          this.address = results[0].formatted_address;
          debugger;
          //this.mapsModel.address = results[0].formatted_address;
          this.mapsModel.address = this.address;
          this.mapsModel.latitude = latitude;
          this.mapsModel.longitude = longitude;
          this.maps.emit(this.mapsModel);
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }

}
