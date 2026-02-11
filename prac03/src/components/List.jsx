import { SongStateContext } from "../context/SongStateContext";
import SongItem from "./SongItem";
import { useContext } from "react";

const List = ({ deleteItem }) => {

    const { song } = useContext(SongStateContext)

    return (<>
        {song.map((s) =>
            <SongItem key={s.id}{...s} deleteItem={deleteItem} />)}
    </>)
}


export default List;