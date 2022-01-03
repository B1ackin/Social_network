import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import state from "../../../redux/store";

type PropsType = {
    id: number
    name: string
}

export function DialogItem(props: PropsType) {


    let path = "/dialogs/" + props.id;

    return (

        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}