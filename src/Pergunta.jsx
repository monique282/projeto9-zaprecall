import Parte1 from "./Parte-1";
import Parte2 from "./Parte-2";
import Parte3 from "./Parte-3";

export default function Pergunta(props) {

    const listaPergue = [];
    const listaResposta = [];
    const numeroDePerguntas = [];

    props.questoes.forEach(questoes => {
        listaPergue.push(<Parte2 key={questoes.pergue} pergue={questoes.pergue} />)
        listaResposta.push(<Parte3 key={questoes.resposta} resposta={questoes.resposta} />)
        numeroDePerguntas.push(<Parte1 key={questoes.id} id={questoes.id} />)
    });

    console.log(listaPergue);
    console.log(listaResposta);
    return (

        <div class="pergunta">
            <>{numeroDePerguntas}</>
            <>{listaPergue}</>
            <>{listaResposta} </>

        </div>

    )


}