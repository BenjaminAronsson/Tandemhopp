import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Company } from "src/app/models/company";
import { EmailFormModel } from "src/app/models/emailFormModel";
// import { SMTPClient } from "emailjs";
// import { nodemailer } from "../../../../node_modules/nodemailer";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"],
})
export class FooterComponent implements OnInit {
  constructor(private http: HttpClient) {}

  @Input() company: Company;
  model: EmailFormModel = new EmailFormModel();
  year = "";

  ngOnInit(): void {
    let date = new Date();
    this.year = date.getFullYear().toString();
  }

  onSubmit(form: NgForm) {
    throw "NOT IMPLEMTED";
    // let transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: "websitecontactfeedback@gmail.com",
    //     pass: "Y9hQZvWp$*8n$88f2UV##9bD@bnkKW@esM^",
    //   },
    // });
    // var mailOptions = {
    //   from: "websitecontactfeedback@gmail.com",
    //   to: this.company.email,
    //   subject: "Sending Email from contactpage",
    //   text: `<i>This is sent as a feedback from your website.</i> <br/> <b>Name: </b>${this.model.name} <br /> <b>Email: </b>${this.model.email}<br /> <b>Subject: </b>${this.model.subject}<br /> <b>Message:</b> <br /> ${this.model.message} <br><br> <b>~End of Message.~</b>`,
    // };
    // transporter.sendMail(mailOptions, function (error, info) {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log("Email sent: " + info.response);
    //   }
    // });
    // return;
    // const client = new SMTPClient({
    //   user: "websitecontactfeedback@gmail.com",
    //   password: "Y9hQZvWp$*8n$88f2UV##9bD@bnkKW@esM^",
    //   host: "smtp.gmail.com",
    //   ssl: true,
    // });
    // const message = {
    //   text: "i hope this works",
    //   from: "you <websitecontactfeedback@gmail.com",
    //   to: this.company.companyName + " " + this.company.email,
    //   cc: this.model.email,
    //   subject: this.model.subject,
    //   attachment: [
    //     {
    //       data: `<i>This is sent as a feedback from your website.</i> <br/> <b>Name: </b>${this.model.name} <br /> <b>Email: </b>${this.model.email}<br /> <b>Subject: </b>${this.model.subject}<br /> <b>Message:</b> <br /> ${this.model.message} <br><br> <b>~End of Message.~</b>`,
    //       alternative: true,
    //     },
    //     {
    //       path: "path/to/file.zip",
    //       type: "application/zip",
    //       name: "renamed.zip",
    //     },
    //   ],
    //   attachments: null,
    //   header: null,
    //   content: null,
    //   alternative: null,
    //   attach: null,
    //   valid: null,
    //   stream: null,
    //   read: null,
    // };
    // // send the message and get a callback with an error or details of the message that was sent
    // client.send(message, (err, message) => {
    //   console.log(err || message);
    // });
  }
}
