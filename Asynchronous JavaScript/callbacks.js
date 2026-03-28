function greet(name, callback) {
    console.log('Hi ' + name + ' ');
    callback();
}

function askQuestion() {
    console.log('How are you?');
}

greet('John', askQuestion);