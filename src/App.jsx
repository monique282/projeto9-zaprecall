import styled from "styled-components";
import Pergunta from "./Pergunta"

export default function App() {

    const questoes = [
        {id : 1, pergue: "O que é JSX?",resposta: " Uma extensão de linguagem do JavaScript"},
        {id : 2, pergue: " O React é __",resposta: " uma biblioteca JavaScript para construção de interfaces"},
        {id : 3, pergue: "Componentes devem iniciar com __ ",resposta: " letra maiúscula"},
        {id : 4, pergue: "Podemos colocar __ dentro do JSX ",resposta: " expressões"},
        {id : 5, pergue: "O ReactDOM nos ajuda __ ",resposta: " interagindo com a DOM para colocar componentes React na mesma"},
        {id : 6, pergue: "Usamos o npm para __ ",resposta: " gerenciar os pacotes necessários e suas dependências"},
        {id : 7, pergue: " Usamos props para __ ",resposta: " passar diferentes informações para componentes "},
        {id : 8, pergue: "Usamos estado (state) para __ ",resposta: " dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"},
    
    ]

    return (

        <>
            <Slogan>
                <img className="raio" src="./src/assets/image 2.png" alt="" />
                <h1 className="nome">ZapRecall</h1>
            </Slogan>
            <div className="perguntas">
                <Pergunta questoes = {questoes} />
            </div>
            <Concluidos>
                <p>1/4 Concluidos</p>
            </Concluidos>
        </>
    )
}

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

   }
`;