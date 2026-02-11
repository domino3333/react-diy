import { useState,useRef } from "react";
import { StateContext} from '../context/StateContext'
import { useContext } from "react";


const Adder = () => {

    const [box, setBox] = useState('');
    const { dispatch } = useContext(StateContext)
    const idRef = useRef(1);
    const observeAdderBox = (e) => {
        setBox(e.target.value);
    }

    const addState = ()=>{
        dispatch({
            type:'create',
            id:idRef.current++,
            content:box,
            date:Date.now(),
        })
        setBox('');
    }

    return (<>
        <input type="text" onChange={observeAdderBox} name="adderBox" id="adderBox" />
        <button type="button" onClick={addState} >추가</button>

    </>)
}

export default Adder;