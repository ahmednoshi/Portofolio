import React, { useState, useEffect } from "react";

const Scroll = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScrollPosition = () => {
      setShowButton(window.scrollY > 500);
    };

    window.addEventListener("scroll", checkScrollPosition);
    return () => window.removeEventListener("scroll", checkScrollPosition);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-5 right-2 z-50 transition-opacity duration-500 ${
        showButton ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <a
        href="#"
        onClick={scrollToTop}
        className="group flex justify-center items-center"
      >
        <i className="fa-solid fa-up-long p-3 border-2 border-blue-600 rounded-full text-blue-600 text-base transform transition-all duration-300 ease-in-out group-hover:-translate-y-1 shadow-md "></i>
      </a>
    </div>
  );
};

export default Scroll;
