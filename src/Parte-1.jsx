import { useState } from "react";
import certo from "./assets/icone_certo.png"
import quase from "./assets/icone_quase.png"
import errado from "./assets/icone_erro.png"
import setinha from "./assets/Vector.png"
import styled from "styled-components";

export default function Parte1(props) {

    const { id, pergue, contador, setcontador, resposta } = props;
    const [visivel, setvizivel] = useState('parte1');
    const [cores, setcores] = useState('#333333');




    const virarcarta = ( cor) => {
        setvizivel('parte1');
        setcores(cor);
        let cont = contador + 1;
        setcontador(cont);
    };


    return (
        <>
            {visivel === 'parte1' && (
                <Parte_1 cor={cores} data-test="flashcard" >
                    <p data-test="flashcard-text">Pergunta {id}</p>
                    {cores === '#333333' && (
                        <img onClick={() => setvizivel('parte2')} src={setinha} alt="" data-test="play-btn" />
                    )}
                    {cores === '#FF3030' && (
                        < img src={errado} alt="" data-test="no-icon" />
                    )}
                     {cores === ' #FF922E' && (
                        < img src={quase} alt="" data-test="partial-icon" />
                    )}
                    {cores === '#2FBE34' && (
                        < img src={certo} alt="" data-test="zap-icon" />
                    )}
                    

                </Parte_1 >
            )}

            {visivel === 'parte2' && (
                <Parte_2 data-test="flashcard">
                    <p data-test="flashcard-text">{pergue}</p>
                    <img onClick={() => setvizivel('parte3')} src="./src/assets/Vecto.png" alt="" data-test="turn-btn" />
                </Parte_2>
            )}
            {visivel === 'parte3' && (
                <Parte_3 data-test="flashcard">
                    <Resp data-test="flashcard-text">{resposta}</Resp>
                    <Opcoes>
                        < Botao corbotao={'#FF3030'} onClick={() => virarcarta('#FF3030')} data-test="no-btn" >
                            <p>Não Lembrei</p>
                        </Botao>
                        <Botao corbotao={'#FF922E'} onClick={() => virarcarta(' #FF922E')} data-test="partial-btn">
                            <p>Quase não lembrei</p>
                        </Botao>
                        <Botao corbotao={'#2FBE34'} onClick={() => virarcarta('#2FBE34')} data-test="zap-btn">
                            <p>Zap!</p>
                        </Botao>
                    </Opcoes>
                </Parte_3>
            )}
        </>

    )
}

const Parte_1 = styled.div`
    width: 300px;
    height: 65px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;

p{
    width: 87px;
    height: 19px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${({ cor }) => cor};
    text-decoration: ${({ cor }) => cor !== '#333333' && 'line-through'};
    text-align: center;
    margin-left: 15px;
}

img{
    width: 20px;
    height: 23px;
    margin-right: 15px;
    cursor:${({ cor }) => cor === '#333333' && 'pointer'};
    
}

`

const Botao = styled.div`
    width: 85px;
    height: 37px;
    background-color:${({ corbotao }) => corbotao};
    border-radius: 5px;
    margin: 0px ;
    display: flex;
    align-items: center;
    justify-content: center;

    p{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF; 
    text-align: center; 

    }

`
const Parte_2 = styled.div`
    width: 300px;
    min-height: 150px;
    background-color: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    justify-content: flex-end;
    position: relative;
    margin-bottom: 25px;
    
p{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    padding-top: 15px;
    padding-left: 15px;
    padding-right: 15px;
}

img{
    width: 30px;
    height: 20px;
    position: absolute;
    bottom: 5px;
    right: 6px;
    cursor: pointer;
}
`
const Parte_3 = styled.div`
    width: 300px;
    min-height: 150px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    padding: 10px 15px;

    div{
    height: 47px;
    display: flex;
    margin-top: 10px;
    gap: 10px;
    }

`
const Resp = styled.p`
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
 `

const Opcoes = styled.div`
    height: 47px;
    display: flex;
    margin-top: 10px;
    gap: 10px;
    margin-bottom: 10px;
    
 `