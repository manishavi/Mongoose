'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: String,
  // title: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // }
  published: {
    type: Date,
    default: Date.now
  },
  keywords: Array,
  published: Boolean,
  author: {
    type: Schema.ObjectId, //same as type: Schema.Type.ObjectId
    ref: "User"
  },
  // Embedded sub-document
  detail: {
    modelNumber: Number,
    hardcover: Boolean,
    reviews: Number,
    rank: Number,
  }
});

module.exports = mongoose.model('Book', BookSchema);