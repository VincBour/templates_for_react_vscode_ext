import * as path from 'path';

import { runTests } from 'vscode-test';

async function main() {
	try {
		// The folder containing the Extension Manifest package.json
		// Passed to `--extensionDevelopmentPath`
		const extensionDevelopmentPath = path.resolve(__dirname, '../../');
		const testWorkspace = path.resolve(
			__dirname,
			'../../testworkspace/workspace',
		  );
		// The path to test runner
		// Passed to --extensionTestsPath
		const extensionTestsPath = path.resolve(__dirname, './suite/index');

		// Download VS Code, unzip it and run the integration test
		await runTests({ extensionDevelopmentPath, extensionTestsPath, version: 'insiders', launchArgs: [testWorkspace, '--disable-extensions'] });
	} catch (err) {
		console.error('Failed to run tests');
		process.exit(1);
	}
}

main();
