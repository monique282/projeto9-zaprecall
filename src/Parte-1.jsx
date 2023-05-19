
export default function Parte1(props) {


    return (

        <div class="parte-1 escondida">
            <p>Pergunta {props.id}</p>
            <img class="cursor" onClick="ver()" src="./src/assets/Vector.png" alt="" />
        </div>

    )
}