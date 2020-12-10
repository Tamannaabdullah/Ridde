import React, { useEffect, useState } from 'react'
import axios from "axios";

function Leaderboard() {

    const [scores, setScores] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios.get("/api/scores"); 
                console.log(data);
                setScores(data);
            } catch (err) {
                console.log(err)
            }
        }
        getData();
    }, []);

    const renderList = () => {
        return scores.map(person => (
            <div style={{display: "flex", justifyContent: "center"}}>
                <p>{person.name} : {person.score}</p>
            </div>
        ));
    };

    return (
        <div className='leaderboard'>
            <h1>Leaderboard</h1>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                {renderList()}
            </div>
        </div>

    );
}
export default Leaderboard;