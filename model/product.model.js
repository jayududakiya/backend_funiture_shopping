const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    isDeleted: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    colors : [{type : String}],
    price: {
      type: Number,
      required: true
    },
    sku: {
      type: String,
      required: true
    },
    rating: {
      type: Number
    },
    tags: [{ type: String }], // array of string types
    reviews: [
      {
        rating: Number,
        comment: String,
        date: String,
        reviewerName: String,
        reviewerEmail: String
      }
    ],
    images: [{ type: String }], // multiple images
    thumbnail: { type: String }, // 1 img for thumbnail
    warrantyInformation: { type: String },
    shippingInformation: { type: String },
    availabilityStatus: String
  },
  {
    versionKey: false,
    timestamps: true
  }
);

module.exports = mongoose.model("products", productSchema);
