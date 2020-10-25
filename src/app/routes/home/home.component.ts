import { ViewportScroller } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { serviceViewModel } from "src/app/models/serviceViewModel";
import { sliderViewModel } from "src/app/models/sliderViewModel";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(private controller: ViewportScroller) {}

  services: serviceViewModel[];
  slides: sliderViewModel[];
  title = "Så går tandemhoppet till";
  subtitle = "Checklista innan du åker hemifrån";
  bacgrkoundColor = "#0460D8"; //styles.tandemhoppPrimnary;
  bacgrkoundColor2 = "#0460a8"; //styles.tandemhoppPrimnary;

  scroll(elementId: string) {
    this.controller.scrollToAnchor(elementId);
  }

  ngOnInit(): void {
    this.services = [
      {
        title: "Genomgång",
        text:
          "Instruktören går igenom tandemhoppet med dig. Han går också igenom några enkla säkerhetsregler. Om det är något du undrar över så passa på att fråga. Du får också skriva på hälso- och ansvarsdeklarationen där du bekräftar att du är fullt frisk och att du har förstått att tandemhoppning innebär vissa risker.",
        image: "assets/icons/parachute.svg",
      },
      {
        title: "Förberedelser",
        text:
          "Passa på att gå på toaletten för efter genomgången tar du på dig overall, hjälm och skyddsglasögon som du får låna av oss. Har du glasögon så får du bara ett par större skyddsglasögon. Du får också hjälp med att ta på dig den sele som kommer att kopplas ihop med fallskärmen och din instruktör.",
        image: "assets/icons/parachute.svg",
      },
      {
        title: "På väg till flygplanet",
        text:
          "Medan ni väntar på att flygplanet skall starta upp eller landa, görs det upp i vilken ordning alla i planet ska hoppa av. Ni som tandemekipage hoppar alltid sist eftersom ni kommer lösa ut skärmen högre än de andra, 1 500 meter istället för 900 meter. Det är för att du ska få njuta av utsikten under en längre tid.",
        image: "assets/icons/parachute.svg",
      },
      {
        title: "4 000 meter – dags att hoppa ut!",
        text:
          "Tillsammans med dem andra hopparna flyger ni upp till 3 500-4 000 meter över marken. Det innebär en flygtur på ungefär 20 minuter. När ni nått uthoppshöjd flyger planet in mot flygfältet och flygplansdörren öppnas. Från och med nu har du bara en uppgift: Att uppleva och njuta! Planet töms och till sist är det nu din tur att hoppa ut!",
        image: "assets/icons/parachute.svg",
      },
      {
        title: "Du flyger!",
        text:
          "I det fria fallet som varar nästan en minut når ni en tandembild frifallhastighet på drygt 200 km/t. Genom att använda armar och ben som roder kan instruktören få er att både svänga och förflytta er så att ni och videomannen kan flyga runt varandra.",
        image: "assets/icons/parachute.svg",
      },
      {
        title: "Fallskärmen",
        text:
          "När ni fallit ner till 1 500 meters höjd aktiverar instruktören fallskärmen. Nu styr ni er sakta tillbaka till flygfältet. Kanske ser du dina vänner som står därnere och väntar? Passa på att njuta av utsikten och synen av dina egna fötter som hänger och dinglar med inget annat än luft under sig.",
        image: "assets/icons/parachute.svg",
      },
      {
        title: "Landning",
        text:
          "Inför landningen drar du upp benen som ni har övat på marken. Det är för att tandempiloten ska kunna landa på ett säkert sätt.",
        image: "assets/icons/parachute.svg",
      },
    ];

    this.slides = [
      {
        title1: "Häng med oss upp i luften,",
        title2: "",
        title3: " fritt fall i ",
        title4: "200 km/h!",
        text: "",
        image: "assets/images/tandemhopp/chopper.jpg",
      },
    ];
  }
}
