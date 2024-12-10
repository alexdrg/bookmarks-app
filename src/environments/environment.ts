const releaseVersion = 'local';
const origin = new URL(window.location.origin);
const apiHost = 'localhost:8080';
const apiUrl = `${origin.protocol}//${apiHost}`;

export const environment = {
	envName: 'dev',
	appVersion: releaseVersion,
	url: apiUrl,
};