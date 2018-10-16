import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { HeaderComponent } from "./header/header.component";
import { ListCoursesComponent } from "./list-courses/list-courses.component";
import { ListCategoriesComponent } from "./list-categories/list-categories.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { FooterComponent } from "./footer/footer.component";
import { SliderComponent } from "./slider/slider.component";

const routes: Route[] = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "categories", component: ListCategoriesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    ListCoursesComponent,
    ListCategoriesComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    SliderComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
