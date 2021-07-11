"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeMailer = void 0;
const nodeMailer = require("nodemailer");
class NodeMailer {
    static initializeTransport() {
        return nodeMailer.createTransport({
            host: 'smtp.office365.com',
            secure: false,
            port: 587,
            auth: {
                user: 'homepc91@outlook.com',
                pass: 'Passw0rd@enter'
            }
            // service: "outlook",
            // host: 'smtp.office365.com',
            //  host: 'smtp.live.com',
            //  host: 'smtp.gmail.com',
        });
    }
    static sendEmail(data) {
        return NodeMailer.initializeTransport().sendMail({
            from: 'homepc91@outlook.com',
            to: data.to,
            subject: data.subject,
            html: data.html
        });
    }
}
exports.NodeMailer = NodeMailer;
