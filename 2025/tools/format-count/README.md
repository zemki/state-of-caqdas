# Counting Formats
Use this scripts to quickly count the occurrences of supported data formats.

## Installation and usage

You need to have NodeJS and NPM (optional, usually comes with NodeJS) installed.
You can retrieve them from https://nodejs.org/en

Then clone or download this repository and run the script in your terminal.
To run the script you need to execute the following command:

```js
node run.js /path/to/data.csv
```

where `/path/to/data.csv` is the path to the final data table that contains
all collected data, including information about supported formats.

## Constraints

- counts only formats that can be imported for use within the software
- exported formats are omitted as they are likely used in external software
- cleaning is limited to trimming and removing whitespace + quotes; input formats must be consistent

## Found a bug?

Please open an issue if you found a bug or error in the calculations
to improve reliability.
