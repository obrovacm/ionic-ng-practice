import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NavController } from "@ionic/angular";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { PlacesService } from "../../places.service";
import { Place } from "../../place.model";

@Component({
  selector: "app-edit-offer",
  templateUrl: "./edit-offer.page.html",
  styleUrls: ["./edit-offer.page.scss"],
})
export class EditOfferPage implements OnInit {
  place: Place;
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private placeService: PlacesService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("offerId")) {
        // console.log(paramMap)
        this.navCtrl.navigateBack("/places/tabs/offers");
        return;
      }
      this.place = this.placeService.getPlace(paramMap.get("offerId"));

      this.form = new FormGroup({
        title: new FormControl(this.place.title, {
          updateOn: "blur",
          validators: [Validators.required],
        }),
        description: new FormControl(this.place.description, {
          updateOn: "blur",
          validators: [Validators.required, Validators.maxLength(180)],
        }),
        // price: new FormControl(this.place.price, {
        //   updateOn: "blur",
        //   validators: [Validators.required, Validators.min(1)],
        // }),
        // dateFrom: new FormControl(null, {
        //   updateOn: "blur",
        //   validators: [Validators.required],
        // }),
        // dateTo: new FormControl(null, {
        //   updateOn: "blur",
        //   validators: [Validators.required],
        // }),
      });
    });
  }

  onUpdateOffer() {
    if(!this.form.valid){
      return;
    }

    console.log(this.form);
  }
}
