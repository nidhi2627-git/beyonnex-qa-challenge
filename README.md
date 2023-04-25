# Browser Automation with WebdriverIO & Typescript

This is a test automation framework for UI application built using WebdriverIO & Typescript.

## Features
- Designed with Page Object Pattern for managing the test cases.
- Using Jasmine framework.
- Using Spec Reporter.
- Supports cross browser testing.
- Using Docker

## How to run the tests locally

Install dependencies:
```
$npm install
```

Run the tests:
```
npm run wdio
```

## How to run the tests in docker container
- Open the terminal on a folder where the project is cloned.
- Run below command to build the docker image:
```
$docker build -t wdiotestrun .
```

- Run the above docker image:
```
$docker run wdiotestrun
```





