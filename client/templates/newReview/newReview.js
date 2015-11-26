Template.newReview.events({
    'submit #newReview': function (e) {
        var rating = e.target.rating.value;
        var body = e.target.body.value;

        Products.update({
            _id: this._id
        }, {
            $push: {
                reviews: {
                    rating: rating,
                    body: body
                }
            }
        });
        FlashMessages.sendSuccess('Review added');
        Router.go('/');
        return false;
    }
});
