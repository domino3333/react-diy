import { useRef, useState } from 'react';
import '../css/Adder.css'

const Adder = ({ setTodos }) => {

    //content는 입력 중인 값, 등록하면 setTodos로 가야 함
    const [content, setContent] = useState('');
    const add_input_ref = useRef();
    const idRef = useRef(0);

    const clickAddBtn = ()=>{
        if(content ==='') return;

        const newData={
            id:idRef.current++,
            content:content,
            date:new Date().getTime()

        }
        setTodos([newData,...todos]);
    }

    const observeInputData = (e)=>{
        setContent(e.target.value);
    }

    return (<>
        <div className="Adder">
            <input
                ref={add_input_ref}
                className="adder-input"
                placeholder="추가할 업무를 입력하세요"
                onChange={observeInputData}
            />
            <button className="adder-button" onClick={clickAddBtn}>추가</button>
        </div>
    </>)
}

export default Adder;