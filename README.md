# nanonets

[NanoNets](https://nanonets.com)' Optical Character Recognition and Image Classification Node.js SDK.

NOTE: This SDK is under development. **Please do not use in production.**

Example usage:

```javascript
import { OpticalCharacterRecognition } from "./nanonets/index.js";

const apiKey = "";
const modelId = "";
const urlArray = ["", ""];
const startInterval = 18917;
const endInterval = 18919;
const fileId = "";

const ocr = new OpticalCharacterRecognition(apiKey, modelId);

console.log(await ocr.getModelDetails());
console.log(await ocr.getAllPredictedFileData(startInterval, endInterval));
console.log(await ocr.getPredictedFileDataById(fileId));
console.log(await ocr.predictUsingUrls(urlArray));
console.log(await ocr.predictUsingUrlsAsync(urlArray));
```
