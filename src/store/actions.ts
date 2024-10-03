import { Actions } from '../types/store';

export const changeBackground = (payload: any) => {
    return {
        action: 'CHANGEBACKGROUND',
        payload,
    }
}

export const navigate = (screen: any) => {
    return {
        action: 'NAVIGATION',
        payload: screen,
    };
};