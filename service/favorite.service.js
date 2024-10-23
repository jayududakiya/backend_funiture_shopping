const Favorite = require('../model/favorite.model');


class favoriteServices {
    async createFavorite (body) {
        return await Favorite.create(body);
    };
    async findFavorite (body) {
        return await Favorite.findOne(body);
    };
    async showAllFavorite (body) {
        return await Favorite.find(body);
    };
    async deleteFavorite (id) {
        return await Favorite.deleteOne(id);
    };
};


module.exports = favoriteServices;