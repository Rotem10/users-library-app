import React from "react";
import hero from "../media/user-1275780.svg";

const Home = () => {
  return (
    <div className='carousel slide'>
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img src={hero} className='d-block w-100' alt='users-img' />
        </div>
      </div>
    </div>
  );
};

export default Home;
