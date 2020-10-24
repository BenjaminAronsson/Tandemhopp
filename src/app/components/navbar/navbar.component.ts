import { Platform } from "@angular/cdk/platform";
import { ViewportScroller } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { NavLink } from "src/app/models/navLink";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  constructor(private controller: ViewportScroller) {}

  get useDropDown(): boolean {
    return window.innerWidth < 700;
  }

  @Input() links: NavLink[] = [];

  ngOnInit(): void {}

  scroll(elementId: string) {
    this.controller.scrollToAnchor(elementId);
  }
}
