import { useState } from "react";


function Register() {

    const [name, setName] = useState("이름");
    const [birth, setBirth] = useState('');

    const onChangeName = (e) => {
        console.log(e);
        setName(e.target.value);
    }
    const onChangeBirth = (e) => {
        console.log(e);
        setBirth(e.target.value);
    }


    return (<>
        <label htmlFor="name">이름:</label>
        <input value={name} onChange={onChangeName}type="text" id="name" name="name"/>

        <label htmlFor="birth">생년월일:</label>
        <input type="date" id="birth" name="birth"onChange={onChangeBirth}/>

    </>)
}


export default Register;