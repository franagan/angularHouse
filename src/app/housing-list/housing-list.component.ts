import { HousingLocation } from './../housing-location';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {
  @Input() locationList: HousingLocation[] = [];
  results: HousingLocation[] =[];
  constructor() { }

  ngOnInit(): void {
  }
  searchHousingLocations(searchText: string) {
    if (!searchText) return;
   this.results = this.locationList.filter(
    (location:HousingLocation) => location.city.toLowerCase().includes(searchText.toLowerCase())
   );

  }
}
