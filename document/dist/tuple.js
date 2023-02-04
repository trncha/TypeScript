"use strict";
// tuple #
const pointTuple = [10, 20, "top"];
pointTuple[0] = 30;
console.log('Tuple', pointTuple);
console.log('Tuple pointTuple[2]', pointTuple[2]);
const goodStatus = [200, "OK"];
console.log('Tuple goodStatus', goodStatus);
// tuple label #
const goodStatusLabel = [200, "OK"];
console.log('Tuple goodStatusLabel', goodStatusLabel);
console.log('Tuple goodStatusLabel[0]', goodStatusLabel[0]);
const notFound = [404, "Not Found"];
const badRequest = [400, "Bad Request"];
console.log('Type Tuple notFound', notFound);
console.log('Type Tuple badRequest', badRequest);
