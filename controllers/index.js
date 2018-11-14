const eventModels=require('../models/events.js');



// Create a function which is a "controller", it
// handles a request, writing the response.
function index(request, response) {
    const contextData = {
        title: 'Party Monsters',
        salutation: 'CHANGE THIS',
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
        title: 'CHANGE IT',
        salutation: 'CHANGE THIS TOO',

    };
    response.render('new_event', contextData);
   
}

function form(request, response) {
    const contextData = {
        title: 'Create event',
        salutation: 'Let\'s create a new event!',

    };
    response.render('form', contextData);
   
}


module.exports = {
    index,
    about,
    new_event,
    form
};
