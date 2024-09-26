import { addObserver, appStore, dispatch } from '../store/index';
import { changeBackground } from '../store/actions';

class Dashboard extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        addObserver(this);
    }
    connectedCallback(){
        this.render();
    }
    render(){
        
        if(this.shadowRoot){
        console.log(appStore);

        this.shadowRoot.innerHTML = '';
        const btn = this.ownerDocument.createElement('button');
        btn.innerHTML = 'Change Background';
        btn.addEventListener('click', () => {
            dispatch(changeBackground('red'));
        });
        this.shadowRoot?.appendChild(btn);
        }
    }
}
customElements.define('app-dashboard', Dashboard);
export default Dashboard;