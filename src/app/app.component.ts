import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
import { MenuLoginService } from "./services/MenuLoginService";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "PrototipoAngular";
  constructor(private menuLoginService: MenuLoginService) {
    $(document).ready(function() {
      if (!menuLoginService.getIsLoged())
        $("#content").attr("class", "container");
      else $("#content").attr("class", "");

      $("#sidebarCollapse").on("click", function() {
        // agrego estilo container cuando se ocula el sidebar
        if (
          $("#sidebar").attr("class") == "" ||
          $("#sidebar").attr("class") == undefined
        )
          $("#content").attr("class", "container");
        else $("#content").attr("class", "");

        $("#sidebar").toggleClass("active");
      });
    });
  }

  ngOnInit() {
    if (!this.menuLoginService.getIsLoged())
      $("#content").attr("class", "container");
    else $("#content").attr("class", "");
  }
}
