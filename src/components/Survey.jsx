import { useState } from "react";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [userData, setUserData] = useState( //state obj holding form data ie. rating, array etcc.
    {
      color: "",
      spendtime:[],
      review: "",
      username: "",
      email: ""
    }
  )

  //handle form subbmission 
  const handleSubmit = (event) => {
    //prevent default behaviour and reset userdata to initial empty state.
    event.preventDefault()
    console.log(userData)
    setUserData({
      color: "",
      spendtime:[],
      review: "",
      username: "",
      email: ""
    })
  }

  //destruct name etcc.. form event target
  //checkbox handler
  //update the spedntime with setUserdata and update respective property
  const handleChange =(event => {
    const {name, type, value, checked } = event.target

    if (type === 'checkbox') {
      setUserData((prevFormData) => ({
        ...prevFormData,
        spendtime: checked
        ? [...prevFormData.spendtime, value]
        :prevFormData.spendtime.filter(item => item !== value),
      }))
    }

    else {
      setUserData({...userData, [name]: value})
    }

  })

  //render list
  // main container "survey"
  //sections that contain the form and for ext1 the answerslist
  //create onsubmit for form element handling
  //render rubber duck rating with state
  //activities with onChnage handler and ensure that the box reflects the current state "checked"
  //render text areas and inputs for email, users name etc..


  return (
    <main className="survey" >
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}>
        <h2>Tell us what you think about your rubber duck!</h2>
        <div className="form__group radio">
          <h3>How do you rate your rubber duck colour?</h3>
          <ul>
            <li>
              <input id="color-one" 
              type="radio" 
              name="color" 
              value="1" 
              onChange={handleChange} 
              checked={userData.color === "1"} />
              <label htmlFor="color-one">1</label>
            </li>
            <li>
              <input id="color-two" 
              type="radio" 
              name="color" 
              value="2" 
              onChange={handleChange} 
              checked={userData.color === "2"} />
              <label htmlFor="color-two">2</label>
            </li>
            <li>
              <input id="color-three" 
              type="radio" 
              name="color" 
              value="3" 
              onChange={handleChange} 
              checked={userData.color === "3"} />
              <label htmlFor="color-three">3</label>
            </li>
            <li>
              <input id="color-four" 
              type="radio" 
              name="color" 
              value="4" 
              onChange={handleChange} 
              checked={userData.color === "4"} />
              <label htmlFor="color-four">4</label>
            </li>
            </ul>
        </div>
        <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        <ul>
          <li>
            <label>
              <input
              name="spendtime"
              type="checkbox"
              value="swimming"
              onChange={handleChange}
              checked={userData.spendtime.includes("swimming")}
              />Swimming</label>
          </li>
          <li>
            <label>
              <input
              name="spendtime"
              type="checkbox"
              value="bathing"
              onChange={handleChange}
              checked={userData.spendtime.includes("bathing")}
              />Bathing</label>
          </li>
          <li>
            <label>
              <input
              name="spendtime"
              type="checkbox"
              value="chatting"
              onChange={handleChange}
              checked={userData.spendtime.includes("chatting")}
              />Chatting</label>
          </li>
          <li>
            <label>
              <input
              name="spendtime"
              type="checkbox"
              value="noTime"
              onChange={handleChange}
              checked={userData.spendtime.includes("noTime")}
              />I dont like to spend time with it</label>
          </li>
        </ul>
        </div>
        <label> What else have you got to say about your rubber duck?
          <textarea
          name="review"
          cols="30"
          rows="10"
          onChange={handleChange}
          value={userData.review}
          ></textarea>
        </label>
        <label> Put your name here (if you feel like it):
          <input
          type="text"
          name="username"
          onChange={handleChange}
          value={userData.username}
          ></input>
        </label>
        <label> Leave us your email pretty please??
          <input
          type="email"
          name="email"
          onChange={handleChange}
          value={userData.email}
          ></input>
        </label>
        <input 
        className="form__submit"
        type="submit"
        value="Submit Survey!"
        /> 
          </form>
          </section>
    </main>
  );
}

  //export
export default Survey;
