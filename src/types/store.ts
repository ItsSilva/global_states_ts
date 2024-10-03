export type AppState = {
    screen: string;
    backgroundColor: string;
    username: string;
    id: number;
};

export type Observer = { render: () => void } & HTMLElement;

export enum Actions {
    'CHANGEBACKGROUND' = 'CHANGEBACKGROUND',
    'NAVIGATION' = 'NAVIGATION',
}

export enum Screens {
    'LOGIN' = 'LOGIN',
    'REGISTER' = 'REGISTER',
    'DASHBOARD' = 'DASHBOARD',
}