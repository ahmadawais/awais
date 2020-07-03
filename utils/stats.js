const ora = require('ora');
const axios = require('axios');
const handleError = require('cli-handle-error');
const to = require('await-to-js').default;

const spinner = ora({ text: '' });
const apiURL = `https://api.github.com/users/ahmadawais`;

module.exports = async () => {
	spinner.start(`Fetching GitHub followers…`);
	const [error, res] = await to(axios.get(apiURL));
	handleError(`API CALL FAILED`, error, true, true);

	const ghFollowers = res.data.followers;
	spinner.succeed(`Got 'em!!!`);

	console.log(`
GitHub Followers: ${ghFollowers}
`);
};
