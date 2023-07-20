# eslint-plugin-hpe-design-system

ESLint rules for the HPE Design System. This project is in an early alpha phase.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-hpe-design-system`:

```
$ npm install eslint-plugin-hpe-design-system --save-dev
```

## Usage

Add `hpe-design-system` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["hpe-design-system"]
}
```

It is not recommended to turn off rules. This may result in missed inline suggestions for HPE Design System best practices. If you are facing issues with a rule, please [file an issue](https://github.com/grommet/eslint-plugin-hpe-design-system/issues) so we can fix or enhance it.

## Testing unreleased features in your application

The `stable` branch is updated everytime a CircleCI build passes on `main` branch. To test out any features that are not yet part of an official release, adjust your package.json to point to the `stable` branch. The `stable` branch is not recommended for use in production.

```
"devDependencies": {
   ...
   "eslint-plugin-hpe-design-system": "https://github.com/grommet/eslint-plugin-hpe-design-system/tarball/stable",
   ...
}
```

For more details, read about [how to use stable branch](https://github.com/grommet/grommet/wiki/What-is-grommet-stable-and-how-to-use-it%3F).

## Supported Rules

Rules coming soon.
