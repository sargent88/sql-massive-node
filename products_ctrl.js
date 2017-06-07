module.exports = {
    create: function(req, res) {
        const pro = [
            req.body.name,
            req.body.description,
            req.body.price,
            req.body.imageurl
        ];
        console.log(pro)
        req.app.get('db').createProduct(pro).then(function(response) {
            res.status(200).send('Created')
        })
    },
    getOne: function(req, res) {
        const product = [
            req.params.productId
        ];
        req.app.get('db').readProduct(product).then(function(response) {
            res.send(response)
        })
    },
    getAll: function(req, res) {
        req.app.get('db').readProducts().then(function(response) {
            res.send(response)
        })
    },
    update: function(req, res) {
        const change = [
            req.query.description,
            req.params.productId
        ];
        req.app.get('db').updateProduct(change).then(function(response) {
            res.status(200).send('Updated')
        })
    },
    delete: function(req, res) {
        const remove = [
            req.params.productId
        ];
        req.app.get('db').deleteProduct(remove).then(function(response) {
            res.status(200).send('Deleted')
        })
    }
}