import "./App.scss";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";
import Box4 from "./components/Box4";
import Box5 from "./components/Box5";

const Content = styled.div`
  width: ${(props) => props.theme.pageSize};
`;

function App() {
  const [small, atualizarSmall] = useState(false);
  const [itemAtivo, atualizarItemAtivo] = useState("#");
  const boxes = document.querySelectorAll(".box");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      atualizarHeader();
      detectarItemAtivo();
    });
  }, [boxes]);

  const atualizarHeader = () => {
    if (window.scrollY >= 65 && small !== true) {
      atualizarSmall(true);
    } else if (window.scrollY < 35 && small === false) {
      atualizarSmall(false);
    }
  };

  const detectarItemAtivo = () => {
    boxes.forEach((box) => {
      if (box.getAttribute("id") === "box1" && window.scrollY <= 230) {
        atualizarItemAtivo("#");
      } else if (
        box.getAttribute("id") === "box2" &&
        window.scrollY > 230 &&
        window.scrollY <= 850
      ) {
        atualizarItemAtivo("#box2");
      } else if (
        box.getAttribute("id") === "box3" &&
        window.scrollY > 850 &&
        window.scrollY <= 1300
      ) {
        atualizarItemAtivo("#box3");
      } else if (
        box.getAttribute("id") === "box4" &&
        window.scrollY > 1300 &&
        window.scrollY <= 1500
      ) {
        atualizarItemAtivo("#box4");
      }
    });
  };

  return (
    <div id="page">
      <Header small={small} itemAtivo={itemAtivo} />
      <Content>
        <Box1 />
        <Box2 />
        <Box3 />
        <Box4 />
        <Box5 />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
