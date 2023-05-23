import React from "react";
import ".//data";
import reviews from ".//data";
import Testity from "./component/Testity";
const App = () => {
  return (
    <div className="flex flex-col w-[100vw]h-[100vh] items-center justify-center bg-green">
      <div className="text-center">
        <div className="text-4xl font-bold">Our Testimonials</div>
      </div>

      <div className="bg-violet-400 h-[4px] w-[100px] mt-1/5"></div>
      <div>
        <Testity reviews={reviews} />
      </div>
    </div>
  );
};

export default App;
