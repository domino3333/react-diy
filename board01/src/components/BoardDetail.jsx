import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BoardStateContext } from "../context/BoardStateContext";
import "./css/BoardDetail.css";
import { BoardDispatchContext } from "../context/BoardDispatchContext";

const BoardDetail = () => {

    const params = useParams();
    const nav = useNavigate();
    const boardList = useContext(BoardStateContext);
    const { onDelete,setCategory} = useContext(BoardDispatchContext);
    const boardInfo = boardList.find((item) => item.id === Number(params.id));
    const [input, setInput] = useState({});

    const observeInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }


    if (!boardInfo) {
        return (
            <div className="detail-wrapper">
                <div className="detail-inner">
                    <div className="not-found">
                        존재하지 않는 게시글입니다.
                    </div>
                </div>
            </div>
        )
    }

    const { id, title, content, date, writer, category } = boardInfo
    const formattedDate = new Date(date).toLocaleString("ko-KR");

    return (
        <div className="detail-wrapper">
            <div className="detail-inner">

                <div className="detail-header">
                    <span className="detail-category" onChange={observeInput}>{category}</span>
                    <h1 className="detail-title" onChange={observeInput}>{title}</h1>

                    <div className="detail-meta">
                        <span className="detail-writer">{writer}</span>
                        <span className="detail-date">{formattedDate}</span>
                    </div>
                </div>

                <div className="detail-divider" />

                <div className="detail-content" onChange={observeInput}>
                    {content}
                </div>

                <div className="detail-footer">
                    <div className="detail-btn-group">
                        <button
                            className="detail-edit-btn"
                            onClick={() => nav(`/edit/${id}`)}
                        >
                            수정
                        </button>

                        <button className="detail-delete-btn" onClick={() => {
                            if (confirm("정말 삭제하시겠습니까?")) {
                                onDelete(Number(params.id))
                                nav("/")
                                setCategory("전체")

                            }
                        }
                        } >
                            삭제
                        </button>

                        <button
                            className="detail-back-btn"
                            onClick={() => nav("/")}
                        >
                            목록으로
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BoardDetail
