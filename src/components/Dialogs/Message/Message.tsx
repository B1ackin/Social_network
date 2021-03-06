import s from "../Dialogs.module.css";
import React from "react";

type PropsType = {
    message: string,
    id?: number
}

export function Message(props: PropsType) {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}
