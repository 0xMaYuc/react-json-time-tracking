import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Time.css';

export default function Time() {

    const [data, setData] = useState([]);
    const [timeframe, setTimeframe] = useState("daily");

    const fetchData = async () => {
        const { data } = await axios.get(
            "assets/json/dataTime.json"
        );
        setData(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const changeTimeframe = (event, param) => {
        setTimeframe(param);
    };

    if (!data) return null;

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-lg-3">
                <section className="col col-lg-3 pt-3">
                    <div className="containerLeftTop rounded p-4">
                        <div className="row row-cols-2 row-cols-lg-1">
                            <div className="col d-flex flex-column justify-content-center align-items-center">
                                <img width="40%" className="rounded-circle border border-white" src="./assets/img/image-jeremy.png" alt="avatar" />
                            </div>
                            <div className="col d-flex flex-column justify-content-center align-items-center">
                                <small className="greyLight">Report for</small>
                                <h2>John Doe</h2>
                            </div>
                        </div>
                    </div>
                    <div className="containerLeftBottom rounded p-4">
                        <div className="row h-100 row-cols-3 row-cols-lg-1 text-center text-lg-start">
                            <div className="col py-2"><button className={timeframe === 'daily' ? 'active' : undefined} onClick={event => changeTimeframe(event, 'daily')}>Daily</button></div>
                            <div className="col py-2"><button className={timeframe === 'weekly' ? 'active' : undefined} onClick={event => changeTimeframe(event, 'weekly')}>Weekly</button></div>
                            <div className="col py-2"><button className={timeframe === 'monthly' ? 'active' : undefined} onClick={event => changeTimeframe(event, 'monthly')}>Monthly</button></div>
                        </div>
                    </div>
                </section>

                <section className="categories col col-lg-9">
                    <div className="row row-cols-1 row-cols-md-3">
                        {data && data.length > 0 && data.map((item, i) =>
                            <div className="col pt-3" key={i}>
                                <div className={'containerIcon icon' + i + ' rounded'}></div>
                                <div className="containerContent p-4 rounded">
                                    <div className="row">
                                        <div className="col-10">{item.title}</div>
                                        <div className="col-2">...</div>
                                    </div>
                                    <div className="mt-3">
                                        <h2>{item.timeframes[timeframe].current}hrs</h2>
                                    </div>
                                    <div className="greyLight">
                                        Last week - {item.timeframes[timeframe].previous}hrs
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </section>

            </div>
        </div>



    )
}

