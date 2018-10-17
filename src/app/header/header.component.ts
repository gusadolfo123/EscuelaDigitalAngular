import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    $(document).ready(function() {
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
}
