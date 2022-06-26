import { OutputChannel, window } from "vscode";

class TemplatesChannel {
    private static channel: OutputChannel;

    constructor() { }

    public static getChannel(): OutputChannel {
        if (!this.channel) {
            this.channel = window.createOutputChannel('Folder Templates');
        }
        return this.channel;
    }
}

export const channel = TemplatesChannel.getChannel();