# LearnNode

## Sample Data

To load sample data, run the following command in your terminal:

```bash
npm run sample
```

If you have previously loaded in this data, you can wipe your database 100% clean with:

```bash
npm run blowitallaway
```

That will populate 16 stores with 3 authors and 41 reviews. The logins for the authors are as follows:

|Name|Email (login)|Password|
|---|---|---|
|Wes Bos|wes@example.com|wes|
|Debbie Downer|debbie@example.com|debbie|
|Beau|beau@example.com|beau|

## Lesson 1

1st step is to run `npm install` or `yarn install`to install all the depenencies.

## Lesson 2

Setup mongo database using mLab and then installing local database gui MongoDB Compass.

Setup `variables.env` file that contains database credentials.

## Lesson 3

`yarn start` to kick off server at `localhost:7777`

## Lesson 4

Learned about routes and how express uses req and respond
* req has all the information
* resond has all the methods for sending data back
* query has all the query params from url
* params can access items from url

Learn more on the [Express Docs][express docs]

## Lesson 5

* `res.render()` renders out a template
* template language we are using is called Pug(formerly named Jade)
* `views` directory contains all our Pug files

### Pug

* is tab-based
* don't need a closing tag
* attributes inside () like this <br>
`img(src="dog.jpg", alt=`Dog ${dog}`)`


[express docs]: https://expressjs.com/en/guide/routing.html