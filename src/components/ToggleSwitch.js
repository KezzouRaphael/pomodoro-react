import React, { useState } from "react";

function ToggleSwitch({showModal,setShowModal}) {
  const onToggle = () => setShowModal(!showModal);
  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={showModal} onChange={onToggle} />
      <span className="switch" />
    </label>
  );
}
export default ToggleSwitch;