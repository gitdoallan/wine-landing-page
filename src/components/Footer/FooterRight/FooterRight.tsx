import { Container } from './styles';

export const FooterRight = () => (
  <Container>
    <div>
      <img
        src="https://img.wine.com.br/fenix/image/_big_bang/logos/logo_w.svg"
        alt="Logo Wine"
      />
      <div>
        <h3>W2W E-Commerce de Vinhos S.A</h3>
        <p>CNPJ: 09.813.204/0002-05</p>
      </div>
    </div>
    <address>
      <p>Rua Comendador Alcides Simão Helou, 1565</p>
      <p>Serra - ES - CEP 29168-090</p>
    </address>
    <p>
      SE BEBER, NÃO DIRIJA. APRECIE COM MODERAÇÃO. A VENDA DE BEBIDAS ALCOÓLICAS
      É PROIBIDA PARA MENORES DE 18 ANOS.
    </p>
  </Container>
);
