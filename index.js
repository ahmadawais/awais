#!/usr/bin/env node
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome');
const chalk = require('chalk');
const dim = chalk.dim;
const italic = chalk.italic;
const twitterClr = chalk.hex(`#1da1f2`).bold.inverse;
const githubClr = chalk.hex(`#6cc644`).bold.inverse;
const purple = chalk.hex(`#6937FF`).bold.inverse;

// Alerts.
const sym = require('log-symbols');
const success = chalk.green.inverse;
const info = chalk.blue.inverse;
const warning = chalk.keyword(`orange`).inverse;
const error = chalk.red.bold.inverse;

welcome({
	title: `Ahmad Awais`,
	tagLine: `Howdy, nice to meet ya!`,
	description: pkgJSON.description,
	version: pkgJSON.version,
	bgColor: `#6937FF`,
	color: `#000000`,
	bold: true,
	clear: true,
});

console.log(`${italic(
	`Award-winning open-source engineer and developer advocate. Author of various open-source dev-tools and software libraries used by millions of developers worldwide. Leading developers and publishing technical content for over a decade. Self-confessed tech comedian cracking silly jokes in the JavaScript web and cloud communities.`
)}

${twitterClr(` Twitter `)} ${dim(`https://twitter.com/MrAhmadAwais`)}
${githubClr(` GitHub `)}  ${dim(`https://github.com/AhmadAwais`)}
${purple(` Blog `)}    ${dim(`https://AhmadAwais.com`)}
`);

console.log(`
${sym.success} ${success(` SUCCESS `)} Thank for checking out my CLI.

${sym.info} ${info(` INFO `)} I'm creating a course on NodeCLI.com

${sym.warning} ${warning(` WARNING `)} Please don't copy me. Be yourself.

${sym.error} ${error(` ERROR `)} I'm on vacation. Contact me next week.
`);
