import { useContext } from "react";
import { SongDispatchContext } from "../context/SongDispatchContext";

const SongItem = ({ id, title, singer, genre }) => {

    const { deleteItem } = useContext(SongDispatchContext)

    return (<>
        <p>{id}/{title}/{singer}/{genre}</p>
        <button type="button" onClick={() => deleteItem(id)}>삭제</button>
    </>)
}

export default SongItem;