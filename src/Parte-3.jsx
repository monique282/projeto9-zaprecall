export default function Parte3(props) {
    return (

        <div class="parte-3 escondida">
            <p class="resp"> {props.resposta}</p>
            <div class="opcoes">
                <div class="nao-lembro">
                    <p>Não Lembrei</p>
                </div>
                <div class="quase-nao-lembrei">
                    <p>Quase não lembrei</p>
                </div>
                <div class="zap">
                    <p>Zap!</p>
                </div>
            </div>
        </div>

    )
}