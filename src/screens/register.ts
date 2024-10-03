import { changeBackground, navigate } from '../store/actions';
import { addObserver, appState, dispatch } from '../store/store'

class Register extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if(this.shadowRoot) this.shadowRoot.innerHTML = `<h1>Sign Up</h1>`;
        const btn = this.ownerDocument.createElement('button');
        btn.innerText = 'Iniciar Sesion';
        btn.addEventListener('click', () => {
            dispatch(navigate('LOGIN'));
            console.log(appState);
        });
        this.shadowRoot?.appendChild(btn);
    }
}

customElements.define('app-register', Register);