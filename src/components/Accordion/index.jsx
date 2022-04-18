import React, { useState } from "react";

function Accordion(props) {
  const { heading, content } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [tab, setTab] = useState("detail");
  const HeadingWrapper = heading;
  const ContentWrapper = content;

  const handleTab = (tabName) => {
    console.log(tabName);
    setTab(tabName);
  };
  return (
    <div className="mb-3 bg-white rounded-xl border-2 p-5">
      <div onClick={() => setIsOpen(!isOpen)}>
        <HeadingWrapper tab={tab} setTabAcc={handleTab} />
      </div>
      <div className={isOpen ? "block" : "hidden"}>
        <ContentWrapper tab={tab} />
      </div>
    </div>
  );
}
export default Accordion;
