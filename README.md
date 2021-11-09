# nanonets

The [NanoNets](https://nanonets.com) Optical Character Recognition and Image Classification Node.js SDK.

> NOTE:
>
> -   This package supports both CommonJS and ES Module systems.
> -   All API requests from the browser will fail due to CORS policies.
> -   API Keys have full access to the user's account. **Please do not expose API Keys on the client.**
>     -   Please note that compiling, obfuscating, minifying or bundling (for example in React.js, Angular, Vue.js, React Native, etc.) **does not** hide the API Key and **it can still be extracted from the final application**.
>     -   The API Key should only be known to the server code and all client requests to the API must go through a server.

## Installation

```
npm install nanonets
```

## Use the NanoNets SDK

> NOTE: A fully working example using the SDK can be found in the [example](example) directory.

1. Import/require the 'nanonets' package.

```javascript
// ES Modules
import { OpticalCharacterRecognition, ImageClassification } from "nanonets";

// CommonJS
const OpticalCharacterRecognition =
	require("nanonets").OpticalCharacterRecognition;
const ImageClassification = require("nanonets").ImageClassification;
// OR
const {
	OpticalCharacterRecognition,
	ImageClassification
} = require("nanonets");
```

2. Instantiate the Optical Character Recognition (OCR) and/or Image Classification (IC) class.

```javascript
const ocr = new OpticalCharacterRecognition(apiKey, modelId);
const ic = new ImageClassification(apiKey, modelId);
```

> NOTE:
>
> -   The API Key can be found in the user's [NanoNets Account section](https://app.nanonets.com/#/keys) and Model ID can be found in the model's settings in the NanoNets web app.
> -   Models need to be created and trained from [the NanoNets web app](https://app.nanonets.com) before being able to make predictions.

3. Use the [Optical Character Recognition API](#optical-character-recognition-api) and/or [Image Classification API](#image-classification-api) to get prediction results from the model(s).

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

> The `getAllPredictedFileData` function returns a promise, so it needs to be awaited.

### Get Predicted File Data

```javascript
await ocr.getPredictedFileData(fileId);
```

#### Parameters

-   `fileId`
    -   Type: String
    -   Required: True

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

> The `predictUsingFile` function returns a promise, so it needs to be awaited.

## Image Classification API

### Table of Contents

-   [Class Instantiation (Constructor)](#class-instantiation-constructor-1)
-   [Get Model Details](#get-model-details-1)
-   [Predict Using URLs](#predict-using-urls-1)
-   [Predict Using File](#predict-using-file-1)

### Class Instantiation (Constructor)

```javascript
const ic = new ImageClassification(apiKey, modelId);
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
await ic.getModelDetails();
```

> The `getModelDetails` function returns a promise, so it needs to be awaited.

### Predict Using URLs

```javascript
await ic.predictUsingUrls(urlArray);
```

#### Parameters

-   `urlArray`
    -   Type: Array of Strings
    -   Required: True

> The `predictUsingUrls` function returns a promise, so it needs to be awaited.

### Predict Using File

```javascript
await ic.predictUsingFile(filePath);
```

#### Parameters

-   `filePath`
    -   Type: String
    -   Required: True

> The `predictUsingFile` function returns a promise, so it needs to be awaited.
