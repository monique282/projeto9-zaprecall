import { useState } from "react";
import styled from "styled-components";
import Pergunta from "./Pergunta"
import questo from "./Questoes";


export default function App() {

    let [contador, setcontador] = useState(0);


    return (
        <>
            <Slogan>
                <Raio src="./src/assets/image 2.png" alt="" />
                <Nome>ZapRecall</Nome>
            </Slogan>
            <Perguntas>
                <Pergunta questo={questo} contador={contador} setcontador={setcontador} />
            </Perguntas>
            <Concluidos data-test="footer" >
                <p>{contador}/{questo.length} Concluidos</p>
            </Concluidos>
        </>
    )
}

const Raio = styled.img`
     width: 52px;
    height: 60px;
`

const Nome = styled.h1`
    width: 203x;
    height: 44px;
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
`

const Perguntas = styled.div`
    width: 300px;
    height: 100%;
    margin-top: 51px;
    margin-bottom: 70px;
`

const Slogan = styled.div`
    display: flex;
    width: 256px;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    margin-top: 42px;

`;

const Concluidos = styled.div`
     width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    right: 0;
   
   p{
    width: 145px;
    height: 22px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
}

`;