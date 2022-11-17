function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(message) {
    const message1 = "I can't hear you!";
    const message2 = "YES INDEED!";
    const message3 = "I would love to!";
    if (message === message.toLowerCase()) {
        return message1;
    } else if (message === message.toUpperCase()) {
        return message2;
    } else if (message === "Let's have dinner together!") {
        return message3;
    }
}