

function makeRandomId(length = 10) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}



function getInitials(fullName) {
    var initials = fullName.match(/\b\w/g);
    initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
    return initials;
}


export default {
    makeRandomId,
    getInitials,
};
