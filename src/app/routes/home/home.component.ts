import { Component, Input, OnInit } from "@angular/core";
import { serviceViewModel } from "src/app/models/serviceViewModel";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor() {}

  services: serviceViewModel[];
  title = "Våra produkter";
  subtitle = "Vi inriktar oss på lego hyvling åt företag.";

  ngOnInit(): void {
    this.services = [
      {
        title: "Försäljning",
        text:
          "av sågade, hyvlade trävaror, pallkragsvirke, reglar, råspont,paneler, listverk.",
        image: "assets/icons/woodicon.svg",
      },
      {
        title: "Biprodukter",
        text: "utterspån & klyvspån.",
        image: "assets/icons/treeIcon.svg",
      },
    ];
  }
}
