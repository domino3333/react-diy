import { useState } from "react";


function Register() {


    const [input, setInput] = useState({
        ["name"]: "default name",
        birth: "",
    })

    const onChangeInfo = (e) => {
        setInput({ ...input,
            [e.target.name]: e.target.value });
    }

    const checkALog = (e) => {
        console.log(input.name);
    }

    return (<>
        <label htmlFor="name">이름:</label>
        <input value={input.name} onChange={onChangeInfo} type="text" id="name" name="name" />

        <label htmlFor="birth">생년월일:</label>
        <input type="date" id="birth" name="birth" onChange={onChangeInfo} />

        <button type="button" onClick={checkALog}>로그확인</button>

    </>)
}


export default Register;