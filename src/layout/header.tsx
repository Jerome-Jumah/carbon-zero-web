import React from "react";
import { Link } from "react-router-dom";
import { Mail, X } from "lucide-react";
function HeaderNav() {
  return (
    <nav className="flex flex-row h-32 items-center lg:mb-6 font-quicksand">
      <Link to="/">
        <div className="flex flex-row text-xl items-center lg:text-5xl">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/carbonzero-53d68.appspot.com/o/carbon-neutral.png?alt=media&token=4a879b9c-5aab-46b2-bd99-307659ab6e48"
            alt="carbon neutral logo"
            className="w-12 lg:w-36"
          />
          <h1 className="ml-2 lg:ml-4">
            Carbon<span className="text-primary">Zero</span>
          </h1>
        </div>
      </Link>
      <div className="flex-grow"></div> {/* Spacer */}
      <div className="flex flex-row justify-around">
        <Mail
          cursor="pointer"
          onClick={() => {
            window.location.href = "mailto:jeromejuma25@gmail.com";
          }}
        />
        <X
          cursor="pointer"
          className="ml-3 lg:ml-1 mr-3"
          onClick={() => {
            window.location.href = "https://twitter.com/juma_jerome";
          }}
        />
      </div>
    </nav>
  );
}

export { HeaderNav };
