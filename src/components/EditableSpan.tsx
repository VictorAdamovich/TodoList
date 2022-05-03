import React, {ChangeEvent, useState} from 'react';

type EditableSpanType = {
    title: string
    callBack:(newTitle:string)=>void
}

export const EditableSpan = (props: EditableSpanType) => {
    let [edit, setEdit] = useState(false)
    let [newTitle, setNewTitle] = useState(props.title)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    const onDoubleClickHandler = () => {
        setEdit(!edit)
        props.callBack(newTitle)
    }

    return (
        edit
            ? <input onDoubleClick={onDoubleClickHandler}
                     value={newTitle}
                     onChange={onChangeHandler}
                     onBlur={onDoubleClickHandler}
                     autoFocus
            />
            : <span onDoubleClick={onDoubleClickHandler}>{props.title}</span>

    );
};

