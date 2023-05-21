
import Parte1 from "./Parte-1";

export default function Pergunta(props) {

    const { questoes, contador, setcontador } = props;

    // preciso de um estado que adicione ou retire a vis escondido somente da linha que for clicado
   

    return (

        <div className="pergunta">
            <>{questoes.map((questoes) => (
                <Parte1
                    key={questoes.id}
                    id={questoes.id}
                    pergue={questoes.pergue}
                    resposta={questoes.resposta}
                    contador={contador}
                    setcontador={setcontador} 

                />
            ))}</>

        </div>

    );

};

