import { reducer } from './reducer';
import { AppState, Observer } from '../types/store';

// El estado global
export let appState: AppState = {
    screen: 'REGISTER',
    backgroundColor: 'black',
    username: 'Pablo',
    id: 132213,
};

let observers: Observer[] = [];

// Creamos el dispatch

export const dispatch = (action: any) => {
    const clone = JSON.parse(JSON.stringify(appState)); //Es mejor trabajar con una copia siempre
    appState = reducer(action, clone);
    observers.forEach((observer) => observer.render());
};

// Agregar los observadores para los interesados, los suscritos
export const addObserver = (ref: any) => {
    observers = [...observers, ref];
}