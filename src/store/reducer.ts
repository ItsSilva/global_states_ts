export const reducer = (currentAction: any, currentState: any) => {

    const {action, payload} = currentAction;

    switch (action) {
        case 'CHANGEBACKGROUND':
            return {
                ...currentState,
                backgroundColor: payload,
            }
            break;
        
        case 'NAVIGATION':
            return{
                ...currentState,
                screen: payload,
            }


        default: 
            return currentState;
    }

}