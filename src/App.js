import './App.scss';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from "styled-components";
import Box1 from './components/Box1';
import Box2 from './components/Box2';
import Box3 from './components/Box3';
import Box4 from './components/Box4';

const Content = styled.div`
width: ${props => props.theme.pageSize};
`

function App() {
  const [small, atualizarSmall] = useState(false)
  const [itemAtivo, atualizarItemAtivo] = useState('#')
  const boxes = document.querySelectorAll('.box')

  useEffect(() => {
    window.addEventListener("scroll", () => {
      atualizarHeader()
      detectarItemAtivo()
    })
  }, [boxes]);

  const atualizarHeader = () => {
    if (window.scrollY >= 65 && small !== true) {
      atualizarSmall(true)
    } else if (window.scrollY < 35 && small === false) {
      atualizarSmall(false)
    };
  }

  const detectarItemAtivo = () => {
    boxes.forEach((box) => {
      //console.log(box.getAttribute("id"), window.scrollY)
      // if (window.scrollY >= box.offsetTop - box.clientHeight / 3) {
      //   atualizarItemAtivo(box.getAttribute("id"));
      // }
      if (box.getAttribute("id") === 'box1' && window.scrollY <= 230) {

        atualizarItemAtivo('#');
      }
      else if (box.getAttribute("id") === 'box2' && window.scrollY > 230 && window.scrollY <= 850) {

        atualizarItemAtivo('#box2');
      }
      else if (box.getAttribute("id") === 'box3' && window.scrollY > 850 && window.scrollY <= 1300) {

        atualizarItemAtivo('#box3');
      }
      else if (box.getAttribute("id") === 'box4' && window.scrollY > 1300 && window.scrollY <= 1500) {

        atualizarItemAtivo('#box4');
      }
    });
  }
  //ARRUMAR O SCROLL DOS iD QUE NAO EXISTEM MAIS
  return (
    <div id='page'>
      <Header small={small} itemAtivo={itemAtivo} />
      <Content>
        <Box1 />
        <Box2 />
        <Box3 />
        <Box4 />
        <div id='box5' className='box'>
          <div className='divEsq'>
            <img src='/Images/Imagem4.png' width='67' height='61' />
            <ul>
              <li><img src='/Images/LogoInstagram.png' width='17' height='18' /></li>
              <li><img src='/Images/LogoTwitter.png' width='18' height='18' /></li>
              <li><img src='/Images/LogoFacebook.png' width='13' height='18' /></li>
              <li><img src='/Images/LogoYoutube.png' width='18' height='18' /></li>
            </ul>
          </div>
          <div className='divDir'>
            <ul>
              <li>Who We're For</li>
              <li>Services Tour</li>
              <li>Services  Timing</li>
              <li>Experience</li>
              <li>Payments</li>
              <li>Expert Doctors</li>
              <li>PHD Doctors</li>
            </ul>
            <ul>
              <li>Services</li>
              <li>Services Tour</li>
              <li>Services Growth</li>
              <li>Services Experience</li>
              <li>Payments</li>
              <li>Billings</li>
            </ul>
            <ul>
              <li>Contact</li>
              <li>Newsroom</li>
              <li>Leaders</li>
              <li>Case Studies</li>
              <li>Help Center</li>
              <li>Blog</li>
            </ul>
            <ul>
              <li>About</li>
              <li>Website Property</li>
              <li>Doctors</li>
              <li>Payment Company</li>
              <li>Partners</li>
            </ul>
          </div>
        </div>
      </Content>
      <Footer />
    </div>

  );
}

export default App;
