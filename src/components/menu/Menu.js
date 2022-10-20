import Category from "../category/Category";
import '../../style/index.scss';

import menu from "../../data/menu.json";

const Menu = () => {

    const content = menu.data.sections.map(item => {
        return (
            <Category
                categoryName={item.name}
                products={item.products}
                key={item.uniq_id}
            />
        )
    })

    return (
        <div data-test-id="store-body" className="store__page__body">
            {content}
        </div>
    )
}

export default Menu;
