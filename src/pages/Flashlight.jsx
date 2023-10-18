import React, { useEffect, useState } from "react";
import "../components/css/flashLight.css";

const Flashlight = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkIsTouchDevice = () => {
      try {
        document.createEvent("TouchEvent");
        setIsTouchDevice(true);
      } catch (e) {
        setIsTouchDevice(false);
      }
    };

    checkIsTouchDevice();
  }, []);

  const getMousePosition = (e) => {
    setMouseX(!isTouchDevice ? e.pageX : e.touches[0].pageX);
    setMouseY(!isTouchDevice ? e.pageY : e.touches[0].pageY);
  };

  useEffect(() => {
    document.addEventListener("mousemove", getMousePosition);
    document.addEventListener("touchmove", getMousePosition);

    return () => {
      document.removeEventListener("mousemove", getMousePosition);
      document.removeEventListener("touchmove", getMousePosition);
    };
  }, [isTouchDevice]);

  const flashlightStyle = {
    "--Xpos": `${mouseX}px`,
    "--Ypos": `${mouseY}px`,
  };

  return (
    <div className=" font-semibold">
      <div id="flashLight" style={flashlightStyle}></div>
      <p className=" text-red-800">
        I want to address the fact that you're upset with me, and I'm really
        sorry for whatever it is that I've done. I value our relationship so
        much, and I hate to see you upset because of my actions.
      </p>
      <p>
        I want you to know that I love you, and I'm genuinely sorry for my
        actions. I'll do whatever it takes to make it up to you and to ensure
        this doesn't happen again. Can we move past this together?
      </p>
      <p className=" text-[#deff3b]">
        I'm committed to learning from this situation and being a better
        partner. Please, let's work through this together, so we can move
        forward and strengthen our relationship.
      </p>
      <p>
        I hear you, and I'm truly sorry for causing you pain. I want to work
        through this together and find a resolution that makes both of us happy.
        Can you help me understand how I can make things right and show you that
        I care about your feelings?
      </p>
      <p className=" text-[#216923]">
        I understand that I've hurt your feelings, and I genuinely want to make
        things right. I want you to know that I'm willing to listen and
        understand why you're upset. Please, share your thoughts with me.
      </p>
      <p className=" text-red-500">
        I really do care about you and your feelings. I love you more than I can
        say.
      </p>
      <p className=" text-red-800 font-bold text-4xl">
        I Love you Hnin Aye Wai...
      </p>
    </div>
  );
};

export default Flashlight;
