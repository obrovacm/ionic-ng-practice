import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { LoadingController } from "@ionic/angular";

import { AuthService } from "./auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.page.html",
  styleUrls: ["./auth.page.scss"],
})
export class AuthPage implements OnInit {
  // isLoading = false;
  isLoginMode = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {}

  onLogin() {
    // this.isLoading = true;
    this.loadingCtrl
      .create({ keyboardClose: true, message: "Logging in..." })
      .then((loadingEl) => {
        loadingEl.present();

        setTimeout(() => {
          loadingEl.dismiss();
          this.router.navigateByUrl("/places");
          // this.isLoading = false;
        }, 1500);
      });
    this.authService.login();
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    if (this.isLoginMode) {
      // Send a request to login servers
    } else {
      // Send a request to signup servers
    }
    console.log("auth form:", form);
  }

  onSwitchAuthMode() {
    this.isLoginMode = !this.isLoginMode;
  }
}
