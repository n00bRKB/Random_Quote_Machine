import React, { useState } from "react";
import { data } from "./data";
function Rqm() {
  const prevState = data[Math.floor(Math.random() * data.length)];

  const [state, setState] = useState(prevState);
  return (
    <div className="container w-50">
      <div className="row d-flex justify-content-center align-items-center align-content-center flex-wrap vh-100 text-center">
        <div className="col">
          <div id="quote-box">
            <h1 id="text">
              <i className="fa fa-quote-left"></i> {state.quote}
            </h1>
            <h5 id="author">- {state.author}</h5>
            <a
              className="button"
              id="tweet-quote"
              href="https://twitter.com/intent/tweet"
              target="_top"
            >
              <i class="fa-brands fa-square-x-twitter fa-2xl"></i> Tweet
            </a>
            <button
              id="new-quote"
              className="button"
              onClick={() =>
                setState(data[Math.floor(Math.random() * data.length)])
              }
            >
              New Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rqm;
