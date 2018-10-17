import { Component, OnInit } from "@angular/core";
import { Login } from "../interfaces/login";
import { MenuLoginService } from "../services/MenuLoginService";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  dataLogin: Login = {
    user: null,
    password: null
  };

  constructor(private menuLoginService: MenuLoginService) {}

  ngOnInit() {}

  login() {
    this.menuLoginService.setIsLoged(true);
  }
}
