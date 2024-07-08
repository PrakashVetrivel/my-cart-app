// src/features/products/productsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i0.wp.com/cellbuddy.in/buddy/wp-content/uploads/2022/09/12-Mini-White.png?fit=800%2C800&ssl=1",
      quantity: 0,
    },
    {
      id: 2,
      title: "iPhone X",
      description: "  Super Retina HD display with OLED technology ",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://i0.wp.com/cellbuddy.in/buddy/wp-content/uploads/2022/09/X-Space-grey-2.png?fit=800%2C800&ssl=1",
      quantity: 0,
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description: "Samsung new variant goes beyond Galaxy to Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://m.media-amazon.com/images/I/81vxWpPpgNL.jpg",
      quantity: 0,
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail: "https://www.phonemera.com/image/cache/catalog/OPPO/F19%20Pro/oppo-f19-pro-fantastic-purple/oppo-f19-pro-fantastic-purple_7-1500x1500.jpg",
      
      quantity: 0,
    },
    {
      id: 5,
      title: "Huawei P30",
      description: "Huawei’s re-badged P30 Pro New Edition",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgTI-fZCp-sKzWpYyH8uXhKzbbbgBjgp-9yg&s",
      quantity: 0,
    },
    {
    id: 6,
      title: "iWatch Ultra",
      description: "Rugged smart Watch with IP47 ",
      price: 450,
      discountPercentage: 5,
      rating: 4,
      stock: 25,
      brand: "Apple",
      category: "smartwatch",
      thumbnail: "https://www.apple.com/newsroom/images/product/watch/standard/Apple-Watch-Ultra-Orange-Alpine-Loop-Wayfinder-face-220907_inline.jpg.large.jpg",
      quantity: 0,
  },
  ],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    updateProductQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const product = state.products.find((product) => product.id === id);
      if (product) {
        product.quantity = quantity;
      }
    },
  },
});

export const { addProduct, updateProductQuantity } = productsSlice.actions;
export default productsSlice.reducer;
