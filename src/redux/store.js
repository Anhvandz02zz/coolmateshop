import { configureStore } from "@reduxjs/toolkit";
import cartslide from "./cartSlide";

const store = configureStore(
{
    reducer: {
        cart: cartslide.reducer,
    },
});
export default store;

// kho chua du lieu chung cho ca trang