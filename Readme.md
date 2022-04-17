# RESTful API for Coindesk

## scripts

- install all the packages

`npm i`
or
`yarn i`

- start the compiled app

`
npm run build npm run start
`

- start with hor reload in ts

`
npm run watch
`

- apply eslint check

`
npm run lint
`

- run test suit

`
npm run test
`

## Endpoints

GET: /getBitcoinInfo Request body: currency = <currency_code>

Returns:

- current rate
- highest rate in last 30 days (with date)
- lowest rate in last 30 days (with date)

Example Response:
`"{rateInfo:{code:INR,rate:3,078,347.1819,description:Indian Rupee,rate_float:3078347.1819},highestLast30Days:{date:2022-03-28,price:3666264.1831},lowestLast30Days:{date:2022-04-13,price:3038955.4884}}"`
