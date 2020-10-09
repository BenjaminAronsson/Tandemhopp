import { Component } from "@angular/core";
import { Company } from "./models/company";
import { NavLink } from "./models/navLink";
import { serviceViewModel } from "./models/serviceViewModel";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "tandemhopp";

  company: Company;

  links: NavLink[];

  homeServices: serviceViewModel[];

  constructor() {
    this.company = {
      companyName: "Plate Såg & Hyvleri AB",
      adress: "Plate 102 52392 TIMMELE",
      phone: "032-132-410",
      mobile: "0708-63 54 27",
      email: "info@platesagohyvleri.se",
    };

    this.title = this.company.companyName;

    this.links = [
      { title: "Hem", link: "home" },
      { title: "Boka tid", link: "book" },
      { title: "presentkort", link: "giftcard" },
      { title: "pris", link: "price" },
      { title: "Om", link: "about" },
      { title: "Kontakt", link: "contact" },
    ];
  }
}
