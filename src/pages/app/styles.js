import styled from "styled-components";

export const Container = styled.div`

    .toggle-container {
      display: inline-block;
      position: relative;
    }

    .toggle-container input[type="checkbox"] {
      display: none;
    }

    .toggle-slider, .toggle-slider-mobile {
      width: 45px;
      height: 22px;
      background-color: #ccc;
      border-radius: 20px;
      position: relative;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .toggle-slider:before, .toggle-slider-mobile:before {
        content: "";
        width: 18px;
        height: 18px;
        background-image: url('./lua.png');
        background-size: cover;
        background-repeat: no-repeat;      
        border-radius: 50%;
        position: absolute;
        left: 4px;
        top: 2px;
        transition: transform 0.3s;
    }

    .toggle-container input[type="checkbox"]:checked + .toggle-slider,
    .toggle-container input[type="checkbox"]:checked + .toggle-slider-mobile {
      background-color: #525252;
    }

    .toggle-container input[type="checkbox"]:checked + .toggle-slider:before,
    .toggle-container input[type="checkbox"]:checked + .toggle-slider-mobile:before {
      transform: translateX(20px);
    }

`;

export const ImgSetaCima = styled.img`

    position: fixed;
    right: 0;
    z-index: 2;
    margin-top: 5rem;
    margin-right: 3.3rem;
    animation: positionSetaCima .7s linear infinite;

    @media screen and (max-width: 800px) {

        display: none;

    }

`;

export const ImgSetaDireita = styled.img`

    width: 3rem;
    position: fixed;
    right: 0;
    z-index: 2;
    margin-top: 20.5rem;
    margin-right: 3.3rem;
    animation: positionSetaDireita .7s linear infinite;

    @media screen and (max-width: 800px) {

        width: 1rem;
        margin-top: 21.3rem;

    }

`;

export const Link = styled.a`

    text-decoration: none;
    color: black;

`;

export const Header = styled.header`
    
    padding: 2.5rem 3.5rem 1.5rem;
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    background-color: white;
    z-index: 1;
    transition: all .3s;

    @media screen and (max-width: 800px) {

        padding: 1.5rem 1rem;

    }

`;

export const ImgLogo = styled.img`

    width: 5.5rem;
    cursor: pointer;

    @media screen and (max-width: 800px) {

        width: 4rem;

    }

`;

export const Nav = styled.nav`

    @media screen and (max-width: 800px) {

        display: none;

    }

`;

export const Menu = styled.ul`

    list-style: none;
    display: flex;
    align-items: center;
    gap: 2.5rem;

`;

export const TopMenuMobile = styled.div`

    width: 100%;
    display: flex;
    justify-content: right;
    padding: 0 2rem;

`;

export const BtnCloseMenu = styled.img`

    width: 1rem;
    cursor: pointer;

`;

export const MenuMobile = styled.div`

    display: none;
    width: 100%;
    position: fixed;
    text-align: center;
    background-color: white;
    z-index: 5;
    transition: all .3s;

    @media screen and (max-width: 800px) {


    }

`;

export const UlMenuMobile = styled.ul`

    list-style: none;

`;

export const MenuItem = styled.li`

    font-size: 1.1rem;
    cursor: pointer;
    transition: all .3s;

    &:hover {
        color: #6E0AD6;
    }

    @media screen and (max-width: 800px) {

        margin-top: .3rem;
        font-size: 1rem;

    }

`;

export const DivMenuMobile = styled.div`

    display: none;

    @media screen and (max-width: 800px) {

        display: flex;
        
    }

`;

export const BtnMenuMobile = styled.img`

    width: 2.5rem;
    cursor: pointer;



`;

export const Main = styled.main`
    padding-top: 14rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;

    @media screen and (max-width: 800px) {

        padding-top: 10rem;
        display: block;

    }

`;

export const LeftScreenMain = styled.div`

    @media screen and (max-width: 800px) {

        text-align: center;

    }

`;

export const RightScreenMain = styled.div`

    width: 20rem;
    position: relative;

    @media screen and (max-width: 800px) {

        width: 100%;

    }

`;

export const Title = styled.h2`

    text-transform: uppercase;
    color: #6E0AD6;
    font-size: 4rem;

    @media screen and (max-width: 800px) {

        font-size: 3rem;
        text-align: center;

    }

`;

export const SubTitle = styled.h4`

    margin-top: -1.5rem;
    color: #F28000;
    font-size: 1.7rem;

    @media screen and (max-width: 800px) {

        font-size: 1.5rem;
        text-align: center;

    }

`;

