Template.registerHelper('truncateText', function (text, len) {
    var newText = text.substring(0, len);
    newText = newText.substr(0, Math.min(newText.length, newText.lastIndexOf(' ')));
    return new spacebars.SafeString(newText);
});
