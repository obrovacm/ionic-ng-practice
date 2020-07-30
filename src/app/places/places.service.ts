import { Injectable } from "@angular/core";
import { Place } from "./place.model";

@Injectable({
  providedIn: "root",
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      "p1",
      "Manhattan Mansion",
      "In the heart of New York City.",
      "https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200",
      149.99,
      new Date("2020-08-03"),
      new Date("2020-12-03")
    ),
    new Place(
      "p2",
      "L'Amour Toujours",
      "A romantic place in Paris!",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Paris_Night.jpg/1024px-Paris_Night.jpg",
      189.99,
      new Date("2020-07-03"),
      new Date("2020-07-13")
    ),
    new Place(
      "p3",
      "The Foggy Palace",
      "Not your average city trip!",
      "https://upload.wikimedia.org/wikipedia/commons/0/01/San_Francisco_with_two_bridges_and_the_fog.jpg",
      99.99,
      new Date("2020-12-03"),
      new Date("2020-12-06")
    ),
    new Place(
      "p4",
      "Ticking home",
      "It's time for Novi Sad!",
      "https://upload.wikimedia.org/wikipedia/commons/3/32/Petrovaradin_Clock_Tower%2C_Novi_Sad.jpg",
      22.01,
      new Date("2020-11-29"),
      new Date("2021-01-03")
    ),
  ];

  get places() {
    return [...this._places];
  }

  constructor() {}

  getPlace(id: string) {
    return { ...this._places.find((p) => p.id === id) };
  }
}
