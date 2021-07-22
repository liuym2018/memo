import { useState } from 'react'
import { v4 } from 'uuid'

const Eidt = ({ add, submitStatus }) => {

    const [note, setNote] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    function noteChange(e) {
        setNote(e.target.value)
    }

    function dateChange(e) {
        setDate(e.target.value)
    }

    function timeChange(e) {
        setTime(e.target.value)
    }

    function addItem() {
        submitStatus.current = true;
        add(function (prevData) {
            return [{
                id: v4(),
                note,
                date,
                time
            }, ...prevData]
        });
    }

    return <div>
        <h1 className="header">Memo</h1>
        <p>Event:</p>
        <input type="text" value={note} onChange={noteChange} />
        <p>Date:</p>
        <input type="date" value={date} onChange={dateChange} />
        <p>Time:</p>
        <input type="time" value={time} onChange={timeChange} />
        <button onClick={addItem} className="add">New Even</button>
    </div>
}

export default Eidt;