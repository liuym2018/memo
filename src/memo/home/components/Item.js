const Item = ({ id, note, date, time, deleteData, submitStatus }) => {

    function deleteItem() {
        submitStatus.current = true;
        deleteData(function (prev) {
            return prev.filter(item => item.id !== id)
        })
    }

    return <div className="item">
        <div>
            <p>{note}</p>
            <p>{`${date} ${time}`}</p>
        </div>
        <button className="remove" onClick={deleteItem}>Remove</button>
    </div>
}

export default Item;