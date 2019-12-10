/**
 * Application endpoint route definitions.
 */

'use strict';

/**
 * exports the initialization of the api to handle and route the incoming requests
 *
 * @param expressApp
 */
module.exports = function (expressApp) {
    // -- Users

    const userController = require('../controller/user-controller');
    expressApp.route('/signup')
        .post(userController.signup);
    expressApp.route('/login')
        .post(userController.login);
    expressApp.route('/user/changePassword')
        .post(userController.changePassword);


    //-- Question

    const questionController = require('../controller/question-controller');

    expressApp.route('/questions')
        .get(questionController.list)
        .post(questionController.post);

    /**
     * Routes '/questions/:id' endpoints to get, Update, Delete a question
     *
     * @param 'questions/:id'
     */
    expressApp.route('/questions/:questionId')
        .get(questionController.get)
        .put(questionController.put)
        .delete(questionController.delete);

    // -- Answer

    expressApp.route('/questions/:questionId/answers')
        .put(questionController.putAnswer);
    // -- Tags

    const tagController = require('../controller/tag-controller');

    expressApp.route('/tags')
        .get(tagController.list)
        .post(tagController.post);

    /**
     * Routes '/tags/:tagID' endpoints to get, Update, Delete a tag
     *
     * @param 'tags/:tagID'
     */
    expressApp.route('/tags/:tagID')
        .get(tagController.get)
        .put(tagController.put)
        .delete(tagController.delete);


    // -- Meeting/Event

    //const eventController = require('../controller/event-controller');
    //=================================================================================================================================
    const eventRequestController = require('../controller/event-request-controller');
    /**
     * Routes '/events/' endpoints to get?p='<field>'&val='<Value>' OR Create a new event
     *
     * @param expressApp
     */
    // expressApp.route('/events')
    //     .get(eventController.list)
    //     .post(eventController.post); //get all events, create a new event

    /**
     * Routes '/events/:eventID' endpoints to get, Update, Delete an event
     *
     * @param 'events/:eventID'
     */
    // expressApp.route('/events/:eventID')
    //     .get(eventController.get)
    //     .put(eventController.put)
    //     .delete(eventController.delete);

    /**
     * Routes '/event-request' endpoints to Create a new event request towards attendee
     *
     * @param expressApp
     */
    expressApp.route('/events/requests')
        .post(eventRequestController.post)
        .get(eventRequestController.list); // create a new request event

    /**
     * Routes '/event-request' endpoints to Create a new event request towards attendee
     *
     * @param expressApp
     */
    expressApp.route('/events/requests/:eventRequestID')
        .put(eventRequestController.put)
        .get(eventRequestController.get)
        .delete(eventRequestController.delete); // bring all the event requests

    /**
     * Routes '/event-request/:eventRequestID' endpoints to Create a new event request towards attendee
     *
     * @param expressApp
     */
    expressApp.route('/event-requests/organizer/:organizerID')
        .get(eventRequestController.orgGet)
        .put(eventRequestController.orgPut)
        .delete(eventRequestController.orgDelete);


    /**
     * Routes '/event-request/:eventRequestID' endpoints to Create a new event request towards attendee
     *
     * @param expressApp
     */
    expressApp.route('/event-requests/attendee/:attendeeID')
        .get(eventRequestController.attGet)
        .put(eventRequestController.attPut)
        .delete(eventRequestController.attDelete);






    const icsController = require('../controller/ics-generator');
    /**
     * Routes '/events/' endpoints to get?p='<field>'&val='<Value>' OR Create a new event
     *
     * @param expressApp
     */
    expressApp.route('/ics-generator')
        .get(icsController.list)
        .post(eventController.post);

};




