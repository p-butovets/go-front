import Product from "../product/Product"

const Category = (props) => {

    const { categoryName, products } = props;

    const productsList = products.map(product => {
        const { uniq_id, name, description, image_url_png, price, isNew, attributes_groups } = product;
        return (
            <Product
                key={uniq_id}
                id={uniq_id}
                name={name}
                description={description}
                img={image_url_png}
                price={price}
                isNew={isNew}
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
