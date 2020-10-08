import { Platform } from "@angular/cdk/platform";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  constructor(platform: Platform) {}

  get useDropDown(): boolean {
    return window.innerWidth < 700;
  }

  links: { link: string; name: string }[] = [
    { name: "Hem", link: "home" },
    { name: "Boka tid", link: "book" },
    { name: "presentkort", link: "giftcard" },
    { name: "pris", link: "price" },
    { name: "Om", link: "about" },
    { name: "Kontakt", link: "contact" },
  ];

  ngOnInit(): void {}
}
