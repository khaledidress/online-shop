import React from "react";

export default function EmptyCart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title text-capitalize">
          <img className="mx-auto d-block banner" alt="redirect" src="../img/asx.svg" />

          <h1>Your Cart Is  <span style={{ fontWeight: "bolder", borderBottom: "4px solid #ff9900", }}>Empty</span></h1>
        </div>
      </div>
    </div>
  );
}