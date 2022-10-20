import Product from "../product/Product"
import glovoExportMenu from "../../data/glovo_export_menu.json";

const Category = (props) => {

    const { categoryName, sections } = props;

    /*функция получает продукт по айди*/
    const getProductById = id => {
        for (let i of glovoExportMenu.data.products) {
            if (i.id === id) {
                return i
            }
        }
    }

    const productsList = sections[0].products.map(item => {
        const { id, name, price, description, image_url, attributes_groups } = getProductById(item)
        return (
            <Product
                key={id}
                id={id}
                name={name}
                description={description}
                img={image_url}
                price={price}
                attributes_groups={attributes_groups}
            />
        )
    })

    return (
        <div type="LIST">
            <div className="list__title-container">
                <p data-test-id="list-title" className="list__title">
                    {categoryName}
                </p>
            </div>
            <div className="list__container">
                {productsList}
            </div>
        </div>
    )
}

export default Category;
