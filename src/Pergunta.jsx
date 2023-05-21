
import Parte1 from "./Parte-1";

export default function Pergunta(props) {

    const { questo, contador, setcontador } = props;

    // preciso de um estado que adicione ou retire a vis escondido somente da linha que for clicado
   

    return (

        <div className="pergunta">
            <>{questo.map((questo) => (
                <Parte1
                    key={questo.id}
                    id={questo.id}
                    pergue={questo.pergue}
                    resposta={questo.resposta}
                    contador={contador}
                    setcontador={setcontador} 
                />
            ))}</>

        </div>

    );

};

