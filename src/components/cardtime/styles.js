import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7); /* Cor de fundo escura com transparência */
  z-index: 998; /* Abaixo do card, mas acima do conteúdo padrão */
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;

export const CardContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  z-index: 999; /* Acima do overlay */
  max-width: 80%;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
  border-radius: 1rem;
`