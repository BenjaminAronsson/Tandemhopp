import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Company } from "src/app/models/company";
import { EmailFormModel } from "src/app/models/emailFormModel";
// import { SMTPClient } from "emailjs";

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
    // const client = new SMTPClient({
    //   user: "websitecontactfeedback@gmail.com",
    //   password: "Y9hQZvWp$*8n$88f2UV##9bD@bnkKW@esM^",
    //   host: "smtp.gmail.com",
    //   ssl: true,
    // });
    // const message = {
    //   text: "i hope this works",
    //   from: "you <websitecontactfeedback@gmail.com",
    //   to: "someone <someone@your-email.com>, another bene.a99@gmail.com",
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
    // client.send(message, function (err, message) {
    //   console.log(err || message);
    // });
    // Email.send({
    //   Host: "smtp.gmail.com",
    //   Username: "websitecontactfeedback@gmail.com",
    //   Password: "Y9hQZvWp$*8n$88f2UV##9bD@bnkKW@esM^",
    //   To: "bene.a99@gmail.com",
    //   From: "websitecontactfeedback@gmail.com",
    //   Subject: this.model.subject,
    //   Body: `
    // <i>This is sent as a feedback from your website.</i> <br/> <b>Name: </b>${this.model.name} <br /> <b>Email: </b>${this.model.email}<br /> <b>Subject: </b>${this.model.subject}<br /> <b>Message:</b> <br /> ${this.model.message} <br><br> <b>~End of Message.~</b> `,
    // }).then((message) => {
    //   form.resetForm();
    // });
  }
}
