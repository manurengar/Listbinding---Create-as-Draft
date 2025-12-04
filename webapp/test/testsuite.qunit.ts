export default {
	name: "Unit test suite for the UI5 Application: mrg.sample",
	defaults: {
		page: "ui5://test-resources/mrg/sample/Test.qunit.html?testsuite={suite}&test={name}",
		qunit: {
			version: 2
		},
		ui5: {
			theme: "sap_horizon"
		},
		loader: {
			paths: {
				"mrg/sample": "../"
			}
		}
	},
	tests: {
		"unit/unitTests": {
			title: "Unit tests for the UI5 Application: mrg.sample"
		},
		"integration/opaTests": {
			title: "Integration tests for the UI5 Application: mrg.sample"
		}
	}
};
