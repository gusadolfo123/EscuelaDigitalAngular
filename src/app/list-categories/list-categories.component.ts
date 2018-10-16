import { Component, OnInit } from "@angular/core";
import { Category } from "../interfaces/category";

@Component({
  selector: "app-list-categories",
  templateUrl: "./list-categories.component.html",
  styleUrls: ["./list-categories.component.css"]
})
export class ListCategoriesComponent implements OnInit {
  categories: Category[];

  constructor() {
    this.categories = [
      {
        id: 1,
        title: "Matematicas",
        urlImage: "https://via.placeholder.com/150x150"
      },
      {
        id: 2,
        title: "Español",
        urlImage: "https://via.placeholder.com/150x150"
      },
      {
        id: 3,
        title: "Geografia",
        urlImage: "https://via.placeholder.com/150x150"
      }
    ];
  }

  ngOnInit() {}
}
