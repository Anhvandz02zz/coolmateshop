import { createSlice } from "@reduxjs/toolkit";

export default createSlice ({
    name: "cartProduct",
    initialState: [{}],
    reducers: {
      addProduct: (state, action) => {
        state.push(action.payload);
        alert('đã thêm thành công ')
      },

      changeProduct: (state, action) => {
        const indexProduct = state.findIndex(
          (productData) => productData.id === action.payload.id
        );
        
        if (indexProduct) {
          state[indexProduct] = {
             ...state[indexProduct],
              ...action.payload };
        }
      },
      
      deleteProduct: (state, action) => {
        const indexProduct = state.findIndex(
          (product) => product.id === action.payload.id
        );
        if (indexProduct) {
          state = state.splice(indexProduct, 1);
          alert('đã xóa thành công ')
        }
      },
      
    
    },
  });
  

