import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
// import { useHistory } from "react-router-dom";
import FeelingProud from "./FeelingProud";
import { style } from "glamor";

export default function Greeting(props) {
  const theme = props.theme;
  // const history = useHistory();

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">{greeting.title}</h1>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                <span>I'm </span>
                <span style={{ color: theme.accentColor }}>
                  {greeting.full_name}.{" "}
                </span>
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="portfolio-repo-btn-div" style={{ padding: "2%" }}>
                <a
                  {...styles}
                  className="button"
                  href="https://drive.google.com/file/d/1A09n2dkiVJXN5wFPN_k4CAexHmYmyAj9/view?usp=share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ padding: "15px 25px" }}
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
