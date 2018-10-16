import { Component, OnInit } from "@angular/core";
import { Course } from "../interfaces/course";

@Component({
  selector: "app-list-courses",
  templateUrl: "./list-courses.component.html",
  styleUrls: ["./list-courses.component.css"]
})
export class ListCoursesComponent implements OnInit {
  courses: Course[];
  constructor() {
    this.courses = [
      {
        id: 1,
        title: "Historia de Colombia",
        description:
          "Breve Curso sobre la Historia de Colombia desde 1910 a 2016",
        instructor: "Pepito Perez",
        qualification: 5,
        urlImage: "assets/img/curso1.jpg"
      },
      {
        id: 2,
        title: "Matematicas Basicas",
        description: "Breve Curso donde te enseñamos los operadores numericos",
        instructor: "Pepito Perez",
        qualification: 4,
        urlImage: "assets/img/curso1.jpg"
      },
      {
        id: 3,
        title: "Geografia",
        description:
          "Curso Enfocado en enseñar las diferentes regiones de nuestro pais",
        instructor: "Pepito Perez",
        qualification: 3.5,
        urlImage: "assets/img/curso1.jpg"
      },
      {
        id: 3,
        title: "Geografia",
        description:
          "Curso Enfocado en enseñar las diferentes regiones de nuestro pais",
        instructor: "Pepito Perez",
        qualification: 3.5,
        urlImage: "assets/img/curso1.jpg"
      },
      {
        id: 3,
        title: "Geografia",
        description:
          "Curso Enfocado en enseñar las diferentes regiones de nuestro pais",
        instructor: "Pepito Perez",
        qualification: 3.5,
        urlImage: "assets/img/curso1.jpg"
      },
      {
        id: 3,
        title: "Geografia",
        description:
          "Curso Enfocado en enseñar las diferentes regiones de nuestro pais",
        instructor: "Pepito Perez",
        qualification: 3.5,
        urlImage: "assets/img/curso1.jpg"
      },
      {
        id: 3,
        title: "Geografia",
        description:
          "Curso Enfocado en enseñar las diferentes regiones de nuestro pais",
        instructor: "Pepito Perez",
        qualification: 3.5,
        urlImage: "assets/img/curso1.jpg"
      }
    ];
  }

  ngOnInit() {}
}
