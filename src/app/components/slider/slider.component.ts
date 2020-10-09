import { Component, Input, OnInit } from "@angular/core";
import { sliderViewModel } from "src/app/models/sliderViewModel";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"],
})
export class SliderComponent implements OnInit {
  constructor() {}

  @Input() slides: sliderViewModel[] = [];

  ngOnInit(): void {}
}
