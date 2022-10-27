import { useState, useEffect } from 'react';
import glovoExportMenu from "../../data/glovo_export_menu.json";

const Modifier = (props) => {

    const { id, getObjectById } = props;

    const [modifier, setModifier] = useState();

    useEffect(() => {
        setModifier(getObjectById(id, glovoExportMenu.data.attributes));
    }, [])

    const name = modifier ? modifier.name : null;
    const price = modifier && modifier.price_impact > 0 ? `+ ${modifier.price_impact} грн` : null;

    return (
        <div className="attribute">
            <div className="attribute-title">
                <div className="attribute-name">{name}</div>
                <div className="attribute-price">{price}</div>
            </div>
            <img className="attribute-add-btn" src="https://testglovo.com/images/svg/plus-new.svg" alt={"plus"} />
        </div>
    )
}

export default Modifier;