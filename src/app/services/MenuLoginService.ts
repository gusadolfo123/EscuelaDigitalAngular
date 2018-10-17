import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MenuLoginService {
  private isLoged: boolean = false;
  constructor() {}

  getIsLoged(): boolean {
    return this.isLoged;
  }
  setIsLoged(val: boolean) {
    this.isLoged = val;
  }
}
