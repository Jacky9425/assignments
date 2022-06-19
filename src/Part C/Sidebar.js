import React from "react";
import { CloseOutlined } from "@ant-design/icons";

function Sidebar({ visible, onClose }) {
  const menu_array = [1, 2, 3];

  return (
    <div
      style={{
        ...styles.sidebarContainer,
        ...{
          left: visible ? 0 : "-100%",
          width: window.innerWidth,
          height: window.innerHeight,
        },
      }}
    >
      <div style={styles.sidebarMenu}>
        <a style={{ marginBottom: 25 }} onClick={onClose}>
          <CloseOutlined style={styles.closeButton} />
        </a>

        {menu_array.map((item, index) => {
          return (
            <a key={index} style={styles.menuItem}>
              Menu Item {item}
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;

const styles = {
  sidebarContainer: {
    display: "flex",
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.4)",
    zIndex: 2,
  },
  sidebarMenu: {
    width: "20%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#0941b3",
    paddingLeft: 30,
    paddingTop: 30,
  },
  closeButton: {
    fontSize: 25,
    color: "white",
  },
  menuItem: {
    marginBottom: 15,
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
};
