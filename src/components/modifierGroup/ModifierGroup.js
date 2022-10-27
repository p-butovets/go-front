import { useState, useEffect } from 'react';
import Modifier from "../modifier/Modifier";
import glovoExportMenu from "../../data/glovo_export_menu.json";

const ModifierGroup = (props) => {

    const { groupId, getObjectById } = props;

    //тут хранится обьект группы аттрибутов
    const [group, setGroup] = useState({});

    //тут храним готовые модификаторы
    const [modifiers, setModifiers] = useState(null);

    // когда пришел groupId устанавливаем обьект группы аттрибутов
    useEffect(() => {
        setGroup(getObjectById(groupId, glovoExportMenu.data.attribute_groups))
    }, [groupId])

    //когда установилась группа - формируем компонент для каждого аттрибута
    useEffect(() => {
        try {
            const attributes = group.attributes.map(id => {
                return (
                    <Modifier key={id} id={id} getObjectById={getObjectById} />
                )
            })
            setModifiers(attributes)
        }
        catch {
            setModifiers(null)
        }

    }, [group])

    const title = group ? group.name : null;

    const isRequired = group.min > 0 ? true : false;

    const options = group.multiple_selection || group.max > 1 ?
        `Максимальна кількість опцій: ${group.max}`
        :
        "Оберіть одну";

    return (
        <div className="attribute-group">
            <h2 className="attribute-group_title">{title}</h2>
            <div className="attribute-group_options">
                {options}
                {isRequired ? <Badge text={"Обов'язково"} /> : null}
            </div>
            {modifiers}
        </div>
    )
}

const Badge = (props) => {
    return (
        <div className="badge">{props.text}</div>
    )
}

export default ModifierGroup;