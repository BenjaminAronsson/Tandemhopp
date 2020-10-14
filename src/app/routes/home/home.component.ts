import { Component, Input, OnInit } from "@angular/core";
import { serviceViewModel } from "src/app/models/serviceViewModel";
import { sliderViewModel } from "src/app/models/sliderViewModel";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor() {}

  services: serviceViewModel[];
  slides: sliderViewModel[];
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

    this.slides = [
      {
        title1: "Häng med oss upp i luften,",
        title2: "",
        title3: " fritt fall i ",
        title4: "200 km/h!",
        text:
          "Med fyra generationers erfarenhet och egen energi direkt från Ätran.",
        image: "assets/images/tandemhopp/chopper.jpg",
      },
    ];
  }
}
