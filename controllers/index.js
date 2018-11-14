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
function formSubmit(request, response) {
    console.log(request.body);
    // The form data are in `request.body`. We need to get
    // these data out and use them to create a new event,
    // or return some kind of error to the user if they
    // submitted invalid data.
    
    // Start with an empty array of errors
    let errors = [];
    
    if (!request.body.title_event || request.body.title_event.length > 51) {
        errors.push('Bad title for event!');
    }
    
    if (errors.length === 0){
        // Create a new event! Find a good id (e.g. max existing id + 1)
        const newEvent = {title: request.body.title_event};
        // Push it on to our list of all events
        eventModels.all.push(newEvent);
    }
    
    const contextData = {
        title: 'Create event',
        salutation: 'Let\'s create a new event!',
        errors: errors,
    };
    response.render('form', contextData);
   
}


module.exports = {
    index,
    about,
    new_event,
    form,
    formSubmit,
};
