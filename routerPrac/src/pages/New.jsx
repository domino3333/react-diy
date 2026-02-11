
import { useSearchParams } from "react-router-dom";

const New = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    //?asd=Alice로 넘어온 값을 name으로 저장해서
    // 랜더링 때 쓰려는 것임
    const name = searchParams.get('asd');

    const updateNameParam = (newName) => {
        setSearchParams({ asd: newName });
    }



    return (<>
        <h1>Hello, {name || 'Guest'}</h1>
        {/*이 버튼을 누르면 주소가 new?name=alice로 설정됨 */}
        <button onClick={() => updateNameParam('Alice')}>
            Set name to Alice
        </button>
        <button onClick={() => updateNameParam('Bob')}>
            Set name to Bob
        </button>

    </>)







};
export default New;