var express = require('express');
var router = express.Router();
var passport = require('passport');

var User = require('../models/User.js');

//between Test and Question models it's a one-to-many (many) relationship
var Test = require('../models/Test.js');
var Question = require('../models/Question.js');

router.post('/register', function(req, res) {
  User.register(new User({
    username: req.body.username,
    firstName: req.body.firstname,
    lastName: req.body.lastname,
    faculty: req.body.faculty,
    degree: req.body.degree
  }), req.body.password, function(err, account) {
    if (err) {
      return res.status(500).json({
        err: err
      });
    }
    passport.authenticate('local')(req, res, function() {
      return res.status(200).json({
        status: 'Registration successful!'
      });
    });
  });
});

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({
        err: info
      });
    }
    req.logIn(user, function(err) {
      if (err) {
        return res.status(500).json({
          err: 'Could not log in user'
        });
      }
      res.status(200).json({
        status: 'Login successful!',
        username: req.body.username,
      });
    });
  })(req, res, next);
});

router.get('/logout', function(req, res) {
  req.logout();
  res.status(200).json({
    status: 'Bye!'
  });
});

router.get('/status', function(req, res) {
  if (!req.isAuthenticated()) {
    return res.status(200).json({
      status: false
    });
  }
  res.status(200).json({
    status: true
  });
});

router.post('/addTest', function(req, res) {
  // Create an instance of model Test 
  var test = new Test({ name: req.body.name, duration: req.body.duration });

  // Save the new model instance, passing a callback
  test.save(function (err) {
    if (err) {
      return res.status(500).json({
        status: false,
        message: 'Could not create new test',
        error: handleError(err),
      });
    }
    return res.status(200).json({
      status: true,
      message: 'Created new test successfully',
    });
  });
});

router.post('/addQuestion', function(req, res) {

  var options = [];

  if (typeof(req.body.option1) === 'string') {
    options.push(req.body.option1);
  }
  if (typeof(req.body.option2) === 'string') {
    options.push(req.body.option2);
  }
  if (typeof(req.body.option3) === 'string') {
    options.push(req.body.option3);
  }
  if (typeof(req.body.option4) === 'string') {
    options.push(req.body.option4);
  }

  // Create an instance of model Question 
  var question = new Question({
    content: req.body.content,
    answer: req.body.answer,
    options
  });

  // Save the new model instance, passing a callback
  question.save(function (err) {
    if (err) {
      return res.status(500).json({
        status: false,
        message: 'Could not create new question',
        error: handleError(err),
      });
    }

    console.log("The Question model to push is: " + question);
    
    //create relationship
    Test.findByIdAndUpdate(
      req.body.test_id,{ 
        $push: { 
          "questions": question._id 
        } 
      }, {
         new: true, 
         useFindAndModify: false 
      },

      function(err, post){
        if(err){
          console.log(err);
        } else{
          console.log("The Test model after push is: " + post);
        }
      }
    ); 

    return res.status(200).json({
      status: true,
      message: 'Created new question successfully',
    });

  });
});

router.get('/testsInfoList', function(req, res) {
 Test.find({}, function(err, tests) {
    res.send(tests);  
  });
});

router.get('/questionsList', function(req, res) {
  Test.
  findOne({ _id: req.query.test_id }).
  populate('questions').select('questions').
  exec(function (err, test) {
    if (err) return handleError(err);
    console.log("Response to send: " + test.questions);
    res.send(test.questions);
  });
});
   

module.exports = router;

