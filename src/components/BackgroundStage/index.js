import "./keyshapejs.js";
if (KeyshapeJS.version.indexOf("1.") != 0)
  throw Error("Expected KeyshapeJS v1.*.*");
window.ks = document.ks = KeyshapeJS;

import React, { useEffect, useState } from "react";
import SVG from "react-inlinesvg";
import { useWindowSize } from "@react-hook/window-size";

import styles from "./styles.scss";
import testsvg from "./images/vax.svg";
import virus from "./images/virus.svg";

import { has } from "lodash";

// Load our animation files and JavaScript animations
const base = "./sequence/";
const sequences = {
  default: {
    one: {
      svg: require("./sequence/vaccine1-1.svg"),
      animation: require("./animations/vaccine1-1")
    },
    two: {
      svg: require("./sequence/vaccine1-2.svg"),
      animation: require("./animations/vaccine1-2")
    },
    three: require("./sequence/vaccine1-3.svg"),
    four: require("./sequence/vaccine1-4.svg"),
    five: require("./sequence/vaccine1-5.svg"),
    six: require("./sequence/vaccine1-6.svg"),
    seven: require("./sequence/vaccine1-7.svg"),
    eight: require("./sequence/vaccine1-8.svg"),
    nine: require("./sequence/vaccine1-9.svg"),
    ten: require("./sequence/vaccine1-10.svg"),
    eleven: require("./sequence/vaccine1-11.svg"),
    twelve: require("./sequence/vaccine1-12.svg")
  }
};

let tl;
let isAnimating;
let nextAnimation;

export default props => {
  const [preload, setPreload] = useState(true);
  const [windowWidth, windowHeight] = useWindowSize();
  const [view, setView] = useState("default");
  const [animationName, setAnimationName] = useState("two");

  const svgLoaded = () => {
    if (sequences[view][animationName].animation) {
      isAnimating = true;
      tl = sequences[view][animationName].animation(window.ks);

      console.log(tl);

      // Fire the animationEnded method on finish
      tl.onfinish = animationEnded;
    }
  };

  const animationEnded = () => {
    isAnimating = false;
    console.log("Animation eneded...");

    if (has(tl, "_options.markers.LoopStart")) {
      console.log("LoopStart present...");
      tl.play("LoopStart");
      isAnimating = true;
    } else {
      console.log("No loop");
    }

    // Switch to next animation (if different)
    setAnimationName(nextAnimation);
  };

  useEffect(() => {
    setTimeout(() => {
      setPreload(false);
    }, 2000);
  }, []); // Load once on mount

  useEffect(() => {
    if (!isAnimating) {
      nextAnimation = props.storyState;
      console.log(nextAnimation);
      setAnimationName(nextAnimation);
    } else {
      nextAnimation = props.storyState;
    }
  }, [props.storyState]);

  // TODO: set props.storyState to change the animationName when
  // animation reaches the end

  return (
    <div className={styles.root}>
      <div className={styles.svgContainer}>
        {sequences[view][animationName] &&
          sequences[view][animationName]["svg"] && (
            <SVG
              src={sequences[view][animationName].svg || sequences[view]["one"]}
              onLoad={svgLoaded}
              preProcessor={code => {
                // TODO: MAYBE MAKE THIS WORK OR JUST GET BEN TO PUT EVERYTHING
                // INSIDE A G ELEMENT
                // OK Ben put everything in a g el but it already had
                // a transform on it. So let's put it in another <g>
                const topGroupTag = code.replace("</defs><g", "</defs><g><g");
                const position = topGroupTag.lastIndexOf("</g>");

                const output =
                  topGroupTag.substring(0, position + 3) +
                  "</g>" +
                  topGroupTag.substring(position + 3);

                return output;
              }}
              // uniquifyIDs={true}
              // uniqueHash={"unique"}
            />
          )}
      </div>
      {preload && (
        <div className={styles.preload}>
          <SVG src={sequences[view]["one"].svg} uniquifyIDs={true} />
          <SVG src={sequences[view]["two"].svg} uniquifyIDs={true} />
          {/* <SVG src={sequences[view]["three"]} uniquifyIDs={true} />
          <SVG src={sequences[view]["three"]} uniquifyIDs={true} />
          <SVG src={sequences[view]["four"]} uniquifyIDs={true} />
          <SVG src={sequences[view]["five"]} uniquifyIDs={true} />
          <SVG src={sequences[view]["six"]} uniquifyIDs={true} />
          <SVG src={sequences[view]["seven"]} uniquifyIDs={true} />
          <SVG src={sequences[view]["eight"]} uniquifyIDs={true} />
          <SVG src={sequences[view]["nine"]} uniquifyIDs={true} />
          <SVG src={sequences[view]["ten"]} uniquifyIDs={true} />
          <SVG src={sequences[view]["eleven"]} uniquifyIDs={true} />
          <SVG src={sequences[view]["twelve"]} uniquifyIDs={true} /> */}
        </div>
      )}
    </div>
  );
};

// const getAnimation = key => {
//   switch (props.storyState) {
//     case "one":
//       return sequences.default.one;
//     case "two":
//       return vaccine2;
//     case "three":
//       return vaccine3;
//     case "four":
//       return vaccine4;
//     case "five":
//       return vaccine5;
//     case "six":
//       return vaccine6;
//     case "seven":
//       return vaccine7;
//     case "eight":
//       return vaccine8;
//     case "nine":
//       return vaccine9;
//     case "ten":
//       return vaccine10;
//     case "eleven":
//       return vaccine11;
//     case "twelve":
//       return vaccine12;
//     default:
//       return vaccine1;
//   }
// };
