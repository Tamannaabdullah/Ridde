import React, { useEffect, useState } from 'react'
import axios from "axios";
import * as GiIcons from 'react-icons/gi';
import './Leaderboard.css'

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
            <h1 className='titleStyles'>Leaderboard</h1>
            <div style={{display: "flex" , alignItems: "center", justifyContent: "center", color: '#B2A1D3'}}>
                <GiIcons.GiCutDiamond size={45}/>
                <GiIcons.GiCutDiamond size={50}/>
                <GiIcons.GiCutDiamond size={60}/>
                <GiIcons.GiCutDiamond size={50}/>
                <GiIcons.GiCutDiamond size={45}/>
            </div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                {renderList()}
            </div>
        </div>

    );
}
export default Leaderboard;