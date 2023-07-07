# Nomo Test Automation Framework

This repository contains a test automation framework for automating tasks on the Nomo website using TestCafe and JavaScript.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Writing Tests](#writing-tests)
- [Running Tests](#running-tests)
- [Reporting](#reporting)

## Prerequisites

To use this framework, you need to have the following software installed on your machine:

- [Node.js](https://nodejs.org)
- [TestCafe](https://devexpress.github.io/testcafe/)

## Installation

To install the necessary dependencies, follow these steps:

1. Clone this repository: `git clone https://github.com/karimelkomy/nomo.git`
2. Navigate to the project directory: `cd nomo`
3. Install dependencies: `npm install`

## Writing Tests

The tests are written using TestCafe's JavaScript API. The test files are located in the `tests` directory. To create a new test, you can add a new JavaScript file in this directory.

You can refer to the [TestCafe documentation](https://devexpress.github.io/testcafe/documentation/test-api/) to learn more about writing tests with TestCafe.

## Running Tests

To run the tests, use the following command:

```
yarn at
```

This command will execute all the test files located in the `tests` directory.

You can also specify a specific test to run by providing `--customTest` as an argument:

```
yarn at --customTest validate-property-finance-amount-and-monthly-cost-in-gbp
```

## Reporting

After running the tests, the framework generates an HTML Allure report that provides detailed information about the test results. The report is located in the `allure` directory. and it will open directly.

## Video

Video Recording for the test scenarios can be found [Here](https://drive.google.com/file/d/1Bwo7eV74rBzsA-uTT1j3FjZlvuz9wRSc/view?usp=sharing)
