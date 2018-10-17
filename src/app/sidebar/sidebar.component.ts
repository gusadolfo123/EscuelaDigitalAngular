import { Component, OnInit } from "@angular/core";
import { MenuLoginService } from "../services/MenuLoginService";
import * as $ from "jquery";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  constructor(private menuLoginService: MenuLoginService) {}

  ngOnInit() {}

  leave() {
    this.menuLoginService.setIsLoged(false);
    $("#sidebar").toggleClass("active");
    if (
      $("#sidebar").attr("class") == "" ||
      $("#sidebar").attr("class") == undefined
    )
      $("#content").attr("class", "container");
    else $("#content").attr("class", "");
  }
}
