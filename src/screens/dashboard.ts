import { changeBackground, navigate } from '../store/actions';
import { addObserver, appState, dispatch } from '../store/store'

class Dashboard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if(this.shadowRoot) this.shadowRoot.innerHTML = ``;
        const btn = this.ownerDocument.createElement('button');
        btn.innerText = 'Cambiar color';
        btn.addEventListener('click', () => {
            dispatch(changeBackground('red'));
            console.log(appState);
        });

        this.shadowRoot?.appendChild(btn);

        const btn2 = this.ownerDocument.createElement('button'); 
        btn2.innerText = 'Cerrar Sesion';
        btn2.addEventListener('click', () => {
            dispatch(navigate('REGISTER'));
            console.log(appState);
        });
        this.shadowRoot?.appendChild(btn2)
    }
}

customElements.define('app-dashboard', Dashboard);