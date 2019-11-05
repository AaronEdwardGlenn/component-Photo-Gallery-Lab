import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
            <header>
            <div id ='logo'>🎆</div>
    <div id='intro'> This is my photo gallery </div>
            </header>
        `;
    }
}

export default Header;