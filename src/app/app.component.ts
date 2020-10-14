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
      companyName: "Skydive Sweden AB",
      adress: "Vårgårda Flygplats, 447 91 Vårgårda",
      phone: "020-12 15 18",
      mobile: null,
      email: "info@tandemhopp.se",
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
