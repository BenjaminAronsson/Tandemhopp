import { Component, Input, OnInit } from "@angular/core";
import { serviceViewModel } from "src/app/models/serviceViewModel";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"],
})
export class ServicesComponent implements OnInit {
  @Input() services: serviceViewModel[];
  @Input() title = "title";
  @Input() subtitle = "Subtitle";
  @Input() backgroundImage = "assets/images/tandemhopp/flying.jpg";

  constructor() {}

  ngOnInit(): void {}
}
