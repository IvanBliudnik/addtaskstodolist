import React from 'react';
import { PropsType} from "./App";

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
                            <span>{el.taskId}</span>
                            <span>{el.title}</span>
                            <span>{el.isDone}</span>
                        </li>
                    })}
                </ul>
                <ul>
                    {props.data.students.map((name) => {
                        return <li>
                            {name}
                        </li>
                    })}
                </ul>
            </div>
        </div>
    );
};

