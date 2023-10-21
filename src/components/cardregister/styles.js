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

.top-card {
    display: flex;
    justify-content: end;
}

  .btn-close {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .btn-close img {
    width: 1rem;
  }

  h1 {
    color: #6E0AD6;
  }

  .section {
    margin-top: 1rem;
  }

  .section, .name, .price {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .name p, .price p {
    color: #E37800;
  }

  .name input, .price input {
    border-radius: .4rem;
    border: .01rem solid black;
    padding: .1rem .3rem;
    font-family: "Poppins";
  }

  .advert-image {
    margin-top: 1rem;
    display: flex;
  }

  .buttons {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
  }

  .buttons button {
    border-radius: .5rem;
    border: .01rem solid black;
    padding: .2rem .5rem;
    font-family: "Poppins";
    cursor: pointer;
    transition: all .3s;
  }

  .buttons button:hover {
    background-color: #6E0AD6;
    color: white;
  }

  @media screen and (max-width: 800px) {

    h1 {
      font-size: 1.4rem;
    }

  .section {
    display: block;
  }

  .section, .name, .price {
    gap: .5rem;
  }

  .price {
    gap: .6rem;
  }

  p {
    font-size: .9rem;
    margin-bottom: .5rem;
  }

  .name input, .price input {
    width: 8rem;
    margin-bottom: .5rem;
  }

  .advert-image input {
    font-size: .7rem;
  }

  .buttons {
    gap: .5rem;
  }

  .buttons button {
    font-size: .7rem;
  }
  
  }
`;