import React from 'react';
import { loader } from "../utils/images";

const Loader = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center">
        <img src={loader} alt="Loading..." className="w-20" />
      </div>
    </div>
  );
};

export default Loader;