export const TextMain = styled.p`

    width: 25rem;
    text-align: justify;

    @media screen and (max-width: 800px) {

        margin: 0 auto;
        font-size: 1rem;
        width: 93%;
        text-align: center;

    }

`;

export const ButtonMain = styled.button`

    margin-top: 1rem;
    background-color: #F28000;
    border: .01rem solid black;
    font-family: "Poppins";
    color: white;
    padding: .5rem 2rem;
    border-radius: .5rem;
    cursor: pointer;
    transition: all .3s;

    &:hover {
        background-color: #E37800;
    }

    @media screen and (max-width: 800px) {


    }

`;


export const ImageMain = styled.img`

    top: 0;
    margin-top: -11rem;
    position: absolute;
    width: 23rem;
    animation: position 3s linear infinite;

    @media screen and (max-width: 800px) {

        width: 15rem;
        margin-top: 1.5rem;
        text-align: center;
        top: 50%;
        left: 25%;
        animation: positionMobile 3s linear infinite;

    }

`;

export const DivUx = styled.div`
   
   margin-top: 18rem;
   padding: 2.5rem 10rem 5rem;

   @media screen and (max-width: 800px) {

    margin-top: 23rem;
    padding: 2.5rem 1rem;

   }

`;

export const TopContentUx = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 800px) {

        display: block;
        text-align: center;

    }

`;

export const TextContentUx = styled.div`



`;

export const ImagesContentUx = styled.div`

    display: flex;
    gap: 2rem;

`;

export const TitleUxDesign = styled.h2`

    font-size: 4rem;
    letter-spacing: .2rem;
    color: #F28000;

    @media screen and (max-width: 800px) {

        font-size: 2rem;
        letter-spacing: .1rem;

    }

`;

export const TextUx = styled.p`

    width: 28.6rem;
    text-align: justify;

    @media screen and (max-width: 800px) {

        margin: 0 auto 1rem;
        width: 20rem;
        font-size: .9rem;
        text-align: justify;

    }

`;

export const ImageUx1 = styled.img`

    width: 20rem;
    border-radius: 1rem;

    @media screen and (max-width: 800px) {

        margin: 0 auto;
        width: 10rem;
        text-align: center;

    }

`;

export const BottomContentUx = styled.div`

    margin-top: 5rem;

    @media screen and (max-width: 800px) {

        margin-top: 2rem;

    }

`;

export const CardsUx = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    @media screen and (max-width: 800px) {

        display: block;

    }

`;

export const TextCard = styled.p`

    width: 100%;
    text-align: center;
    border: .01rem solid black;
    padding: 1rem;
    border-radius: 1rem;
    transition: all .3s;

    &:hover {
        transform: translateY(-1rem);
        box-shadow: #6E0AD6 2px 2px, #7918DE 7px 7px, #882CE8 10px 10px, #953CF1 10px 10px, #A752FF 10px 10px;    
    }

    @media screen and (max-width: 800px) {

        font-size: .8rem;
        margin-bottom: 1rem;

        &:hover {
            box-shadow: #6E0AD6 2px 2px, #7918DE 7px 7px, #882CE8 10px 10px, #953CF1 10px 10px, #A752FF 10px 10px; 
        }

    }

`;

export const SpanCard = styled.span`

    color: #6E0AD6;

`;

export const DivAccessibility = styled.div`

    margin-top: 5rem;
    padding: 2.5rem 10rem 5rem;

    @media screen and (max-width: 800px) {

        padding: 2.5rem 1rem;

    }

`;

export const TopContentAccessibility = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;

    @media screen and (max-width: 800px) {
        display: block;
    }

`;

export const VideoContentAccessibility = styled.div`

    display: flex;
    align-items: center;

`;

export const TextContentAccessibility = styled.div`


`;

export const ImgAccessibility = styled.img`

    width: 80%;
    border-radius: 1rem 5rem;

    @media screen and (max-width: 800px) {

        margin: 0 auto 1rem;
        width: 15rem;

    }

`;

export const TitleAccessibility = styled.h2`

    font-size: 4rem;
    letter-spacing: .2rem;
    color: #F28000;

    @media screen and (max-width: 800px) {

        margin: 0 auto;
        font-size: 2rem;
        letter-spacing: .1rem;
        text-align: center;

    }

`;

export const TextAccessibility = styled.p`

    width: 34.5rem;
    text-align: justify;

    @media screen and (max-width: 800px) {

        margin: 0 auto;
        font-size: .8rem;
        width: 20rem;

    }

