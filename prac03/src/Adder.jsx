


const Adder = () => {

    return (
        <>
            <input type="text" name="addTitleBox" id="addBox" placeholder="제목" />
            <input type="text" name="addSingerBox" id="addBox" placeholder="가수" />
            <select defaultValue="none">
                <option value="none"></option>
                <option value="dance">댄스</option>
                <option value="ballad">발라드</option>
                <option value="pop">팝</option>
            </select>

        </>
    )
}

export default Adder