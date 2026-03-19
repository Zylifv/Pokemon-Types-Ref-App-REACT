import React, { useEffect, useState } from "react";

const GoTopBtn = () => {
  const [showGoTop, setShowGoTop] = useState(false);

  const handleVisibleButton = () => {
    setShowGoTop(window.pageYOffset > 150);
  };

  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  }, []);

  return (
    <>
      <div onClick={handleScrollUp}>
        <button type={"button"} className={showGoTop ? "btn" : "hideBtn"}>
          <img
            src="https://www.svgrepo.com/show/155822/up-arrow-angle.svg"
            id="up-arrow"
            alt="up-arrow"
          />
        </button>
      </div>
    </>
  );
};
export default GoTopBtn;
