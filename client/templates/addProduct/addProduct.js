Template.addProduct.events({
    'submit .add-product': function (e) {

        var name = e.target.name.value;
        var category = e.target.category.value;
        var description = e.target.description.value;
        var isFeatured = e.target.isFeatured.value;

        var file = $('#productImage').get(0).files[0];

        Meteor.call('addProduct', file, name, category, description, isFeatured);

        e.target.name.value = '';
        e.target.category.value = '';
        e.target.description.value = '';
        e.target.isFeatured.value = '';

        FlashMessages.sendSuccess('Product added');
        Router.go('/');
        return false;
    }
});
