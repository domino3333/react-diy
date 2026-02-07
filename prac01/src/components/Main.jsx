import '../css/Main.css'

function Main() {

    const user = {
        ["name:"]: "강민호",
        ['age']: 23,
        isLogin: true,
    }

    return (<>

        <h1 className="h1text">여긴 메인</h1>
        <p>내이름은 {user.name}</p>
        <p>나이는 {user.age}</p>
        <p>로그인/로그아웃 표시</p>
        {user.isLogin === true ? (<p>로그인 중</p>) : (<p>로그아웃 상태</p>)}


    </>)
}

export default Main;