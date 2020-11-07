import React from "react";
import { Button, Popover } from "antd";
import Content from "./Content";

export default function Breakdown() {
  return (
    <Popover
      placement="topRight"
      trigger="hover"
      title="Marble"
      content={Content}
    >
      <Button type="primary" shape="round">
        Marble
      </Button>
    </Popover>
  );
}
