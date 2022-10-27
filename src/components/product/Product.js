import { useState } from 'react';
import Modal from '../modal/Modal';

const Product = (props) => {

    const { name, id, img, price, description, attributes_groups } = props;

    const [modalActive, setModalActive] = useState(false);



    return (
        <>
            <Modal
                productId={id}
                modalActive={modalActive}
                setModalActive={setModalActive}
                attributesGroups={attributes_groups}
            />

            <div
                onClick={() => setModalActive(!modalActive)}
                data-test-id="list-element" type="PRODUCT_ROW" className="product-row">
                <div data-test-id="product-row-content" className="product-row product-row--no-description">
                    <div className="product-row__content">
                        <img src={img} role="presentation" alt="" className="product-row__image"></img>
                        <div className="product-row__info">

                            <div className="product-row__name">
                                <span data-test-id="product-row-name__highlighter">
                                    <span color="yellow" size="regular">
                                        {name}
                                    </span>
                                </span>
                            </div>
                            <div>
                                <span>
                                    <span color="yellow" size="regular">
                                        {description}
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="product-row__bottom">
                        <div className="product-price product-row__price layout-vertical-tablet">
                            <span data-test-id="product-price-effective" className="product-price__effective product-price__effective--new-card" data-v-2cb0bb4c="">
                                {price}
                            </span>
                        </div>

                        <button data-v-b4c75502="" data-v-50fa6de0="" data-test-id="product-row-button" className="product__button product-row__button"><img data-v-b4c75502="" src="https://testglovo.com/images/svg/plus-new.svg" alt="add"></img></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;

