import React, { useState }  from 'react';
import axios from "axios";
import './Riddles.css'
import * as FaIcons from 'react-icons/fa';


// 1. Change this to reflect the current question e.g "Q10" or "Q2";
////////////////////////////////////
const QUESTION_NUM = "Q5";
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
                <p className='riddlestyles'>Q5: A taxi driver is going the wrong way down a one-way street. He passes four police officers, yet none of them stop him. Why?</p>
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
                    Q4: The couples and the married people!
                    <br></br>
                    Q3: Keyboard
                    <br></br>
                    Q2 Answer: Take the letters F and E off of the word five. This leaves you with IV which is four in roman numerals.
                    <br></br>
                    Q1 Answer: At that moment, the time and day could be written as: 12:34, 5/6/78.
                    <br></br>
                   
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