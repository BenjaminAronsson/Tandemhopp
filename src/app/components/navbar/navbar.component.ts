import { Platform } from "@angular/cdk/platform";
import { Component, Input, OnInit } from "@angular/core";
import { NavLink } from "src/app/models/navLink";

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

  @Input() links: NavLink[] = [];

  ngOnInit(): void {}

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
}
