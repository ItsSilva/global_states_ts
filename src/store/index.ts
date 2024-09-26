// Code for the store
import { reducer } from './reducer';
// Global state
export let appStore = {
    backgroundColor: 'black',
    username: 'Juanes',
    id: 12345
};


// Create the Dispatcher
export const dispatch = (action: any) => {
    const clone = JSON.parse(JSON.stringify(appStore));
    appStore = reducer(action, clone);
    observers.forEach((o) => o.render());
}

//Add the observers
let observers: any[] = [];
export const addObserver = (ref: any) => {
    observers = [...observers, ref];
}