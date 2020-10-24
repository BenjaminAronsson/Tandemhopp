import { Component, Input, OnInit } from "@angular/core";
import { ChildActivationEnd } from "@angular/router";
import { ContainerViewModel } from "src/app/models/ContainerViewModel";

@Component({
  selector: "app-container",
  templateUrl: "./container.component.html",
  styleUrls: ["./container.component.scss"],
})
export class ContainerComponent implements OnInit {
  @Input() title = "";
  @Input() subtitle = "";

  constructor() {}

  ngOnInit(): void {}
}
