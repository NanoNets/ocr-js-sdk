import fetch from "node-fetch";

if (!globalThis.fetch) {
	globalThis.fetch = fetch;
}

export class OpticalCharacterRecognition {
	constructor(apiKey, modelId) {
		this.apiKey = apiKey;
		this.modelId = modelId;
		this.authHeaderVal =
			"Basic " + Buffer.from(`${this.apiKey}:`).toString("base64");
	}

	async getModelDetails() {
		const response = await fetch(
			`https://app.nanonets.com/api/v2/OCR/Model/${this.modelId}`,
			{
				headers: {
					"Authorization": this.authHeaderVal,
					"Accept": "application/json"
				}
			}
		);
		const data = response.json();

		return data;
	}

	async getAllPredictedFileData(startInterval, endInterval) {
		const response = await fetch(
			`https://app.nanonets.com/api/v2/Inferences/Model/${this.modelId}/ImageLevelInferences/?start_day_interval=${startInterval}&current_batch_day=${endInterval}`,
			{
				headers: {
					"Authorization": this.authHeaderVal,
					"Accept": "application/json"
				}
			}
		);
		const data = response.json();

		return data;
	}

	async getPredictedFileDataById(fileId) {
		const response = await fetch(
			`https://app.nanonets.com/api/v2/Inferences/Model/${this.modelId}/ImageLevelInferences/${fileId}`,
			{
				headers: {
					"Authorization": this.authHeaderVal,
					"Accept": "application/json"
				}
			}
		);
		const data = response.json();

		return data;
	}

	async predictUsingUrls(urlArray) {
		let encodedUrls = new URLSearchParams();
		for (let i = 0; i < urlArray.length; i++) {
			encodedUrls.append("urls", urlArray[i]);
		}
		encodedUrls = encodedUrls.toString();

		const response = await fetch(
			`https://app.nanonets.com/api/v2/OCR/Model/${this.modelId}/LabelUrls`,
			{
				method: "POST",
				headers: {
					"Authorization": this.authHeaderVal,
					"Content-Type": "application/x-www-form-urlencoded",
					"Accept": "application/json"
				},
				body: encodedUrls
			}
		);
		const data = response.json();

		return data;
	}

	async predictUsingUrlsAsync(urlArray) {
		let encodedUrls = new URLSearchParams();
		for (let i = 0; i < urlArray.length; i++) {
			encodedUrls.append("urls", urlArray[i]);
		}
		encodedUrls = encodedUrls.toString();

		const response = await fetch(
			`https://app.nanonets.com/api/v2/OCR/Model/${this.modelId}/LabelUrls/?async=true`,
			{
				method: "POST",
				headers: {
					"Authorization": this.authHeaderVal,
					"Content-Type": "application/x-www-form-urlencoded",
					"Accept": "application/json"
				},
				body: encodedUrls
			}
		);
		const data = response.json();

		return data;
	}
}
