// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "RXR" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('extension.helloWorld', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World!');
	});

	context.subscriptions.push(disposable);

	let mytest = vscode.commands.registerCommand('extension.mytest', (uri) => {
		// The code you place here will be executed every time your command is executed
	});

	context.subscriptions.push(mytest);
	context.subscriptions.push(vscode.commands.registerCommand('extension.demo.getCurrentFilePath', (uri) => {
		//vscode.window.showInformationMessage(`getCurrentFilePath:${uri ? uri.path : 'none'}`);
		vscode.window.showInformationMessage(uri.path);
		let terminal = vscode.window.createTerminal("Astyle");
		terminal.show(false);
		var path = uri.path.substr(1);
		var cmdStr = "Astyle.exe -A8 -xn -p -n -f -k1 -W1 "+path;
		terminal.sendText(cmdStr);
	}));
	// 编辑器命令
    context.subscriptions.push(vscode.commands.registerTextEditorCommand('extension.testEditorCommand', (textEditor, edit) => {
	console.log('您正在执行编辑器命令！');
	console.log(textEditor, edit);
}));

}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
