const service = require("../servicess/category.service")
const { PG_MIN_LIMIT, PG_MAX_LIMIT, DEFAULT_SORT_BY, DEFAULT_ORDER_BY } = require('../constants');

exports.allAllCategories = (req, res) => {
    let { page, limit, sortBy, orderBy, query } = req.query;
    page = page && page > 0 ? parseInt(page - 1) : 0;
    limit = limit ? parseInt(limit) : PG_MIN_LIMIT;
    limit = Math.min(limit, PG_MAX_LIMIT);
    const offset = page * limit;
    sortBy = sortBy ? sortBy : DEFAULT_SORT_BY;
    orderBy = orderBy ? orderBy : DEFAULT_ORDER_BY;
    query = query ? query : undefined;

    service
    .findAll({ offset, limit, sortBy, orderBy, queryText: query })
    .then((categories) => {
      res.status(200).send({ message: 'Categories found.', data: categories });
    })
    .catch((error) => {
      res.status(500).send({ message: error.message });
    });
};

exports.createCategory = (req, res) => {
  service
  .create(req.body)
  .then((category) => {
    res.status(201).send({ message: 'Category created successfully!', category: category });
  })
  .catch((err) => {
    res.status(500).send({ message: err.message });
  });
};

exports.updateCategory = (req, res) => {
  const id = req.params.id;
  service
    .update(id, req.body)
    .then((category) => {
      res.status(200).send({ message: 'Category updated successfully!', data: category });
    })
    .catch((err) => {
      res.status(err.code).send({ message: err.message });
    });
};

exports.showCategory = (req, res) => {
    service
    .findOne(req.params.id)
    .then((response) => {
      if (response) {
        res.status(200).send({ message: 'Category found.', data: response });
      } else {
        res.status(404).send({ message: 'Category not found' });
      }
    })
    .catch((error) => {
      res.status(500).send({ message: error.message });
    });
};

exports.deleteCategory = (req, res) => {
  service
    .delete(req.params.id)
    .then((data) => {
      res.status(204).send(data);
    })
    .catch((err) => {
      res.status(err.code).send({ message: err.message });
    });
};