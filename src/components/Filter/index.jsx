import React from "react";

function Filter(props) {
  return (
    <div className="md:flex block justify-end mt-4 mb-1">
      <span className="uppercase m-1 p-1">filter</span>
      <select
        className="m-1 px-4 rounded-xl text-center"
        name="transit"
        id="transit"
      >
        <option value="transit">Transit</option>
        <option value="transit">123</option>
        <option value="transit">123123</option>
      </select>
      <select className="m-1 px-4 rounded-xl text-center" name="time" id="time">
        <option value="transit">Time</option>
        <option value="transit">123</option>
        <option value="transit">123123</option>
      </select>
      <select
        className="m-1 px-4 rounded-xl text-center"
        name="airline"
        id="airline"
      >
        <option value="transit">Airline</option>
        <option value="transit">1234584</option>
        <option value="transit">123123</option>
      </select>
      <select
        className="m-1 px-4 rounded-xl text-center"
        name="price"
        id="price"
      >
        <option value="transit">Low Price</option>
        <option value="transit">123</option>
        <option value="transit">123123</option>
      </select>
    </div>
  );
}

export default Filter;
