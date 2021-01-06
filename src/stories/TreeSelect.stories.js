import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import YonTreeSelect from "../comonents/YonTreeSelect";

const TreeSelect = () => {
  const [selectVal, changeVal] = useState("");
  const treeData = [
    {
      title: "Node1",
      value: "0-0",
      children: [
        {
          title: "Child Node1",
          value: "0-0-1",
        },
        {
          title: "Child Node2",
          value: "0-0-2",
        },
      ],
    },
    {
      title: "Node2",
      value: "0-1",
    },
  ];
  return (
    <div style={{ width: 250 }}>
      <YonTreeSelect
        style={{ width: "100%" }}
        value={selectVal}
        dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
        treeData={treeData}
        placeholder="Please select"
        treeDefaultExpandAll
        onChange={(val) => {
          changeVal(val);
        }}
      />
    </div>
  );
};

storiesOf("Select", module).add("treeSelect", TreeSelect);