`;

export const BottomContentAccessibility = styled.div`

    margin-top: 3rem;
    display: flex;
    align-items: center;
    gap: 2rem;

    @media screen and (max-width: 800px) {

        display: block;

    }

`;

export const TipCard = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    gap: 1rem;
    border: .01rem solid black;
    width: 25rem;
    border-radius: 1rem;
    cursor: pointer;

    @media screen and (max-width: 800px) {

        margin: 0 auto 1rem;
        width: 23rem;

    }

`;

export const ImgTipCard = styled.img`

    width: 4rem;
    border: .01rem solid black;
    border-radius: 50%;
    padding: .2rem;
    transition: all .3s;

    &:hover {
        transform: rotate(360deg);
    }

    @media screen and (max-width: 800px) {

        width: 2rem;

    }

`;

export const TipContent = styled.div`

`;

export const TitleTip = styled.h4`

    color: #6E0AD6;

    @media screen and (max-width: 800px) {

        font-size: .9rem;

    }

`;

export const TextTip = styled.p`

    width: 18rem;
    font-size: .9rem;
    text-align: justify;

    @media screen and (max-width: 800px) {

        font-size: .7rem;
    
    }

`;

export const TextTipNoMobile = styled.p`

    width: 18rem;
    font-size: .9rem;
    text-align: justify;

    @media screen and (max-width: 800px) {

        font-size: .7rem;
        display: none;
    
    }

`;

export const TextTipMobile = styled.div`

    width: 18rem;
    font-size: .9rem;
    text-align: justify;
    display: none;

    @media screen and (max-width: 800px) {

        font-size: .7rem;
        display: block;

    }

`;

export const DivChatBot = styled.div`

    width: 100%;
    margin-top: 5rem;
    padding: 2.5rem 10rem 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 800px) {

        display: block;
        padding: 2.5rem 1rem;

    }
`;

export const LeftContentChatBot = styled.div`



`;

export const TextContentChatBot = styled.div`

    @media screen and (max-width: 800px) {
    
        text-align: center;

    }

`;

export const TitleChatBot = styled.h2`

    font-size: 4rem;
    letter-spacing: .2rem;
    color: #F28000;

    @media screen and (max-width: 800px) {

        font-size: 2rem;
        letter-spacing: .1rem;

    }

`;

export const TextChatBot = styled.p`

    width: 35rem;
    text-align: justify;

    @media screen and (max-width: 800px) {

        margin: 0 auto;
        width: 20rem;
        font-size: .9rem;

    }

`;

export const RightContentChatBot = styled.div`

    width: 30rem;

    .tip3 {
        margin-top: 2rem;
        width: 30rem;
        justify-content: start;
        gap: .5rem;

        p {
            width: 100%;
        }
    }

    @media screen and (max-width: 800px) {

        margin-top: 2rem;
        text-align: center;

        .tip3 {
            margin-top: 1rem;
            gap: .5rem;
            width: 25rem;

            P {
                font-size: .8rem;
            }

        }

    }

`;

export const ImgChatBot = styled.img`

    width: 23.2rem;
    border-radius: 1rem;

    @media screen and (max-width: 800px) {

        width: 15rem;
    
    }

`;

export const Curiosity = styled.p`

    margin-top: 2rem;
    width: 35rem;
    text-align: center;
    border: .01rem solid black;
    padding: 1rem;
    border-radius: 1rem;
    transition: all .3s;

    &:hover {
        transform: translateX(1rem);
        box-shadow: #6E0AD6 5px 5px, #7918DE 10px 10px, #882CE8 15px 15px, #953CF1 20px 20px, #A752FF 25px 25px;    
    }

    @media screen and (max-width: 800px) {

        width: 100%;
        font-size: .9rem;

        &:hover {
            box-shadow: #6E0AD6 2px 2px, #7918DE 7px 7px, #882CE8 10px 10px, #953CF1 10px 10px, #A752FF 10px 10px; 
        }

    }

`;

export const Alert = styled.div`

    margin-top: 1.2rem;
    width: 30rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    gap: 1rem;
    border: .01rem solid black;
    border-radius: 1rem;

    @media screen and (max-width: 800px) {

        margin: 1rem auto 0;
        width: 25rem;
        text-align: center;
        gap: .5rem;

    }

`;

export const ImgAlert = styled.img`

    width: 4rem;
    border: .01rem solid black;
    border-radius: 50%;
    padding: .2rem;
    transition: all .3s;

    &:hover {
        transform: rotate(360deg);
    }

    @media screen and (max-width: 800px) {

        width: 2rem;

    }

`;

export const ContentAlert = styled.div`



`;

