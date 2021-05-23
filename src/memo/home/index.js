import { useState, useEffect, useRef } from 'react'
import { API_GET_DATA } from '../../global/constants'

import Eidt from './components/edit';
import List from './components/list';
import './index.css';

async function fetchData(setData) {
    const res = await fetch(API_GET_DATA)
    const { data } = await res.json()
    console.log('data: ', data);
    setData(data);
}

async function fetchSetData(data) {
    await fetch(API_GET_DATA, {
        method: "PUT",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ data })
    })
}

const Home = () => {
    const [data, setData] = useState([]);
    const submitStatus = useRef(false);

    useEffect(() => {
        if (!submitStatus.current) {
            return
        }
        fetchSetData(data)
            .then(data => submitStatus.current = false)
    }, [data])

    useEffect(() => {
        // fetch(API_GET_DATA)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log('data: ', data);
        //     })
        fetchData(setData)
    }, [])

    return <div className="app">
        <Eidt add={setData} submitStatus={submitStatus} />
        <List listData={data} deleteData={setData} submitStatus={submitStatus} />
    </div>
}

export default Home;