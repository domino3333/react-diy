
import { useState } from "react";

const Adder = ({ create }) => {

    const [input, setInput] = useState();

    const observeInput = (e) => {
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }



    return (
        <>
            <input onChange={observeInput} type="text" name="title" id="addBox" placeholder="제목" />
            <input onChange={observeInput} type="text" name="singer" id="addBox" placeholder="가수" />
            <select name="genre" defaultValue="none" onChange={observeInput} >
                <option value="none"></option>
                <option value="dance">댄스</option>
                <option value="ballad">발라드</option>
                <option value="pop">팝</option>
            </select>
            <button type="button" onClick={() => { create(input) }}>등록</button>

        </>
    )
}

export default Adder