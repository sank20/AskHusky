
let questionService = require('./../services/question-service');
let questionObj = require('./../model/question');

/**
 * Handles the http error on the server side
 *
 * @param response
 * @returns {errorFunction}
 */
let errorHandler = function(response) {
    let errorFunction = function (error) {
        console.log(response);
        response.status(500);
        response.json({
            message: error.message
        });


    };
    return errorFunction;
};


/**
 * fetch method to get the corresponding answers pertaining to a question
 * returns a question obj
 *
 * @param request
 * @param response
 * @constructor
 */
exports.AnswerFetch = function(request, response){
    const resolve = (question) => {
        console.log(question);
        response.status(200);
        response.json(question);
    };
    questionService.updateAnswerData(request.body.docID).then(resolve).catch(errorHandler(response));
};

/**
 * Returns a list of questions in JSON based on search parameters
 *
 * @param request
 * @param response
 */
exports.list = function (request, response) {
    let p = request.query.p;
    let val = request.query.val;

    const resolve = (question) => {
        response.status(200);
        response.json(question);
    };

    if(!(p || val)){
        questionService.search({ [p] : val }).then(resolve).catch(errorHandler(response));
    }else{
        questionService.search({}).then(resolve).catch(errorHandler(response));
    }
};


/**
 * Creates a new tag with the request JSON
 * returns question type JSON object
 *
 * @param request
 * @param response
 */
exports.post = function (request, response) {
    const questionObj = Object.assign({}, request.body);
    const resolve = (question) => {
        response.status(200);
        response.json(question);
    };
    questionService.create(questionObj)
        .then(resolve)
        .catch(errorHandler(response));
};

/**
 * Returns a question obj in JSON
 *
 * @param request
 * @param response
 */
exports.get = function (request, response) {
    const resolve = (question) => {
        response.status(200);
        response.json(question);
    };
    questionService.get(request.params.questionId)
        .then(resolve)
        .catch(errorHandler(response));
};

/**
 * returns a JSON question Object
 * searching it by ID
 *
 * @param request
 * @param response
 */
exports.getById = function (request, response) {
    const resolve = (question) => {
        console.log(response);
        response.status(200);
        response.json(question);
    };
    questionService.getById(request.params.userName)
        .then(resolve)
        .catch(errorHandler(response));
};

/**
 * Updates and returns a question object in JSON
 *
 * @param request
 * @param response
 */

exports.put = function (request, response) {
    let questionObj = Object.assign({},request.body);
    const resolve = (question) => {
        response.status(200);
        response.json(question);
    };
    questionObj._id = request.params.questionId;
    questionService.update(questionObj)
        .then(resolve)
        .catch(errorHandler(response));
};

/** 
 * Adds a new answer to the given question
 * returns answer obj
 * 
 * @param request
 * @param response
 * 
*/
exports.insertAnswer = function (request, response) {
    let answerObj = Object.assign({},request.body);
    const resolve = (answer) => {
        response.status(200);
        response.json(answer);
    };
        let questionId = request.params.questionId;
        // console.log(questionId);
        // console.log(answerObj);
        questionService.insertAnswer(questionId, answerObj)
            .then(resolve)
            .catch(errorHandler(response));
    // }
};

/**
 * update method to update the answer to a pertaining question
 * returns the answer object
 *
 * @param request
 * @param response
 */
exports.updateAnswer = function (request, response) {
    let answerObj = Object.assign({},request.body);
    const resolve = (answer) => {
        response.status(200);
        response.json(answer);
    };
        let questionId = request.params.questionId;

        // console.log(questionId);
        // console.log(answerObj);
        questionService.updateAnswer(questionId, answerObj)
            .then(resolve)
            .catch(errorHandler(response));
    // }
};

/**
 * Deletes a question object
 *
 * @param request
 * @param response
 */

exports.delete = function (request, response) {
    const resolve = (question) => {
        response.status(200);
        response.json({
            message: 'Tag Successfully deleted'
        });
    };
    questionService.delete(request.params.questionId)
        .then(resolve)
        .catch(errorHandler(response));
};
