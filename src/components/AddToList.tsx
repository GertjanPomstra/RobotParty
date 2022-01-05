import React, { useState } from "react";
import {IState as Props} from "../App"

interface IProps {
    robots: Props["robots"]
    setRobots: React.Dispatch<React.SetStateAction<Props["robots"]>>
}

const AddToList: React.FC<IProps> = ( {robots, setRobots} ) => {

    const [input, setInput] = useState({
        name: "",
        favNum: "",
        item: "",
        note: ""
    })

    // To check which type 'e' should be, we can put '(e) => {}'
    // instead of 'handleChange' in 'onChange={...}'.
    // Typescript then knows what the type of 'e' would be
    // and this can be seen by hovering over 'e'.

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void => {
        if (!input.name) {return}

        setRobots([
            ...robots, {
                name: input.name,
                imgUrl: "https://robohash.org/" + input.name,
                favNum: parseInt(input.favNum),
                item: input.item,
                note: input.note
            }
        ]);

        setInput({
            name: "",
            favNum: "",
            item: "",
            note: ""
        })
    }

    return (
        <div className="AddToList">
        <input
            type="text"
            placeholder="Name"
            className="AddToList-input"
            value={input.name}
            onChange={handleChange}
            name="name"
        />
        <input 
            type="number"
            placeholder="Favorite number"
            className="AddToList-input"
            value={input.favNum}
            onChange={handleChange}
            name="favNum"
        />
        <input 
            type="text"
            placeholder="What do you bring to the party?"
            className="AddToList-input"
            value={input.item}
            onChange={handleChange}
            name="item"
        />
        <textarea
            placeholder="Add a comment"
            className="AddToList-input"
            value={input.note}
            onChange={handleChange}
            name="note"
        />
        <button
            className="AddToList-btn"
            onClick={handleClick}
        >Add robot to the party</button>
        </div>
    )
}

export default AddToList