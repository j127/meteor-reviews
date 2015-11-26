Template.addProduct.events({
    'submit .add-product': function (e) {

        var name = e.target.name.value;
        var category = e.target.category.value;
        var description = e.target.description.value;
        var isFeatured = e.target.isFeatured.value;

        var file = $('#productImage').get(0).files[0];
        if (file) {
            fsFile = new FS.File(file);
            ProductsImages.insert(fsFile, function (err, result) {
                if (!err) {
                    var productImage = '/cfs/files/ProductsImages/' + result._id;
                    Products.insert({
                        name: name,
                        category: category,
                        description: description,
                        isFeatured: isFeatured,
                        image: productImage,
                        createdAt: new Date()
                    });
                }
            });
        } else {
            var productImage = '/img/noimage.png';
            Products.insert({
                name: name,
                category: category,
                description: description,
                isFeatured: isFeatured,
                image: productImage,
                createdAt: new Date()
            });
        }
        e.target.name.value = '';
        e.target.category.value = '';
        e.target.description.value = '';
        e.target.isFeatured.value = '';

        FlashMessages.sendSuccess('Product added');
        Router.go('/');
        return false;
    }
});
