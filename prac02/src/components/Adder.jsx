import { useState } from "react";

const Adder = ({ addState }) => {

    const [box, setBox] = useState('');

    const observeAdderBox = (e) => {
        setBox(e.target.value);
    }


    return (<>
        <input type="text" onChange={observeAdderBox} name="adderBox" id="adderBox" />
        <button type="button" onClick={() => addState(box)} >추가</button>

    </>)
}

export default Adder;