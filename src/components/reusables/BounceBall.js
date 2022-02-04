import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
export default function BounceBall(props) {
  useEffect(() => {
    // gsap.fromTo(
    //   blue.current,
    //   0.5,
    //   { y: -18 },
    //   { y: 22, yoyo: true, repeat: -1 }
    // );
    gsap.fromTo(
      green.current,
      0.5,
      { y: 18 },
      { y: -18, yoyo: true, repeat: -1 }
    );
    gsap.fromTo(
      red.current,
      0.5,
      { x: 1, y: 2 },
      { x: 10, y: -18, yoyo: true, repeat: -1 }
    );
    gsap.fromTo(
      yellow.current,
      0.5,
      { y: -18 },
      { y: 22, yoyo: true, repeat: -1 }
    );
    gsap.fromTo(
      white.current,
      0.5,
      { y: -18 },
      { y: 22, yoyo: true, repeat: -1 }
    );
  });
  // const blue = useRef(null);
  const red = useRef(null);
  const yellow = useRef(null);
  const green = useRef(null);
  const white = useRef(null);
  return (
    <div style={{ zIndex: "2" }}>
      <svg viewBox="0 0 150 33.2" width="126" height="88">
        {/* <circle ref={blue} cx="16.1" cy="16.6" r="16.1" fill="#527abd" /> */}
        {/* <circle ref={red} cx="55.2" cy="16.6" r="16.1" fill="#de4431" />
        <circle ref={yellow} cx="94.3" cy="16.6" r="16.1" fill="#f4b61a" />
        <circle ref={green} cx="133.4" cy="16.6" r="16.1" fill="#009e52" />
        <circle ref={white} cx="19.4" cy="16.6" r="16.1" fill="#9DF754" /> */}
        <circle ref={red} cx="55.2" cy="16.6" r="16.1" fill="#FFFFFF" />
        <circle ref={yellow} cx="94.3" cy="16.6" r="16.1" fill="#FFFFFF" />
        <circle ref={green} cx="133.4" cy="16.6" r="16.1" fill="#FFFFFF" />
        <circle ref={white} cx="19.4" cy="16.6" r="16.1" fill="#FFFFFF" />
      </svg>
    </div>
  );
}
