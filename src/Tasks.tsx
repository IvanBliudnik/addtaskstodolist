import React from 'react';
import {PropsType} from "./Todolist";


export type DataPropsType = {
    data: PropsType
}

export const Tasks = (props: DataPropsType ) => {
    return (
        <div>
        <h1>{props.data.title}</h1>
            <div>
                <ul>
                    {props.data.tasks.map((el) => {
                        return <li>
                            <span>{el.id}</span>
                            <span>{el.title}</span>
                            <span>{el.isDone}</span>
                        </li>
                    })}
                </ul>
                <ul>
                    {props.data.tasks.map((name) => {
                        return <li>
                            {}
                        </li>
                    })}
                </ul>
            </div>
        </div>
    );
};

