import Item from './Item';

const List = ({ listData, deleteData, submitStatus }) => {
    console.log('listData: ', listData);
    return <div className="list">
        {
            listData.map((item) => {
                console.log('item: ', item);
                const { note, date, time, id } = item
                return <Item key={id} id={id} note={note} date={date} time={time} deleteData={deleteData}
                    submitStatus={submitStatus} />
            })
        }
    </div>
}

export default List;