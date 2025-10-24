import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 ">
          <h1 className=""style={{fontSize:"22px", textAlign:'left', marginBottom:'10px'}}>
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" />
          <br />
          <a href="">Track account opening</a>&nbsp;&nbsp;
          <a href="">Track segment activation</a>&nbsp;&nbsp;
          <a href="">Intraday margins</a>&nbsp;&nbsp;
          <a href="">Kite user manual</a>&nbsp;&nbsp;
        </div>
        <div className="col-6 p-3" id='supportRight'>
          <h1 className=""style={{fontSize:"20.4px"}}>Featured</h1>
          <ol>
            <li>
              <a style={{fontSize:"16px"}} href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <br/>
            <li>
              <a style={{fontSize:"16px"}} href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;