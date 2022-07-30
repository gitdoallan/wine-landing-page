import React from 'react';
import '../Footer.css';
import  logoWine from '../images/wineLogo.png';

function Footer() {
  return (
    <div  className='Footer'>
      <h4 className='title'>Seja sócio! Confira os benefícios: </h4>
      <div className='divCards'>
        <div className='card1'>
          15% OFF em todas as compras na Wine
        </div>
        <div className='card2'>
          3x mais cashback pelo WineUP
        </div>
        <div className='card3'>
          Taxa de entrega diferenciada
        </div>
        <div className='card4'>
          Brindes e cupons no Indique Amigos
        </div>
      </div>
      <div className='logoWine'>
        <div>
          <img
            src={ logoWine }
            alt='logoWine'
          />
        </div>
        <div className='infosWine'>
          <h5>W2W E-Commerce de Vinhos S.A CNPJ: 09.813.204/0002-05</h5>
          <h5>Rua Comendador Alcides Simão Helou, 1478 Serra - ES - CEP 29168-090</h5>
        </div>
      </div>
    </div>
  );
}

export default Footer;
