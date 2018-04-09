export class SendgridModel {
    public to: string;
    public from: string;
    public subject: string;
    public text: string;
    public html: string;
    public includes: string;
    public length: Number;
    public push: string;
    public pop: string;

    constructor( email: SendgridModel) {
        this.to = email.to;
        this.from = email.from;
        this.subject = email.subject;
        this.text = email.text;
        this.html = email.html;
        this.includes = email.includes;
        this.length = email.length;
        this.push = email.push;
        this.pop = email.pop;
    }
}
