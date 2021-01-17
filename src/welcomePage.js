import React, { useState } from "react";
import "./welcomePage.scss";
import { useHistory } from "react-router-dom";

function WelcomePage() {
  const [nickname, setNickname] = useState("");

  const history = useHistory();

  const hanldeSubmit = (e) => {
    e.preventDefault();
    setNickname("");

    history.push(`/registered?nickname=${nickname}`);
  };

  return (
    <>
      <section className="section_container">
        <div className=" welcome_container jumbotron">
          <h1>Welcome!</h1>
          <form className="welcome_page_form" onSubmit={hanldeSubmit}>
            <label htmlFor="name" className="form-label">
              Please enter your nickname and start catching Pokémon.
              <p className="text-uppercase">Good Luck!</p>
            </label>
            <input
              type="text"
              id="input_nickname"
              name="name"
              placeholder="Enter your nickname here..."
              className="form-control"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              required
            />
            <input
              type="submit"
              className="btn btn-outline-primary btn-lg"
              value="Continue"
            />
          </form>
        </div>
      </section>
    </>
  );
}

export default WelcomePage;
