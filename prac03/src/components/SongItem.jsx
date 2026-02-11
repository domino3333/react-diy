
const SongItem = ({id,title,singer,genre,deleteItem})=>{

    return(<>
        <p>{id}/{title}/{singer}/{genre}</p>
        <button type="button" onClick={()=>deleteItem(id)}>삭제</button>
    </>)
}

export default SongItem;