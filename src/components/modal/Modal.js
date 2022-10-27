import { useState, useEffect } from 'react';
import ModifierGroup from '../modifierGroup/ModifierGroup';
import glovoExportMenu from "../../data/glovo_export_menu.json";

const Modal = (props) => {

    const { productId, modalActive, setModalActive, attributesGroups } = props;

    const [product, setProduct] = useState(null);

    const [attributeGroups, setAttributeGroups] = useState(null);

    const data = glovoExportMenu.data;

    /*функция получает объект по айди */
    const getObjectById = (id, data) => {
        for (let i in data) {
            if (data[i].id === id) {
                return data[i]
            }
        }
    }

    /* Устанавливаем обьект product в стейт*/
    useEffect(() => {
        setProduct(getObjectById(productId, data.products))
    }, [])

    /*когда установился продукт */
    /*По каждому айди группы атрибутов из пропсов получаем группу и создаем компонент*/
    useEffect(() => {
        const attrGroups = attributesGroups.map(id => {
            return (
                <ModifierGroup key={id} groupId={id} getObjectById={getObjectById} />
            )
        })
        setAttributeGroups(attrGroups)
    }, [product])


    return (
        <>
            {modalActive && product ?
                <>
                    <div
                        onClick={() => setModalActive(false)}
                        className={`modal__overlay ${modalActive ? "modal__overlay_active" : ""}`}></div>
                    <div className={`modal ${modalActive ? "modal_active" : ""} ${attributeGroups.length > 0 ? "" : "narrow"}`}>
                        <img
                            className="modal__close"
                            src='https://res.cloudinary.com/glovoapp/image/fetch//q_auto/https://glovoapp.com/images/close-icon.svg'
                            alt="Close"
                            onClick={() => setModalActive(false)}
                        />

                        <div className="modal__product">
                            <div className={`modal__product-mods ${attributeGroups.length > 0 ? "" : "hidden"}`}>{attributeGroups}</div>
                            <div className="modal__product-info">
                                <img className="modal__product-img" src={product.image_url} alt={product.name} />
                                <div className="modal__product-name">{product.name}</div>
                                <div className="modal__product-price">{product.price} грн</div>
                                <div className="modal__product-description">{product.description}</div>
                                <div className="modal__product-counter">
                                    <img src="https://testglovo.com/images/svg/minus-new.svg" alt="minus" />
                                    <span className="">1</span>
                                    <img src="https://testglovo.com/images/svg/plus-new.svg" alt="plus" />
                                </div>
                                <div className="modal__product-button">
                                    Додати 1 за {product.price} грн
                                </div>
                            </div>
                        </div>
                    </div>
                </>
                :
                null}
        </>
    )
}

export default Modal;