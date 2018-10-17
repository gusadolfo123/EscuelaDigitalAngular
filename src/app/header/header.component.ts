import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
import { MenuLoginService } from "../services/MenuLoginService";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(private menuLoginService: MenuLoginService) {}

  ngOnInit() {}

  showSidebar() {
    $("#sidebar").toggleClass("active");
    if (
      $("#sidebar").attr("class") == "" ||
      $("#sidebar").attr("class") == undefined
    )
      $("#content").attr("class", "container");
    else $("#content").attr("class", "");
  }
}
