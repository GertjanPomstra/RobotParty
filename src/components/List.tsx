import React from "react";
import {IState as IProps} from "../App"

const List: React.FC<IProps> = ({ robots }) => {

    // with this function, after ':' is the expected output.
    // in this case, that would be '(): JSX.Element[] =>'
    // hovering over the function shows what the function expects.
    // when this is f.e. void, the return is probably not right.
    // setting the expected output type will show you what is wrong.
    // when that is fixed, the expected output type is not necessary
    // to define anymore.

    const renderList = () => {
        return robots.map((robot) => {
            return (
                <li className="List">
                    <div className="List-header">
                        <img className="List-img" alt="" src={robot.imgUrl} />
                        <h2>{robot.name}</h2>
                    </div>
                    <p className="List-favNum">{robot.favNum}</p>
                    <p className="List-item">{robot.item}</p>
                    <p className="List-note">{robot.note}</p>
                </li>
            )
        })
    }
    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List