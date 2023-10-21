import { React, useState } from 'react';
import { Overlay, CardContainer } from './styles';
import X from "../../images/x.png";
import axios from 'axios';

export const Card = ({ isVisible, toggleCard, setAdverts }) => {

  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [imagem, setImagem] = useState(null);



  async function handleRegisterAdverts() {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);

    formData.append("imagem", imagem);

    try {
      await axios.post("https://back-end-hacktudo.vercel.app/adverts", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

    } catch (error) {
      alert(error)
    }

    setAdverts(null);

  }

  return (
    <>
      <Overlay isVisible={isVisible} onClick={toggleCard} />
      <CardContainer isVisible={isVisible}>
        <div className='top-card'>
          <button onClick={toggleCard} className='btn-close'><img src={X}></img></button>
        </div>
        <h1>Cadastrar anúncio</h1>
        <div className='section'>
          <div className='name'>
            <p>Nome: </p>
            <input
              type='text'
              onChange={(event) => { setName(event.target.value) }}
            />
          </div>
          <div className='price'>
            <p>Preço: </p>
            <input
              type='text'
              onChange={(event) => { setPrice(event.target.value) }}
            />
          </div>
        </div>
        <div className='advert-image'>
          <input
            type='file'
            onChange={(event) => setImagem(event.target.files[0])}
          />
        </div>
        <div className='buttons'>
          <button onClick={() => { handleRegisterAdverts(); toggleCard();}}>Cadastrar</button>
          <button onClick={toggleCard}>Cancelar</button>
        </div>
      </CardContainer>
    </>
  );
};