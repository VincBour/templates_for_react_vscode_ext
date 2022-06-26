// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { folderTemplatesStructure } from './commands/folderTemplatesStructure';
import { channel } from './outpuChannel/TemplatesChannel';
import { showInfo } from './utils/vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	channel.appendLine('Congratulations, your extension "Folder Templates" is now active!');

	const templateFolderPath = context.asAbsolutePath('.templates');
	
	let createFolder = vscode.commands.registerCommand(
		"templates.templates_for_react",
		(resource) => {
			showInfo('Folder Templates is working');
			return folderTemplatesStructure(resource, templateFolderPath);
		}
		
	);
	context.subscriptions.push(createFolder);
}

// this method is called when your extension is deactivated
export function deactivate() {}
