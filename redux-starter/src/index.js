import { bugAdded, bugRemoved, bugResolved } from './actionCreator';
import store from "./store";

store.subscribe(() => {
    console.log("store changed", store.getState())
})

store.dispatch(bugAdded('Bug1 added'));

store.dispatch(bugResolved(1));

store.dispatch(bugRemoved(1));

console.log(store.getState());
