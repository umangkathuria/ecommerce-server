// @ts-check

/**
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {number} price
 * @property {number} discountPercentage
 * @property {number} rating
 * @property {number} stock
 * @property {string} brand
 * @property {string} category
 * @property {string} thumbnail
 * @property {string[]} images
 */

const {
  default: axios
} = require('axios');

/**
 * Returns a list of products
 * @returns { Promise<{ products: Product[] }>}
 */
const listProducts = async () => {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    if (response?.data) {
      return {
        products: response.data.products
      }
    } else {
      return {
        products: []
      }
    }
  } catch (error) {
    throw error;
  }

}
module.exports = {
  listProducts
}