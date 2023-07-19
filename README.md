# eslint-plugin-hpe-design-system

ESLint rules for the HPE Design System

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

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "hpe-design-system/rule-name": 2
  }
}
```

## Supported Rules

- Fill in provided rules here
