
const CafeButton = ({text}) => {

    const onClickButton = (e) => {
        console.log(e);
        alert(text);
    }





    return (
        <>
            <button type="button" onClick={onClickButton}>버튼123</button>
        </>
    )
}

export default CafeButton;