export const TextAlert = styled.p`

    font-size: .9rem;
    text-align: justify;

    @media screen and (max-width: 800px) {

        font-size: .8rem;

    }

`;

export const DivInactivity = styled.div`

    width: 100%;
    margin-top: 5rem;
    padding: 2.5rem 10rem 5rem;

    @media screen and (max-width: 800px) {

        padding: 2.5rem 1rem;

    }

`;

export const TopContentInactivity = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 800px) {

        display: block;

    }

`;

export const TextContentInactivity = styled.div`



`;

export const ImageInactivity = styled.div`

    display: flex;
    align-items: center;
    gap: 2rem;


`;

export const ImgInactivity = styled.img`

    width: 20rem;
    height: 12rem;
    border-radius: 1rem;

    @media screen and (max-width: 800px) {

        width: 15rem;
        height: 7rem;

    }

`;

export const TitleInactivity = styled.h2`

    font-size: 4rem;
    letter-spacing: .2rem;
    color: #F28000;

    @media screen and (max-width: 800px) {

        margin-top: 2rem;
        font-size: 2rem;
        letter-spacing: .1rem;
        text-align: center;

    }

`;

export const TextInactivity = styled.p`

    width: 27.5rem;
    text-align: justify;

    @media screen and (max-width: 800px) {

        margin: 0 auto;
        width: 20rem;
        font-size: .9rem;

    }

`;

export const CardsInactivity = styled.div`

    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);    
    align-items: center;
    gap: 2rem;

    @media screen and (max-width: 800px) {

        padding: 0 3.5rem;
        grid-template-columns: repeat(2, 0fr);    
        gap: 1rem;

    }

`;

export const ProductCard = styled.div`

    padding: 1rem;
    border: .01rem solid black;
    width: 13rem;
    height: 13rem;
    border-radius: 1rem;
    text-align: center;
    transition: all .3s;
    

    img {

        width: 5rem;
        height: 5rem;

    }

    h4 {

        color: #6E0AD6;
        text-transform: uppercase;

    }

    p {

        color: #E37800;

    }

    .date {

        background-color: transparent;
        font-size: .8rem;
        color: black;
        transition: all .3s;

    }

    @media screen and (max-width: 800px) {

        width: 10rem;
        height: 10rem;
        padding: .5rem;

        img {
            width: 3rem;
            height: 3rem;
        }

        h4 {
            font-size: .9rem;
        }

        p {
            font-size: .8rem;
        }

        .date {
            font-size: .7rem;
        }

    }

`;

export const Message = styled.div`

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7); /* Cor de fundo escura com transparência */
        z-index: 998; /* Abaixo do card, mas acima do conteúdo padrão */
    }

    .card-time {
        margin: 0;
        position: fixed;
        padding: 1rem;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        border-radius: 1rem;
        
        h4 {
            margin-bottom: .5rem;
            font-size: .9rem;
            color: #6E0AD6;
            text-align: center;
            text-transform: uppercase;
        }

        p {
            color: black;
            width: 20rem;
            text-align: center;
        }

        span {
            color: #E37800;
            text-transform: uppercase;
        }

        .card-buttons {
            margin-top: .5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .5rem;
        }

        .card-buttons button {
            border-radius: .5rem;
            border: .01rem solid black;
            padding: .2rem .5rem;
            font-family: "Poppins";
            cursor: pointer;
            transition: all .3s;
        }

        .card-buttons button:hover {
            background-color: #6E0AD6;
            color: white;
        }
    }

    @media screen and (max-width: 800px) {

        .card-time {
        
            h4 {
                font-size: .7rem;
            }

            p {
                font-size: .8rem;
                width: 16rem;
            }

            .card-buttons button {
                font-size: .8rem;
            }

    }

    }

`;

export const CardAdd = styled.div`

    padding: 1rem;
    border: .01rem solid black;
    width: 13rem;
    height: 13rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem;
    cursor: pointer;
    transition: all .3s;

    @media screen and (max-width: 800px) {

        width: 10rem;
        height: 10rem;
        padding: .5rem;

    }

`;

export const ImageAdd = styled.img`

    width: 3rem;
    transition: all .3s;

    &:hover {
        transform: scale(1.1);
    }

    @media screen and (max-width: 800px) {

        width: 2rem;

    }

`;

export const Footer = styled.footer`

    margin: 0 10rem;
    text-align: center;

    @media screen and (max-width: 800px) {

        margin: 0 1rem;

    }

`;

export const TextFooter = styled.p`

    @media screen and (max-width: 800px) {

        font-size: .8rem;

    }   
`;