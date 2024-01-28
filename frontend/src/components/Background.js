// Background.js

import React from "react";

const Background = () => {
  return (
    <div className="bg-cover bg-center fixed inset-0 z-[-1]">
      {/* Add your GIF file as the background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("/path/to/your/background.gif")`,
        }}
      />
    </div>
  );
};

export default Background;
