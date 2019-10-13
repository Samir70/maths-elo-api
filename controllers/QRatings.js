exports.getRatings = (req, res, next) => {
    res.status(200).json({
        algebra: 1500,
        geometry: 1500
    });
}

exports.updateRatings = (req, res, next) => {
    const category = req.body.category;
    const value = req.body.ratingValue;
    // update db
    // 201 = success + resource created
    res.status(201).json({
        message: 'received new data',
        category: category,
        QRating: value
    })
}