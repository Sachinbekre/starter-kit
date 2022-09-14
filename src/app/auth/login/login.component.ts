import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'app/services/login.service';

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  };

  onSubmit(value: any): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loginService.getUser().subscribe(
      (res) => {
        console.log(res)
        if (res) {
          this.router.navigate(['/pages']);
        } else {
        }
      },
      (err) => {}
    );
  }
}
