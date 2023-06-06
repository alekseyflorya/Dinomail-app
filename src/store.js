import {createStore} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import { tagReducer } from "./utils/reducers/tagReducer";

const store = createStore(tagReducer);

export default store;


/*

import { createStore } from 'redux';
import { countReducer } from './counter/reducer';

export const store = createStore(countReducer);

*/