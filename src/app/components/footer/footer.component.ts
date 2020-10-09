import { Component, Input, OnInit } from "@angular/core";
import { Company } from "src/app/models/company";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  constructor() {}

  @Input() company: Company;

  year = "";

  ngOnInit(): void {
    let date = new Date();
    this.year = date.getFullYear().toString();
  }
}
