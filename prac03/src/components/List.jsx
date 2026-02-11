import SongItem from "./SongItem";


const List = ({ song }) => {


    return (<>
        {song.map((s) =>
            <SongItem key={s.id}{...s} />)}
    </>)
}


export default List;