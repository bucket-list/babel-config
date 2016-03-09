"use strict";

// https://github.com/lodash/babel-plugin-lodash/issues/39
export default {
	[process.env.NODE_ENV]: process.env.NODE_ENV,
	test: "test"
};