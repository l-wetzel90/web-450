import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.css"]
})
export class SignInComponent implements OnInit {
  form: FormGroup;

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private fb: FormBuilder,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      empId: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern("^[0-9]*$")
        ])
      ]
    });
  }

  login() {
    const empId = this.form.controls["empId"].value;
    console.log(empId);

    this.http.get("/api/employees/" + empId).subscribe(res => {
      if (res) {
        this.cookieService.set("session_user", empId);
        this.router.navigate(["tasks"]);
      } else {
        this.snackBar.open(
          "The employee id you entered is invalid, please try again.",
          "ERROR",
          { duration: 3000, verticalPosition: "top" }
        );
      }
    });
  }
}
