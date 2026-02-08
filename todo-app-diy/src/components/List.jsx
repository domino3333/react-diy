import TodoItem from "./TodoItem";
import { useState } from "react";


const List = ({ todos }) => {

    //list창에서 검색버튼, 또는 change로 실시간 검사?
    //일단 검색버튼을 누르면 검색되게 하는게 ux엔 좋을듯

    //검색창에 입력된 글자 state
    const [keyword, setKeyword] = useState('');

    const searchKeywordObserver = (e) => {
        setKeyword(e.target.value);
    }

    const getFilteredData = () => {
        if (keyword === '') {
            return todos;
        }

        return todos.filter((element) => {
           return element.content.includes(keyword);
        })
    }

    const fileterdTodos = getFilteredData();

    const searchClick = (e) => {
        if (keyword === '') return;
        setKeyword('');
    }


    return (<>
        <div className="List">
            <div>{fileterdTodos.map((element) => {
                return (<TodoItem key={element.id} {...element} />)
            })}
            </div>

        </div>
        <label>
            <input placeholder="검색어를 입력하세요"
                onChange={searchKeywordObserver}
                value={keyword}

            />
        </label>
        <button type="button" onClick={searchClick}>검색</button>
    </>)
}

export default List;