import { createReadStream } from "fs";
import fetch from "node-fetch-3";
import FormData from "form-data";

export default class OpticalCharacterRecognition {
	constructor(apiKey, modelId) {
		if (!apiKey || !modelId)
			throw new Error(
				"NanoNets SDK Optical Character Recognition Constructor Error: Insufficient parameters passed."
			);
		else if (typeof apiKey !== "string" || typeof modelId !== "string")
			throw new Error(
				`NanoNets SDK Optical Character Recognition Constructor Error: Incorrect parameter data type. Expected 'string', got '${typeof apiKey}' and '${typeof modelId}'.`
			);
		else if (apiKey === "" || modelId === "")
			throw new Error(
				"NanoNets SDK Optical Character Recognition Constructor Error: Invalid API Key or Model ID. Empty string(s) passed."
			);

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
		if (!startInterval || !endInterval)
			throw new Error(
				"NanoNets SDK Optical Character Recognition getAllPredictedFileData() Error: Insufficient parameters passed."
			);
		else if (
			typeof startInterval !== "number" ||
			typeof endInterval !== "number"
		)
			throw new Error(
				`NanoNets SDK Optical Character Recognition getAllPredictedFileData() Error: Incorrect parameter data type. Expected 'number', got '${typeof startInterval}' and '${typeof endInterval}'.`
			);
		else if (startInterval < 0 || endInterval < 0)
			throw new Error(
				"NanoNets SDK Optical Character Recognition getAllPredictedFileData() Error: Interval value(s) < 0. Interval values should be non-negative."
			);

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

	async getPredictedFileData(fileId) {
		if (!fileId)
			throw new Error(
				"NanoNets SDK Optical Character Recognition getPredictedFileDataById() Error: File ID parameter not passed."
			);
		else if (typeof fileId !== "string")
			throw new Error(
				`NanoNets SDK Optical Character Recognition getPredictedFileDataById() Error: Incorrect parameter data type. Expected 'string', got '${typeof fileId}'.`
			);
		else if (fileId === "")
			throw new Error(
				`NanoNets SDK Optical Character Recognition predictUsingFile() Error: Empty file ID passed.`
			);

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

	async predictUsingUrls(urlArray, isAsync = false) {
		if (!urlArray)
			throw new Error(
				"NanoNets SDK Optical Character Recognition predictUsingUrls() Error: URL array parameter not passed."
			);
		else if (!Array.isArray(urlArray) || typeof isAsync !== "boolean") {
			const urlArrayType = Array.isArray(urlArray)
				? "array"
				: typeof urlArray;

			throw new Error(
				`NanoNets SDK Optical Character Recognition predictUsingUrls() Error: Incorrect parameter types. Expected 'array' and 'boolean', got '${urlArrayType}' and '${typeof isAsync}'.`
			);
		} else if (urlArray.length === 0)
			throw new Error(
				"NanoNets SDK Optical Character Recognition predictUsingUrls() Error: Empty URL array passed."
			);

		let encodedUrls = new URLSearchParams();
		for (let i = 0; i < urlArray.length; i++)
			encodedUrls.append("urls", urlArray[i]);

		let asyncParam = "";
		if (isAsync === true)
			asyncParam = "/?" + new URLSearchParams({ "async": "true" });

		const response = await fetch(
			`https://app.nanonets.com/api/v2/OCR/Model/${this.modelId}/LabelUrls${asyncParam}`,
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

	async predictUsingFile(filePath, isAsync = false) {
		if (!filePath)
			throw new Error(
				"NanoNets SDK Optical Character Recognition predictUsingFile() Error: File path parameter not passed."
			);
		else if (typeof filePath !== "string" || typeof isAsync !== "boolean")
			throw new Error(
				`NanoNets SDK Optical Character Recognition predictUsingFile() Error: Incorrect parameter data types. Expected 'string' and 'boolean', got '${typeof filePath}' and '${typeof isAsync}'.`
			);
		else if (filePath === "")
			throw new Error(
				`NanoNets SDK Optical Character Recognition predictUsingFile() Error: Empty file path passed.`
			);

		const fileStream = createReadStream(filePath);

		const formData = new FormData();
		formData.append("file", fileStream);

		let asyncParam = "";
		if (isAsync === true)
			asyncParam = "/?" + new URLSearchParams({ "async": "true" });

		const response = await fetch(
			`https://app.nanonets.com/api/v2/OCR/Model/${this.modelId}/LabelFile${asyncParam}`,
			{
				method: "POST",
				headers: {
					"Authorization": this.authHeaderVal,
					"Accept": "application/json"
				},
				body: formData
			}
		);
		const data = response.json();

		return data;
	}
}
