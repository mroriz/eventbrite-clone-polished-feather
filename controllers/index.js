// Create a function which is a "controller", it
// handles a request, writing the response.
function index(request, response) {
    const contextData = {
        title: 'Eventbrite clone project starter',
        salutation: 'Hello Yale SOM hackers',

    };
    response.render('index', contextData);
}

module.exports = {
    index,
};
