MyModel.find({ name: 'john', age: { $gte: 18 }}, function (err, docs) {});
