import { changeBackground, navigate } from '../store/actions';
import { addObserver, appState, dispatch } from '../store/store'

class Login extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if(this.shadowRoot) this.shadowRoot.innerHTML = `<h1>Sign In</h1>`;
        const btn = this.ownerDocument.createElement('button');
        btn.innerText = 'Dashboard';
        btn.addEventListener('click', () => {
            dispatch(navigate('DASHBOARD'));
            console.log(appState);
        });
        this.shadowRoot?.appendChild(btn);
    }
}

customElements.define('app-login', Login);