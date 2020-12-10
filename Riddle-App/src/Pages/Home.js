import React from 'react'
import './Home.css'
import * as FaIcons from 'react-icons/fa';

function Home() {
    return (
        <div>
            <h1 className='titleStyle'>Are you the Riddle Master?</h1>
            <div style={{display: "flex" , alignItems: "center", justifyContent: "center", color: '#8874a3'}}>
            <FaIcons.FaRegGem size={75}/>
            <FaIcons.FaRegGem size={85}/>
            <FaIcons.FaRegGem size={100}/>
            <FaIcons.FaRegGem size={85}/>
            <FaIcons.FaRegGem size={75}/>
            </div>
            <div className='homeContainer' >
            <p className='hack'>
                Hackathon 2020
            </p>
            <p className='intro'>
                During the next 24 hours riddles will be added onto this site one per hour, they will appear at random so make sure to keep checking the site!
            </p>
            <p className='intro'>
                Gain Gems by being one of the first four people to answer these riddles!
            </p>
            <p className='intro'>
                The person with the most gems will win a prize, will that be you?
            </p>
            </div>
        </div>

    );
}
export default Home;