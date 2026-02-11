import SongItem from "./SongItem";


const List = ({ song, deleteItem}) => {


    return (<>
        {song.map((s) =>
            <SongItem key={s.id}{...s}deleteItem={deleteItem} />)}
    </>)
}


export default List;