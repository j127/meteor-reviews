Template.registerHelper('truncateText', function (text, len) {
    var newText = text.substring(0, len);
    newText = newText.substr(0, Math.min(newText.length, newText.lastIndexOf(' ')));
    return new Spacebars.SafeString(newText);
});

Template.registerHelper('getAverage', function (reviews) {
    var sum = 0;
    for (var i = 0, iLen = reviews.length; i < iLen; i++) {
        sum += parseInt(reviews[i].rating, 10);
    }
    var avg = sum / reviews.length;
    return Math.round(avg);
});

Template.registerHelper('getReviewsTotal', function (total) {
    if (total > 0) {
        return total;
    } else {
        return 0;
    }
});
