# NanoNets OCR Node.js SDK

The [NanoNets](https://nanonets.com) Optical Character Recognition (OCR) Node.js SDK.

> NOTE:
>
> -   This package supports both CommonJS and ES Module systems.
> -   All API requests from the browser will fail due to CORS policies.
> -   API Keys have full access to the user's account. **Please do not expose API Keys on the client.**
>     -   Please note that compiling, obfuscating, minifying or bundling (for example in React.js, Angular, Vue.js, React Native, etc.) **does not** hide the API Key and **it can still be extracted from the final application**.
>     -   The API Key should only be known to the server code and all client requests to the API must go through a server.

## Installation

```
npm install @nanonets/optical-character-recognition
```

## Use the NanoNets OCR SDK

> NOTE: A fully working example using the SDK can be found in the [example](example) directory.

1. Import/require the OCR package.

```javascript
// ES Modules
import OpticalCharacterRecognition from "@nanonets/optical-character-recognition";

// CommonJS
const OpticalCharacterRecognition = require("@nanonets/optical-character-recognition");
```

2. Instantiate the Optical Character Recognition (OCR) class.

```javascript
const ocr = new OpticalCharacterRecognition(apiKey, modelId);
```

> NOTE:
>
> -   The API Key can be found in the user's [NanoNets Account section](https://app.nanonets.com/#/keys) and Model ID can be found in the model's settings in the NanoNets web app.
> -   Models need to be created and trained from [the NanoNets web app](https://app.nanonets.com) before being able to make predictions.

3. Use the [Optical Character Recognition API](#optical-character-recognition-api) to get prediction results from the model(s).

## Optical Character Recognition API

### Table of Contents

-   [Class Instantiation (Constructor)](#class-instantiation-constructor)
-   [Get Model Details](#get-model-details)
-   [Get All Predicted File Data](#get-all-predicted-file-data)
-   [Get Predicted File Data](#get-predicted-file-data)
-   [Predict Using URLs](#predict-using-urls)
-   [Predict Using File](#predict-using-file)

### Class Instantiation (Constructor)

```javascript
const ocr = new OpticalCharacterRecognition(apiKey, modelId);
```

#### Parameters

-   `apiKey`
    -   Type: String
    -   Required: True
-   `modelId`
    -   Type: String
    -   Required: True

> NOTE:
>
> -   Class Instantiation is mandatory.
> -   The API Key can be found in the user's [NanoNets Account section](https://app.nanonets.com/#/keys) and Model ID can be found in the model's settings in the NanoNets web app.
> -   API Keys have full access to the user's account. **Please do not expose API Keys on the client.**
>     -   Please note that compiling, obfuscating, minifying or bundling (for example in React.js, Angular, Vue.js, React Native, etc.) **does not** hide the API Key and **it can still be extracted from the final application**.
>     -   The API Key should only be known to the server code and all client requests to the API must go through a server.

### Get Model Details

```javascript
await ocr.getModelDetails();
```

[Response example and other details](https://nanonets.com/documentation/#operation/OCRModelGetAllPredictionFiles)

> The `getModelDetails` function returns a promise, so it needs to be awaited.

### Get All Predicted File Data

```javascript
await ocr.getAllPredictedFileData(startInterval, endInterval);
```

#### Parameters

-   `startInterval`
    -   Type: Number (Integer)
    -   Required: True
-   `endInterval`
    -   Type: Number (Integer)
    -   Required: True

[Response example and other details](https://nanonets.com/documentation/#operation/OCRModelListPredictionFiles)

> The `getAllPredictedFileData` function returns a promise, so it needs to be awaited.

### Get Predicted File Data

```javascript
await ocr.getPredictedFileData(fileId);
```

#### Parameters

-   `fileId`
    -   Type: String
    -   Required: True

[Response example and other details](https://nanonets.com/documentation/#operation/OCRModelGetPredictionFileById)

> The `getPredictedFileData` function returns a promise, so it needs to be awaited.

### Predict Using URLs

```javascript
await ocr.predictUsingUrls(urlArray, isAsync);
```

#### Parameters

-   `urlArray`
    -   Type: Array of Strings
    -   Required: True
-   `isAsync`
    -   Type: Boolean
    -   Required: False
    -   Default: False

#### Response Example and Other Details

-   [Synchronous upload](https://nanonets.com/documentation/#operation/OCRModelLabelUrlsByModelIdPost)
-   [Asynchronous upload](https://nanonets.com/documentation/#operation/OCRModelLabelUrlsAsyncByModelIdPost)

> The `predictUsingUrls` function returns a promise, so it needs to be awaited.

### Predict Using File

```javascript
await ocr.predictUsingFile(filePath, isAsync);
```

#### Parameters

-   `filePath`
    -   Type: String
    -   Required: True
-   `isAsync`
    -   Type: Boolean
    -   Required: False
    -   Default: False

#### Response Example and Other Details

-   [Synchronous upload](https://nanonets.com/documentation/#operation/OCRModelLabelFileByModelIdPost)
-   [Asynchronous upload](https://nanonets.com/documentation/#operation/OCRModelLabelFileAsyncByModelIdPost)

> The `predictUsingFile` function returns a promise, so it needs to be awaited.
