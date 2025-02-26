const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
    trim: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  nutritionalInfo: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  quantity: {
    type: Number,
    default: null,
    min: 0,
  },
  unit: {
    type: [String],
    required: true,
    validate: {
      validator: function(v) {
        return Array.isArray(v) && v.length > 0 && v.every(cat => typeof cat === 'string');
      },
      message: 'Categories must be a non-empty array of strings',
    },
  },
  category: {
    type: [String],
    required: true,
    validate: {
      validator: function(v) {
        return Array.isArray(v) && v.length > 0 && v.every(cat => typeof cat === 'string');
      },
      message: 'Categories must be a non-empty array of strings',
    },
  },
  subcategory: {
    type: [String],
    required: true,
    validate: {
      validator: function(v) {
        return Array.isArray(v) && v.length > 0 && v.every(sub => typeof sub === 'string');
      },
      message: 'Subcategories must be a non-empty array of strings',
    },
  },
  availableStock: {
    type: Number,
    required: true,
    min: 0,
  },
  images: {
    type: [String],
    required: true,
    validate: {
      validator: function(v) {
        return Array.isArray(v) && v.length > 0;
      },
      message: 'At least one image is required',
    },
  },
  
 
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
