const eventModels=require('../models/events.js');



// Create a function which is a "controller", it
// handles a request, writing the response.
function index(request, response) {
    const contextData = {
        title: 'Party Monsters',
        salutation: 'Welcome to Party Monsters. Invite or RSVP to events!',
        events: eventModels.all,
    };
    response.render('index', contextData);
   
}

function about(request, response) {
    const contextData = {
        title: 'About our Team',
        salutation: 'Take a look at our headshots',

    };
    response.render('about', contextData);
   
}

function new_event(request, response) {
    const contextData = {
        title: 'Party Monsters',
        salutation: 'New Event!',

    };
    response.render('new_event', contextData);
   
}


module.exports = {
    index,
    about,
    new_event
};
