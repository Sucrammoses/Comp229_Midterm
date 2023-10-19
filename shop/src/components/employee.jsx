import React, {useState,useRef} from "react";
import "./employee.css";

export const Employee = () => {
    const [fname, setName] = useState('');
    const [lname, setDesc] = useState('');
    const [emailid, setMail] = useState('');
    const [mobile, setMobile] = useState('');
    const _fname = useRef("");
    const _lname = useRef("");
    const _emailid = useRef("");
    const _mobile = useRef("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name:', fname);
        console.log('Description:', lname);
        console.log('Email:', emailid);
        console.log('PhoneNum:', mobile);
    }
    const handleCancle = (event) => {
        event.preventDefault();
        _fname.current.value = "";
        _lname.current.value = "";
        _emailid.current.value = "";
        _mobile.current.value = "";
 
    }


    return(
        <div className="World">
        <form onSubmit = {handleSubmit}>
            <h2 className="Header">Employee Registration Form</h2>
            <div className="Container">
            <br/>
            <label for="fname">First Name: </label>
            <input value={fname} onChange={(e) => setName(e.target.value)} ref={_fname} type="text" placeholder="First Name" id="FName" name="fname" minlength="5"></input>
            <label for="fname"> (Minimum 5 Char)</label>
            <br/>
            <br/>
            <label for="lname">Last Name: </label>
            <input value = {lname} onChange={(e) => setDesc(e.target.value)} ref={_lname} type="text" placeholder="Last Name" id="LName" name="lname"></input>
            <br/>
            <br/>
            <label for="lname">Email ID: </label>
            <input value = {emailid} onChange={(e) => setMail(e.target.value)} ref={_emailid} type="email" placeholder="Email@email.com" id="Email" name="email"></input>
            <br/>
            <br/>
            <label for="mobile">Mobile Number: </label>
            <input value = {mobile} onChange={(e) => setMobile(e.target.value)} ref={_mobile} type="tel" placeholder="xxx-xxx-xxxx" id="Mobile" name="mobile"></input>
            <br/>
            <br/>
            <label for="qualification">Qualification: </label> <br/>
            <input type="checkbox" class="qualifications" value="1"></input> 
            <label for ="qualifications">Highschool(10th)</label><br/>

            <input type="checkbox" class="qualifications" value="2"></input>
            <label for ="qualifications">Highschool(12th)</label><br/>

            <input type="checkbox" class="qualifications" value="3"></input>
            <label for ="qualifications">Graduation(Bachelors)</label><br/>

            <input type="checkbox" class="qualifications" value="4"></input>
            <label for ="qualifications">Post Graduation(Masters)</label><br/>

            <input type="checkbox" class="qualifications" value="5"></input>
            <label for="qualifications">Other</label>
            
            <br/>
            <br/>
            <button type="submit">Submit</button>
            <a>    </a>
            <button onClick={handleCancle} type="cancel">Reset</button>
            <br/>
            <br/>
            </div>
        </form>
        </div>
    )
}