# axios-graphql-extended

## About
A light weight library to generate Axios`s GraphQL query from JSON.

<br/>&nbsp;

## Installation
Local installation
```shell
npm install axios-graphql-extended --save
```
<br/>&nbsp;

## Functionality Available
<table>
  <tr>
    <td>Syntax</td>
    <td>Parameter *</td>
    <td>Output</td>
  <tr>
  <tr>
    <td>buildQuery</td>
    <td>JSON Object</td>
    <td>GraphQL Query for Axios</td>
  </tr>
</table>
<br />
*Note: Last child in JSON object hierarchy should be assigned null value
<br/>&nbsp;

## Usage
Once installed in your project. It can be used as:

```shell
import { buildQuery } from 'axios-graphql-builder'

buildQuery(JsonInput)
```

<br/>&nbsp;

## Output
* buildQuery: Return a GraphQl Query which can be directly passed into Axios.

<br/>&nbsp;

## Contact
* Author: Subhendu Kumar Sahoo
* Email: smaro.nitr@gmail.com
* Website: https://smaro-nitr.github.io
* Always welcome for a bugfix, feature suggestion, and feedback
