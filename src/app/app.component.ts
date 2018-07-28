import { Component, OnInit } from '@angular/core';
import { TripDataService } from './trip-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TripDataService]
})
export class AppComponent implements OnInit {
  title = 'Restart';
  adding_trip = false;
  delete_trip = false;
  mytitles = [];
  newTrip = {
    title: '',
  }
  delTrip = {
    title: '',
  }
  constructor(private dataServise: TripDataService) {}

  onClick(param) {
    this.title = param;
  }
  addTrip() {
   this.adding_trip = true;
  }

deleteTrip() {
  this.dataServise.deleteTripOnService(this.delTrip);
  this.delTrip = {title: ''};
  this.delete_trip = false;
}

  doDeleteTrip() {
    this.delete_trip = true;
  }
  cancelAddTrip() {
    this.adding_trip = false;
  }
  doAddTrip() {
    this.dataServise.addTrips(this.newTrip);
   this.newTrip = {title: ''};
    this.adding_trip = false;
  }
     ngOnInit() {
  this.mytitles = this.dataServise.getTrips();
}

}
