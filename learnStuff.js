/**
* To complete the learning of JS we must learn few things:
* - Node.js
* - Express.js
* - Angular.js
* - Mongodb
* - ES6
* - Promises
*/

var _ = require('lodash');
var q = require('q');

var stuffToLearn = [
  'nodejs',
  'expressjs',
  'angularjs',
  'mongodb',
  'es6',
  'promises'
];

function learnFullStackJS() {
  var learningStuff = new Array();

  _.each(stuffToLearn, function(stuff) {
    learningStuff.push(learnStuff(stuff));
  });

  return q.all(learningStuff);
}

function learnStuff(stuff) {
  return goThroughCodeSchool(stuff).then(function(message) {
    console.log(message);

    return watchPluralsightVideo(stuff).then(function(message) {
      console.log(message);

      return readBooks(stuff).then(function(message) {
        console.log(message + '. Also I\'ve finished learning ' + stuff + '.' );
      });
    });
  });
}

function goThroughCodeSchool(stuff) {
  var defer = q.defer();

  setTimeout(function() {
    defer.resolve('Hey, I\'ve just finished learning ' + stuff + ' on CodeSchool');
  }, parseInt(Math.random() * 1000));

  return defer.promise;
}

function watchPluralsightVideo(stuff) {
  var defer = q.defer();

  setTimeout(function() {
    defer.resolve('Hey, I\'ve just finished watching video on PluralSight about ' + stuff);
  }, parseInt(Math.random() * 1000));

  return defer.promise;
}

function readBooks(stuff) {
  var defer = q.defer();

  setTimeout(function() {
    defer.resolve('Hey, I\'ve just finished reading books about ' + stuff);
  }, parseInt(Math.random() * 1000));

  return defer.promise;
}

learnFullStackJS().then(function() {
  console.log('Yeay!!!! I know kung-fu!');
});

readBooks('SQL').then(function(message) {
  console.log(message);
});