import './App.scss';
import { useEffect, useState } from 'react';

function App() {
  const [classeHeader, atualizarClasse] = useState()
  const [itenAtivo, atualizarItenAtivo] = useState('Home')
  const boxes = document.querySelectorAll('.box')

  useEffect(() => {
    window.addEventListener("scroll", () => {
      atualizarHeader()
      detectarItemAtivo()
    })
  }, [boxes]);

  console.log(itenAtivo)

  const atualizarHeader = () => {
    if (window.scrollY > 40 && classeHeader !== 'small') {
      atualizarClasse('small')
    } else {
      atualizarClasse()
    };
  }
  const MenuIten = ({ link, nome }) => {
    return <li className={itenAtivo === nome ? 'selecionado' : ''} onClick={() => atualizarItenAtivo(nome)}> <a href={link}>{nome}</a></li>
  }

  const detectarItemAtivo = () => {
    boxes.forEach((box) => {
      if (window.scrollY >= box.offsetTop - box.clientHeight / 3) {
        atualizarItenAtivo(box.getAttribute("id"));
      }
    });
  }


  return (
    <div id='page'>
      <header className={classeHeader}>
        <div className='conteudo'>
          <img src='/Images/Logo.png' width='143' height='52' />
          <nav>
            <ul>
              <MenuIten link='#' nome='Home' />
              <MenuIten link='#box2' nome='Why Hella?' />
              <MenuIten link='#box3' nome='Services' />
              <MenuIten link='#box4' nome='Contact' />
            </ul>
          </nav>
          <ul>
            <li>Login</li>
            <li><button>Sign up</button></li>
          </ul>
        </div>
      </header>
      <div className='conteudo'>
        <div id='box1' className='box'>
          <div className='divEsq'>
            <h1>Healing yourself is connected with healing others.</h1>
            <img src='/images/bgTitulo.png' width='230' height='82' />
            <h3 className='descricao'>The natural healing force within each one of us is the greatest force in getting well.</h3>
            <div>
              <button className='verde'>Get Appointment</button>
              <p>Why Hella?</p>
            </div>
          </div>
          <div className='divDir'> <img src='/images/Imagem1.png' width='510' height='380' /></div>
        </div>
        <div id='box2' className='box'>
          <p>Community health centers do a great deal with limited resources</p>
          <img src='/images/bgBox2.png' width='100' height='84' />
          <div className='DivBox2'>
            <div className='divEsq'>
              <img src='/images/Imagem2.png' width='373' height='324' />
            </div>
            <div className='divDir'>
              <h2 className='subtitulo'>The life so short, the craft so long to learn</h2>
              <h3 className='descricao'>The natural healing force within each one of us is the greatest force in getting well.</h3>
              <button className='verde'>Get Appointment</button>
            </div>
          </div>
        </div>
        <div id='box3' className='box'>
          <div className='divEsq'>
            <h2 className='subtitulo'>Each patient carries his own doctor inside him</h2>
            <h3 className='descricao'>The natural healing force within each one of us is the greatest force in getting well.</h3>
            <button className='verde'>Get Appointment</button>
          </div>
          <div className='divDir'> <img src='/images/Imagem3.png' width='511' height='332' /></div>
        </div>
        <div id='box4' className='box'>
          <h2 className='subtitulo'>In nothing do men more nearly approach</h2>
          <h3 className='descricao'>The natural healing force within each one of us is the greatest force in getting well.</h3>
          <button className='verde'>Go To Services</button>
        </div>
        <div id='box5' className='box'>
          <div className='divEsq'>
            <img src='/images/Imagem4.png' width='67' height='61' />
            <ul>
              <li><img src='/images/LogoInstagram.png' width='17' height='18' /></li>
              <li><img src='/images/LogoTwitter.png' width='18' height='18' /></li>
              <li><img src='/images/LogoFacebook.png' width='13' height='18' /></li>
              <li><img src='/images/LogoYoutube.png' width='18' height='18' /></li>
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
      </div>
      <footer>
        <div className='conteudo'>
          <div>
            <p>&copy; 2022 Rights Reserved, Taqwah Digital</p>
            <p>Privacy | Terms & Conditions | Privacy by Design | Secure by Design</p>
          </div>
        </div>
      </footer>
    </div>

  );
}

export default App;
