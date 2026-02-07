
const CafeButton = ({text}) => {

    // const onClickButton = (e) => {
    //     console.log(e);
    //     alert(e.target.value);
    // }





    return (
        <>
            <button type="button" onClick={()=>{
                console.log(text)
                alert(text)
                }}>버튼123</button>
        </>
    )
}

export default CafeButton;