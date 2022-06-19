import React, { Fragment, useState } from "react";
import { Input } from "antd";
import "antd/dist/antd.css";
import { MenuOutlined } from "@ant-design/icons";
import "./Question2.css";
import Sidebar from "./Sidebar";

function Question2(props) {
  const name_array = ["Doe", "Daryl"];

  const [searchText, setSearchText] = useState("");
  const [visible, setVisible] = useState(false);

  return (
    <div style={styles.container}>
      <div style={styles.navbar}>
        <a onClick={() => setVisible(true)}>
          <MenuOutlined style={{ color: "white", fontSize: 20 }} />
        </a>

        <Input
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={styles.input}
        />

        {/* only show suggestions if first letter matches */}
        {searchText.charAt(0).toLowerCase().includes("d") && (
          <div className="suggestionBox">
            {name_array.map((item, index) => (
              <Fragment key={index}>
                <a onClick={() => setSearchText(item)} style={styles.listItem}>
                  {item}
                </a>

                <div style={styles.divider} />
              </Fragment>
            ))}
          </div>
        )}
      </div>

      <Sidebar visible={visible} onClose={() => setVisible(false)} />
    </div>
  );
}

export default Question2;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  navbar: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    padding: 20,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#0941b3",
    justifyContent: "space-between",
  },
  input: {
    width: "20vw",
    backgroundColor: "rgba(205,205,205,0.3)",
    borderRadius: 10,
    borderColor: "transparent",
    color: "white",
  },
  divider: {
    height: 1,
    backgroundColor: "lightgray",
  },
  listItem: {
    color: "black",
    fontSize: 16,
    paddingTop: 6,
    paddingBottom: 8,
  },
};
