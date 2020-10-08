import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  useDropDown = true;

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
