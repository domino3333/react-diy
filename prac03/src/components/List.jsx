import { SongDispatchContext } from "../context/SongDispatchContext";
import { SongStateContext } from "../context/SongStateContext";
import SongItem from "./SongItem";
import { useContext } from "react";

const List = () => {

    const { song } = useContext(SongStateContext)

    return (<>
        {song.map((s) =>
            <SongItem key={s.id}{...s} />)}
    </>)
}


export default List;