import React, { useState }  from 'react';
import axios from "axios";
import './Riddles.css'
import * as FaIcons from 'react-icons/fa';


// 1. Change this to reflect the current question e.g "Q10" or "Q2";
////////////////////////////////////
const QUESTION_NUM = "Q1";
////////////////////////////////////


function Riddles() {

    const [name, setName] = useState("");
    const [question, setQuestion] = useState(QUESTION_NUM);
    const [answer, setAnswer] = useState("");

    const submitAnswer = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/answer",{name: name, question: question, answer: answer});
            if (response.status === 200){
                alert("You're response has been submitted for validation by our expert team!");
            } else {
                alert("Sorry something went wrong!");
            }
        } catch (err) {
            alert("Sorry, something went wrong!!!");
        } finally {
            setName("");
            setAnswer("");
            setQuestion(QUESTION_NUM);
            return;
        }

    };

    return (
        <div>
            <h1 className='title'>Riddles</h1>

            {/* 2. Update this to reflect what the new riddle is, and post answer for previous */}
            <div className='containerRiddle'>
                <p className='riddlestyles'>First Riddle: Something very extraordinary happened on the 6th of May, 1978 at 12:34 a.m. What was it?</p>
            </div>

            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>​​​​​

                <h1 className='answer'> SUBMIT YOUR ANSWER HERE</h1>
                <form>
                    <label htmlFor="name" className='name'>Name:</label>
                    <input type="text" onChange={(e) =>setName(e.target.value)} value={name} name="name" />

                    <label htmlFor="question" className='name'>  Question number</label>
                    <select name="question">
                        <option value={QUESTION_NUM} onClick={(e) => setQuestion(e.target.value)}>{QUESTION_NUM}</option>
                    </select>

                    <label htmlFor="answer" className='name'>  Answer:</label>
                    <input type="text" onChange={(e) => setAnswer(e.target.value)} value={answer} />

                    <button type="submit" onClick={(e) => submitAnswer(e)}>Submit!</button>
                </form>
                <p className='pastAnswer'>
                    Previous answer:
                </p>
                <div className='gems'>
                <FaIcons.FaRegGem size={75}/>
            <FaIcons.FaRegGem size={85}/>
            <FaIcons.FaRegGem size={100}/>
            <FaIcons.FaRegGem size={85}/>
            <FaIcons.FaRegGem size={75}/>
                </div>
            </div>
        </div>

    );
}
export default Riddles;

// 3. run "npm run build" in console (in riddles/Riddle-App)
// 4. change into hackathon/riddles then run "git add ." then "git commit -m 'Added x riddle' " then "git push origin main"