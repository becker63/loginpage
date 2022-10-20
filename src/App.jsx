import React, { useState, useEffect } from "react";
import "./index.css";
import "./animation.css";
import { Animated } from "react-animated-css";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import json from "react-syntax-highlighter/dist/esm/languages/hljs/json";
import dark from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";
SyntaxHighlighter.registerLanguage("json", json);

const codeString = `{
  "access_token": "AYjcyMzY3ZDhiNmJkNTY",
  "refresh_token": "RjY2NjM5NzA2OWJjuE7c",
  "token_type": "bearer",
  "expires": 3600
}`;

export default () => {
  const [opacity, setopacity] = useState(false);

  const [user, setuser] = useState("");
  const [pass, setpass] = useState("");

  const HandleShowDebug = (e) => {
    let name = e.target.name;
    if (name == "user") {
      setuser(e.target.value);
    } else {
      setpass(e.target.value);
    }
  };

  useEffect(() => {
    const len = user.length + pass.length;
    console.log(user, pass, len);

    if (len != 0) {
      setopacity(true);
    } else {
      setopacity(false);
    }
  }, [user, pass]);

  return (
    <div class="row">
      <div class="debuginfo">
        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          isVisible={opacity}
        >
          {opacity == true && (
            <SyntaxHighlighter
              language="json"
              style={dark}
              className="next"
              customStyle={{
                borderRadius: "5px",
                backgroundColor: "transparent",
                fontSize: "20px",
              }}
            >
              {codeString}
            </SyntaxHighlighter>
          )}
        </Animated>
      </div>

      <div class="loginbox">
        <h1>Login</h1>
        <span class="subtitle">User:</span>
        <br />
        <input
          type="text"
          name="user"
          onChange={HandleShowDebug}
          value={user}
        />
        <br />
        <span class="subtitle">Pass:</span>
        <br />
        <input
          type="password"
          name="pass"
          onChange={HandleShowDebug}
          value={pass}
        />
        <br />
        <br />
        <input
          type="submit"
          value="Submit"
          class="button"
          onClick={() => setopacity(!opacity)}
        />
      </div>
    </div>
  );
};
