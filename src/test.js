// {Description: Learn how to create a dialog script with voice/text commands and text corpus for question answering}

// Use this sample to create your own voice/text commands
intent('hello world', p => {
    p.play('(hello|hi there)');
});


// Give your AI assistant some knowledge about the world
corpus(`
    Hello, I'm Alan.
    This is a demo application.
    You can learn how to teach Alan useful skills.
    I can teach you how to write Alan Scripts.
    I can help you. I can do a lot of things. I can answer questions. I can do tasks.
    But they should be relevant to this application.
    I can help with this application.
    I'm Alan. I'm a virtual assistant. I'm here to help you with applications.
    This is a demo script. It shows how to use Alan.
    You can create dialogs and teach me.
    For example: I can help navigate this application.
`);

const genres = [
    {"id": 28, "name": "Action"},
    {"id": 12, "name": "Adventure"},
    {"id": 16, "name": "Animation"},
    {"id": 35, "name": "Comedy"},
    {"id": 80, "name": "Crime"},
    {"id": 99, "name": "Documentary"},
    {"id": 18, "name": "Drama"},
    {"id": 10751, "name": "Family"},
    {"id": 14, "name": "Fantasy"},
    {"id": 36, "name": "History"},
    {"id": 27, "name": "Horror"},
    {"id": 10402, "name": "Music"},
    {"id": 9648, "name": "Mystery"},
    {"id": 10749, "name": "Romance"},
    {"id": 878, "name": "Science Fiction"},
    {"id": 10770, "name": "TV Movie"},
    {"id": 53, "name": "Thriller"},
    {"id": 10752, "name": "War"},
    {"id": 37, "name": "Western"}
]

const stringifiedGenres = genres.map(({ name }) => name.toLowerCase().join("|"));

intent(['What does this app do?', 'What is this app about?', 'What can I do here?'], ((p) => {
    p.play('This is FilmEmpire, an app where you can search film and store favorites. Try saying "Go to Comedy, or Surprise me, Search for Superman, make it dark... "')
}))

intent(['Make it dark', 'dark'], (p) => {
    p.play({ command: 'changeMode', mode: 'dark' });
    p.play('Batman likes it. I hope you do as well');
})

intent(['Make it light', 'light'], (p) => {
    p.play({ command: 'changeMode', mode: 'light' });
    p.play('Enjoy the power of the Sun');
})

intent(['Log in', 'Login'], (p) => {
    p.play('Logging in');
    p.play({ command: 'login' });
})

intent(['Log out', 'Logout'], (p) => {
    p.play('Logging out');
    p.play({ command: 'logout' });
})

intent(`go to $(GENRE ${stringifiedGenres}|top rated|popular|upcoming)`, (p) => {
    p.play(`Going to ${p.GENRE.value} category`);
    p.play({ command: 'chooseGenre', genreOrCategory: p.GENRE.value });
})