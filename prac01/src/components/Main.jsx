import '../css/Main.css'

function Main(){

    const user ={
        ["name:"]:"강민호",
        ['age']:23,
    }

    return (<>

        <h1 className="h1text">여긴 메인</h1>
        <p>내이름은 {user.name}</p>
        <p>나이는 {user.age}</p>

    </>)
}

export default Main;