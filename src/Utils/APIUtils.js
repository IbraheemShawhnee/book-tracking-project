export function Request(url, method, body = {}, options = {}) {
	let _options = {
		...options,
	};
	if (method.toUpperCase() === "POST") {
		_options.body = JSON.stringify(body);
	}
	return fetch(url, {
		method,
		..._options,
	}).then(async (resp) => {
		if (resp.status === 200) {
			return await resp.json();
		} else {
			return [];
		}
	});
}
