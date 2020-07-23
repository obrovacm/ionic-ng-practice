import { Component, OnInit } from "@angular/core";
import { SegmentChangeEventDetail } from "@ionic/core";
import { PlacesService } from "../places.service";
import { Place } from "../place.model";

@Component({
  selector: "app-discover",
  templateUrl: "./discover.page.html",
  styleUrls: ["./discover.page.scss"],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[];
  listedLoadedPlaces: Place[];

  constructor(private placeService: PlacesService) {}

  ngOnInit() {
    this.loadedPlaces = this.placeService.places;
    this.listedLoadedPlaces = this.loadedPlaces.slice(1);
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail);
  }
}
