import Category from "../category/Category";
import '../../style/index.scss';

import glovoExportMenu from "../../data/glovo_export_menu.json";

const Menu = () => {

    const content = glovoExportMenu.data.collections.map(item => {
        return (
            <Category
                categoryName={item.name}
                sections={item.sections}
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
