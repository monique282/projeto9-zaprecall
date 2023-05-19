export default function App() {

    return (

        <>
            <div class="slogan">
                <img class="raio" src="./src/assets/image 2.png" alt="" />
                <H1 class="nome">ZapRecall</H1>
            </div>
            <div class="perguntas">
                <div class="pergunta">
                    <div class="parte-1 escondida">
                        <p>Pergunta 1</p>
                        <img class="cursor" onclick="ver()" src="./src/assets/Vector.png" alt="" />
                    </div>
                    <div class="parte-2 escondida">
                        <p>O que é JSX?</p>
                        <img class="cursor" onclick="virar()" src="./src/assets/Vecto.png" alt="" />
                    </div>
                    <div class="parte-3 ">
                        <p class="resp"> Uma extensão de linguagem do JavaScript</p>
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
                </div>
                <div class="pergunta">
                    <div class="parte-1 escondida">
                        <p>Pergunta 2</p>
                        <img class="cursor" onclick="ver()" src="./src/assets/Vector.png" alt="" />
                    </div>
                    <div class="parte-2 escondida">
                        <p>O React é __ </p>
                        <img class="cursor" onclick="virar()" src="./src/assets/Vecto.png" alt="" />
                    </div>
                    <div class="parte-3 ">
                        <p class="resp">uma biblioteca JavaScript para construção de interfaces</p>
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

                </div>
                <div class="pergunta">
                    <div class="parte-1 escondida">
                        <p>Pergunta 3</p>
                        <img class="cursor" onclick="ver()" src="./src/assets/Vector.png" alt="" />
                    </div>
                    <div class="parte-2 escondida">
                        <p>Componentes devem iniciar com __</p>
                        <img class="cursor" onclick="virar()" src="./src/assets/Vecto.png" alt="" />
                    </div>
                    <div class="parte-3 ">
                        <p class="resp">letra maiúscula</p>
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

                </div>
                <div class="pergunta">
                    <div class="parte-1 escondida">
                        <p>Pergunta 4</p>
                        <img class="cursor" onclick="ver()" src="./src/assets/Vector.png" alt="" />
                    </div>
                    <div class="parte-2 escondida">
                        <p>Podemos colocar __ dentro do JSX</p>
                        <img class="cursor" onclick="virar()" src="./src/assets/Vecto.png" alt="" />
                    </div>
                    <div class="parte-3 ">
                        <p class="resp">expresões</p>
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

                </div>
            </div>
            <div class="concluidos">
                <p>1/4 Concluidos</p>
            </div>
        </>
    )
}