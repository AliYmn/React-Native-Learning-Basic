import { combineReducers } from 'redux';
import countReducer from './reducers/countReducer.js';
const allReducers = combineReducers({
    count: countReducer,
});
export default allReducers;


export function increment() {
    return {
        type: "Increment"
    };
}
export function decrement() {
    return {
        type: "Decrement"
    };
}