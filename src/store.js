import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { legacy_createStore } from "@reduxjs/toolkit";
import { createStore } from "@reduxjs/toolkit";

import rootReducer from "./components/redux/reduser";
import changeTheNumber from "./components/redux/reduser/updown";

const store = configureStore({
    reducer: {
        changeTheNumber: changeTheNumber,
    },
});

export default store;