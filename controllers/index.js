// Create a function which is a "controller", it
// handles a request, writing the response.
function index(request, response) {
    const contextData = {
        title: 'Party Monsters',
        salutation: 'The best parties and events in one place',

    };
    response.render('index', contextData);
}

module.exports = {
    index,
};
