import Component from '../Component.js';

class FilterImages extends Component {

    onRender(select) {
        const onFilter = this.props.onFilter;

        select.addEventListener('change', () => {
            onFilter(select.value);
            console.log(select.value);
        });
    }

    renderHTML() {
        return /*html*/`
            <select class="image-type-filter">
            <option value= "" selected>All Pics</option>
        <option value ='narwhal'>Narwahls</option>
        <option value ='rhino'>Rhinos</option>
        <option value ='unicorn'>Unicorns</option>
        <option value ='unilego'>Unilegos</option>
        <option value ='triceratops'>Triceritopses</option>
        <option value ='markhor'>Markhors</option>
        <option value ='mouflon'>Mouflons</option>
        <option value ='addax'>Addaxes</option>
        <option value ='chameleon'>Chameleons</option>
        <option value ='lizard'>Lizzards</option>
        <option value ='dragon'>Dragons</option>
            </select>
        `;
    }
}

export default FilterImages;