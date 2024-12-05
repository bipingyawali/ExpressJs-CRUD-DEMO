const db = require('../models');
const Op = db.Sequelize.Op;
const Category = db.category;

exports.findAll = ({ offset, limit, sortBy, orderBy, queryText }) => {
    return new Promise((resolve, reject) => {
      let query = {};
      if (queryText) {
        query = {
          [Op.or]: [{ title: { [Op.iLike]: '%' + queryText + '%' } }]
        };
      }
      Category.findAndCountAll({
        where: query,
        offset,
        limit,
        order: [orderBy && sortBy ? [orderBy, sortBy] : ['createdAt', 'desc']],
        distinct: true
      })
        .then((category) => resolve(category))
        .catch((error) => reject(new Error(error)));
    });
  };

  exports.findOne = (id) => {
    return new Promise((resolve, reject) => {
      Category.findByPk(id)
        .then((category) => resolve(category))
        .catch((error) => reject(new Error(error)));
    });
  };

  exports.create = ({ title, content }) => {
    return new Promise((resolve, reject) => {
      Category.create({title, content})
      .then((category) => resolve(category))
      .catch((error) => reject(new Error(error)))
    })
  }

  exports.update = (id, body) => {
    return new Promise((resolve, reject) => {
      Category.findByPk(id)
      .then((category) => {
        if(category) {
          Object.keys(body).map((key) => {
            category[key] = body[key]
          })
          console.log(category)
          category
            .save()
            .then((category) => {
              resolve(category)
            })
            .catch((err) => {
              reject({ code: 500, message: err.message })
            })
        } else {
          reject({ code: 404, message: 'Not Found' })
        }
      })
      .catch((error) => reject({ code: 500, message: error }))
    })
  }

  exports.delete = (id) => {
    return new Promise((resolve, reject) => {
      Category.findByPk(id)
      .then((category) => {
        if(category) {
          category.destroy()
            .then(() => resolve({ message: 'Category Deleted Successfully.' }))
            .catch((err) => reject({ code: 500, message: 'Unable to delete category.' }))
        } else {
          reject({ code: 404, message: 'Not Found' })
        }
      })
      .catch((error) => reject({ code: 500, message: error.message }))
    })
  }