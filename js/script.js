/**
 * Created by Ramon on 05/10/2016.
 */

var imagens = [];

var titulos = ["O Mensageiro", "O Trevo", "O Navio", "A Casa", "A Árvore", "As nuvens", "A Serpente", "O Caixão", "O Ramalhete", "A foice", "O Chicote", "Os Pássaros", "A Criança", "A Raposa", "O Urso",
"A Estrela", "A Cegonha", "O Cão", "A Torre", "O Jardim", "A Montanha", "Os Caminhos", "O Rato", "O Coração", "A Aliança", "O Livro", "O Envelope", "O Cigano", "A Cigana", "Os Lírios", "O Sol", "A Lua",
"A Chave", "Os Peixes", "A Âncora", "A Cruz"];

var frasesAmor = ["Um grande amor está a caminho. Seus sonhos de um grande amor se tornarão realidade. Será mais rápido do que você imagina",
"Obstáculos colocados por terceiros, impedindo suas realizações amorosas. Tome cuidado.", "Mudanças positivas acontecerão no setor sentimental. Reanime-se e renove seus pensamentos e suas ações no seu relacionamento.",
"Equilibre-se. Mantenha-se equilibrado (a) para que seu relacionamento não perca a estabilidade. Se sua casa não possuir bons alicerces, ela cairá.", "O que se planta colhe. Se você plantou boas sementes, certamente colherá bons frutos. Relacionamento próspero.",
"Não se deixe perturbar por más influências, ou maus pensamentos. Em qualquer situação existem momentos de tempestades, que passarão. Não faça conclusões precipitadas, ou ações compulsivas. Tenha calma neste momento.",
"Fofocas, intrigas, venenos. Cuidado com traição. Fique alerta.", "Fim do relacionamento ou do sentimento. Acabou, ponto final.", "Período de alegria. Fique feliz, está tudo bem.",
"É preciso ceifar coisas antigas, para que o novo renasça. Período difícil, porém, mais tarde, renascerá algo novo e melhor.", "Atração sexual. Charme irresistível. Use seu magnetismo pessoal. Reserve um dia para você. Se dê um banho de loja, dê aquele trato no visual... Será infalível!",
"Namoro. Você está em estado de graça. Curta bem este momento de carinho e união.", "Amor puro, sem más intenções. Cuidado para não ser infantil no seu relacionamento.",
"Perigo! Existem pessoas à sua volta que estão se fazendo de amigas, mas que na verdade, fazem tudo para o “circo pegar fogo” e lhe prejudicar. Todo cuidado é pouco, porque essas pessoas são muito próximas e querem aquilo que você tem, ou quer ter. Fique de olho!",
"Olho grande, falsidade. Cuidado, porque há pessoas que estão rindo para você na sua frente, mas quando você vira as costas, elas riem de você. Não confie em ninguém.",
"Sua estrela está brilhando agora. Aproveite este momento porque tudo vai dar certo. É aconselhável agradecer ao Criador, por tudo que você já conseguiu até hoje. Faça uma oração de agradecimento e peça, também, para sempre ser protegido por Deus.",
"Novidades a caminho. Existe grande possibilidade de gravidez.", "Conte com um amigo(a) neste momento. O seu amor é fiel, não se preocupe.", "Há quanto tempo você não olha para dentro de si e conversa com seu Deus interior? Está na hora de meditar e orar.",
"Não adianta ficar cultivando feridas do passado. É hora de curar os mal-entendidos e “bola pra frente”! Como diz o ditado: “Quem cultiva vento colhe tempestade”.", "A justiça, enfim, chegará para você!",
"Vá em frente! As estradas estão abertas para você. Você está no caminho certo!", "Não se deprima. Você acha que coisas erradas só acontecem com você. Cuidado para não trilhar caminhos obscuros de fuga: bebida, drogas, vícios em geral. Reaja! Levante-se! Não deixe que o desânimo tome conta de você!",
"É Amor! Sim, vocês se amam de verdade! Curta esse momento maravilhoso! Mas, se caso você estiver sozinho (a), em breve, um grande amor aparecerá em sua vida!", "Relacionamento sério. Possibilidade de casamento. União estável.",
"Pense bem em suas atitudes. Dedique-se mais aos estudos ou ao trabalho. Pessoas onde você estuda ou trabalha, são muito importantes neste momento.", "Atenção! Você receberá uma notícia (telefonema, e-mail, etc.) muito importante. Fique alerta!",
"Uma pessoa do sexo masculino muito importante para você se faz presente em sua vida.", "Uma pessoa do sexo feminino muito importante para você se faz presente em sua vida.",
"É preciso mais calma e jogo de cintura. Lembre-se: ”Água mole em pedra dura, tanto bate até que fura”. Não conseguirá nada, se for afobada (o), mas, certamente, obterá sucesso, se for de mansinho, com persistência. Tenha paciência e sabedoria na hora de agir.",
"O sol está brilhando em sua vida. Seja feliz! Tudo dará certo!", "Todos os seus esforços terão seus merecimentos neste momento. Você terá o que merece! Não seja preguiçosa (o) e vá à busca do que quer. Acredite mais nas suas intuições e nos seus sonhos. Não seja instável e tenha certeza, finalmente, dos seus desejos.",
"A solução para todas as questões está em suas mãos. Você sabe o que deverá ser feito.", "“Nem tudo que reluz é ouro”. Os bens materiais são muito importantes, mas lembre-se que existem tesouros que valem muito mais que o dinheiro.",
"Estabilidade. Segurança. Fique mais segura(o).", "Apesar de todo o sofrimento, você será vitoriosa (o) no final. Fique certa (o) disto!"];

var frasesSaude = ["A solução está a caminho. Não se preocupe, será mais rápido que você imagina!", "Preocupações, frustrações e aborrecimentos, também, causam doenças, pois, sua imunidade se compromete com essas coisas. Cuide-se. Não se desequilibre com problemas alheios.",
"Saúde boa. Recuperação. Boas notícias.", "Procure o equilíbrio e o apoio de sua família neste momento em que você está debilitado. Uma visita a um templo religioso de sua preferência trará, também, paz a você.",
"Seu corpo está em boa forma e apto. Não se preocupe, pois está tudo bem.", "Seu corpo está desequilibrado, faça um “check-up” urgente. Tome cuidado com os hormônios. Não faça esforços desnecessários, nem cometa excessos. Tente ficar, ao máximo, de repouso até recuperar seu equilíbrio de novo.",
"Procure um médico, pois se faz necessário neste momento.", "Fim do sofrimento.", "Está tudo bem com você. Você se encontra em um ótimo momento.", "Cuide bem de sua saúde, para que você não tenha surpresas desagradáveis. Talvez seja necessário passar por uma intervenção cirúrgica.",
"A mente tem uma ligação grande e forte com o corpo; e o corpo, igualmente, com a mente. Vibre pensamentos bons e de grandeza, que o corpo agradece.", "Você precisa curtir mais a vida, sorrir se divertir, espairecer. O corpo esmorece com a tristeza e a desilusão. Divirta-se e seja saudável.",
"Seu corpo é jovem e saudável! Você está com a saúde de um (a) menino (a). Parabéns!", "Faça um “check-up”, pois, existe algo que está escondido, encubado. Investigue. Cuide-se!",
"Não tente fazer mais do que consegue. Obedeça aos limites do seu corpo. Você respeitando seu físico, futuramente será bem recompensado.", "Sua energia e pensamentos positivos fazem uma barreira para os males físicos. Continue assim.",
"Procure fazer novas atividades para o seu corpo: ginástica, dança, natação, etc.", "Seu corpo é seu amigo. Faça as pazes com ele. Seja saudável.", "Às vezes, nós mesmos produzimos nossas próprias doenças, através de auto cobranças, baixa autoestima e autopunições devido a culpas. Se perdoe, se aceite, que tudo ficará bem.",
"Respondemos hoje, o que fizemos no passado. Nosso corpo e nossa saúde atualmente é o resultado de bons ou maus tratos ao longo dos anos. Medite sobre isso e cuide-se.", "Não tome nada, nem faça nenhum tipo de tratamento ou atividade física sem receita e aconselhamento médicos.",
"Você está em ótima forma física. Sua saúde está ótima.", "Qualquer que seja o problema que enfrenta agora tome cuidado com o excesso de remédios, tranquilizantes, drogas em geral. O mesmo remédio que cura, também mata. Tome cuidado com os vícios, porque eles também colaboram para que você fique com a saúde debilitada. E lembre-se: depressão, também, é doença e precisa ser cuidada por profissionais competentes.",
"Não descuide do seu coração. Ele merece um carinho diferenciado de você.", "Existem doenças psicossomáticas, ou seja, toda vez que você fica preocupado, aborrecido ou magoado com alguma coisa, você adoece. Procure um psicólogo, faça alguma terapia que, certamente, muitas doenças desaparecerão.",
"Às vezes um trabalho ou curso, é uma terapia. Se ocupe de alguma tarefa que lhe agrade. Isto fará bem para sua saúde. Pesquise a origem do seu problema. Pode ser melancolia ou solidão.", "Faça exames periódicos, assim você controlará e detectará melhor e mais rápido qualquer problema de saúde que possa vir aparecer.",
"Se você for do sexo masculino, procure um urologista e faça um “check-up”, se caso for do sexo feminino, aconselhe seu parceiro a fazê-lo.", "Se você for do sexo feminino, procure um ginecologista e faça um “check-up”, se caso for do sexo masculino, aconselhe sua parceira a fazê-lo.",
"Se você for do sexo feminino, faça um “check-up” em todo o seu aparelho reprodutor. Inclusive nas mamas. Probabilidade de gravidez. Por outro lado pode ser também, problemas para engravidar.",
"A sua saúde está maravilhosa! Parabéns!", "Cuide melhor de sua saúde! Não tenha preguiça! Procure um médico e tome umas vitaminas! Ânimo! Tome cuidado com anemia, ok? Cautela com calmantes e entorpecentes. Não se automedique. É perigoso.",
"Você achará a solução do problema que te aflige. Procure um bom profissional da área.", "Gastará certo dinheiro para fazer o tratamento que precisa. Mas não se desaponte, pois com saúde não se brinca, e, se não a tivermos, o que de resto importa?Não se preocupe, pois, recuperará o dinheiro empregado e o melhor, com saúde restituída.",
"Fique mais segura (o), sua saúde, também, depende disto.", "Apesar de todo o sofrimento, você será vitoriosa (o) no final. Fique certa (o) disto!"];

var frasesDinheiro = ["Momento de realizações e concretizações. Notícias boas a caminho.", "Obstáculos colocados por terceiros, impedindo suas realizações materiais.", "Mudanças positivas acontecerão no setor financeiro. Reanime-se e renove suas ações neste setor. Empenhe-se e dê uma virada em sua vida.",
"Procure algo mais estável, que lhe dê alicerces para o futuro. Equilibre-se e pense bem em algo que você possa ter mais conforto e estabilidade. Para aqueles que querem ter seu próprio negócio, sucesso. Caso não tenha capital para isto, experimente começar, se possível, em sua própria casa.",
"Tempos de prosperidade e colheitas. Está na hora de colher os frutos, que foram plantados com boas sementes.", "Época difícil para o setor financeiro, porém, passageira. Os pensamentos estão em turbilhão. Não tome nenhuma decisão neste momento. Espere a tempestade passar. Pense bem antes de agir para escolher o caminho certo.",
"Cuidado com os venenos, as intrigas e as maledicências. Seja o que for que pretenda fazer, haja em silêncio. Cuidado com sócios.", "Esqueça! Fim! Os caminhos para o setor material estão “zerados”!",
"Está tudo bem! Você captou o jeito da coisa! Vai dar tudo certo!", "Esqueça velhos conceitos, pensamentos ou ideias, porque não te levará a lugar algum. Em algum momento da vida nós precisamos nos afastar dos velhos conceitos e ir à procura de algo novo. Período difícil, mas, compensador para o futuro.",
"Faça algo que lhe atraia que lhe dá prazer, e você obterá sucesso.", "Contemple mais a situação. É necessário se preparar melhor para alcançar seu objetivo. Curta mais suas atividades financeiras, de modo que elas sejam prazerosas para você.",
"Amadureça mais seus pensamentos e suas ações, para que seus empreendimentos amadureçam juntamente com eles.", "Muito cuidado!Existem pessoas à sua volta que estão se fazendo de amigos, mas que na verdade, fazem tudo para o “circo pegar fogo” e lhe prejudicar. Todo cuidado é pouco, porque essas pessoas são muito próximas e querem aquilo que você tem ou quer ter. Se tiver sócio, cuidado com ele! Fique de olho!",
"Olho grande, falsidade. Cuidado, porque há pessoas que estão rindo para você na sua frente, mas quando você vira as costas, elas riem de você. Não confie em ninguém. Não compartilhe suas ideias, guarde-as para si.",
"Sua estrela está brilhando agora. Aproveite este momento, porque tudo vai dar certo. É aconselhável agradecer ao Criador, por tudo que você já conseguiu até hoje. Faça uma oração de agradecimento e peça, também, para sempre ser protegido por Ele.",
"Novas ideias ou empreendimentos. Novidades. Novo emprego, novas oportunidades de trabalho.", "Um verdadeiro amigo (a), nesta hora, será muito oportuno para você. Conte com ele. Lealdade.",
"Há quanto tempo você não olha para dentro de si e conversa com seu Deus interior? Está na hora de meditar e orar. Experimente fazer perguntas a si mesmo (a) obterá respostas.",
"Esqueças os “insucessos” anteriores e invista em suas perspectivas. Os fracassos do passado servirão para o sucesso do amanhã.", "Regulamente e documente tudo que fizer. Vencerá com justiça. Se for o caso, procure um advogado. Assuntos relacionados à justiça.",
"Vá em frente! As estradas estão abertas para você. Você está no caminho certo!", "Não se deprima. Você acha que as coisas erradas só acontecem contigo. Cuidado para não trilhar caminhos obscuros de fuga: álcool, drogas, vícios em geral. Reaja! Levante-se! Não deixe que o desânimo tome conta de você!Tome cuidado com roubos e furtos!",
"Você deve fazer algo que goste de verdade. Faça com amor, que certamente, terá sucesso.", "Faça uma sociedade. As coisas fluirão melhor.", "Trabalho à vista! Uma proposta de emprego. Concursos. Dedique-se mais aos estudos para conseguir melhorar no emprego.",
"Notícia de concurso, de trabalho ou de um empreendimento mudará sua vida.", "Procure orientação de uma pessoa importante para você do sexo masculino, neste momento. Será de grande valia.", "Procure orientação de uma pessoa importante para você do sexo feminino, neste momento. Será de grande valia.",
"É preciso mais calma e “jogo de cintura”. Lembre-se: “Água mole em pedra dura tanto bate até que fura”. Não conseguirá nada se for afobado (a), mas, certamente, obterá sucesso, se for de mansinho, com persistência. Tenha paciência e sabedoria na hora de agir.",
"O Sol está brilhando em sua vida. Seja feliz! Tudo dará certo!", "Todos os seus esforços terão seus merecimentos neste momento. Você terá o que merece! Não seja preguiçoso (a) e vá à busca do que quer. Acredite mais nas suas intenções e sonhos. Não seja instável e tenha certeza, finalmente, do que deseja.",
"A solução de todos os problemas está em suas mãos. Você sabe o que deverá ser feito.", "Êxito. Lucro. Dinheiro. Bens materiais. Sucesso financeiro.", "Procure fazer algo que lhe traga segurança e estabilidade, um concurso público, por exemplo.",
"Apesar de todo o sofrimento, você será vitoriosa (o) no final. Fique certa (o) disto!"];

var frasesOutros = ["Algo que você espera muito está por vir, está a caminho. Realizações e concretizações.", "Existem obstáculos em seu caminho para a realização de seus projetos, colocados por terceiros. Tome cuidado.",
"Mudança positiva em sua vida, de maneira geral. Pode ser de casa, trabalho, amor, finanças etc. Indica, também, a possibilidade de viagem.", "A família é a resposta para sua pergunta. Indica, também, que você poderia buscar um templo religioso para lhe auxiliar neste momento.",
"Prosperidade, fartura, bons frutos.", "Não se precipite, “não coloque os pés pelas mãos”. Tenha cautela, e não tome conclusões/decisões neste momento. Esfrie a cabeça e organize seus pensamentos, para depois tomar alguma atitude. ",
"Cuidado com fofocas, intrigas, venenos confusões, escândalos. ", "Fim do ciclo. Término.", "Alegria. Bons momentos. Tudo dando certo!", "Processo longo e dolorido. Perdas. Transformações. Às vezes é preciso destruir para construir algo de novo. ",
"Trabalhe com a enorme força interior que você tem. Conhece aquele ditado? “Cuidado com o que você, verdadeiramente, deseja, pois, certamente, você conseguirá”.", "Momento enamorado de cuidado mútuo.", "Inocência, pureza. Não há maldade.",
"Traição de pessoa próxima, sabotagem, inveja.", "Olho grande, falsidade, inveja.", "Sorte, proteção.", "Novidades, notícias boas a caminho. Pode ser também probabilidade de gravidez ou nascimento de uma criança.",
"Amizade, fidelidade, lealdade. Companheirismo.", "Procure respostas no seu Eu Interior, espiritualidade em voga.", "Reabilitação. Cura. Procurar homeopatia, terapias alternativas, medicina ortomolecular, fitoterapia, medicina holística.",
"Haverá necessidade de recorrer à justiça, advogados, juiz, papéis, registros, legalidade, burocracia.", "Caminho desimpedido, livre. Caminho certo. Pode ser também, algum tipo de cirurgia.", "Roubo, desgaste, depressão, Acha que nada vai dar certo. Descredibilidade, debilidade. Tenha cuidado com vícios, drogas, calmantes, álcool.",
"Amor, paixão, sentimentos em sua vida!", "Casamento, união, sociedade.", "Estudos, concursos, trabalhos em seu caminho.", "Um aviso, uma notícia, um telegrama, resultado de um exame a caminho.", "Procure respostas com um homem importante em sua vida, como por exemplo: seu pai, marido, irmão, filho ou afins.",
"Procure respostas com uma mulher importante em sua vida, como por exemplo: sua mãe, esposa, irmã, filha ou afins.", "Tenha mais calma, mais “jogo de cintura”. Use sua intuição e acredite mais nela. Faça banhos de imersão, vai lhe ajudar bastante a pensar melhor e lhe dará a tranquilidade que você necessita neste momento.",
"O Sol brilha em sua vida. Luz! Tudo vai dar certo! Tudo de bom!", "Respeite mais seus sonhos e intuições. Muitas vezes você já sabe no que vai dar as coisas, mas insiste e se dá mal. Momento de receber o que merece. Não fuja dos problemas, encare-os. Eles não são tão grandes quanto parece.",
"As soluções existem e você vai alcançá-las.", "Dinheiro, êxito, retorno financeiro em seu caminho.", "Estabilidade. Segurança. Em relação à pergunta que você fez.", "Depois do sofrimento, virá a sua vitória. Fique certo disto."];

var titulosOpcoes = ["Amor", "Saúde", "Dinheiro", "Outros"];

var frases = [frasesAmor, frasesSaude, frasesDinheiro, frasesOutros];

var modal = document.querySelector("#modal");

var opcao;

var totalCartas = 36;
var cartasPorLinha = 9;

(function(){

    for(var indice = 0; indice < totalCartas; indice++){
        var img = {
            src: "imagens/" + (indice + 1)+ ".jpg",
            id: indice
        }
        imagens.push(img);
    }

    document.getElementById("botao").addEventListener("click", posicionarCartas)

    criarOpcoes();
}());

function criarOpcoes() {

    limparMesa();

    var contador = 0;

    while (contador < 4){
        var div = document.createElement("div");
        div.setAttribute("id", "porta-carta" + contador);
        document.getElementById("container").appendChild(div);

        contador ++;
    }

    contador = 0;

    while (contador < 4){
        var divCarta = document.createElement("div");
        divCarta.setAttribute("id", "carta" + contador);
        divCarta.setAttribute("class", "carta");
        document.getElementById("porta-carta"+ contador).appendChild(divCarta);

        var divArea = document.createElement("div");
        divArea.setAttribute("id", "areaOpcao" + contador);
        divArea.setAttribute("class", "descricaoCarta");
        document.getElementById("porta-carta" + contador).appendChild(divArea);

        contador ++;
    }

    contador = 0;

    while(contador < 4){
        var div = document.createElement("div");
        div.setAttribute("class", "face verso");
        document.getElementById("carta" + contador).appendChild(div);

        contador ++;
    }

    document.getElementById("botao").disabled = true;

    document.getElementById("container-titulo").style.display = "none";
    document.getElementById("container-botao").style.display = "block";

    modal.style.display="none";
    modal.style.zIndex = -2;

    document.getElementsByTagName("BODY")[0].className = "";

    posicionarOpcoes();
}

function posicionarOpcoes() {
    var contador = 0;

    while(contador < 4){
        var carta = document.getElementById("carta" + contador);
        carta.addEventListener("click", selecionarOpcao, false);
        contador++;
    }

    contador = 0;
    while(contador < 4){
        var carta = document.getElementById("carta" + contador);
        var opcao = document.getElementById("areaOpcao" + contador);
        opcao.style.width = getStyle(carta, "width");
        var tamanhoString = getStyle(carta, "height");
        var tamanho = parseFloat(tamanhoString.substr(0, tamanhoString.length-2));
        opcao.style.top = tamanho + 5 + "px";
        opcao.innerHTML += titulosOpcoes[contador];
        carta.style.left = (contador * 25) + 5 + "%";
        opcao.style.left = (contador * 25) + 5 + "%";
        contador++;
    }
}

function selecionarOpcao(){
    opcao = this.id.substring(5);
    document.getElementById("botao").disabled = false;
    criarCartas();
}

function criarCartas() {

    limparMesa();

    var contador = 0;
    while (contador < totalCartas){
        var div = document.createElement("div");
        div.setAttribute("id", "carta" + contador);
        div.setAttribute("class", "carta");
        document.getElementById("container").appendChild(div);

        contador ++;
    }

    contador = 0;

    while(contador < totalCartas){
        var div = document.createElement("div");
        div.setAttribute("class", "face verso");
        document.getElementById("carta" + contador).appendChild(div);

        contador ++;
    }

    contador = 0;

    while(contador < totalCartas){
        var div = document.createElement("div");
        div.setAttribute("class", "face frente");

        document.getElementById("carta" + contador).appendChild(div);

        contador ++;
    }

    imagens = embaralhar(imagens);

    var imagensFace = document.getElementsByClassName("frente");
    contador = 0;

    while(contador < totalCartas){
        imagensFace[contador].style.background = "url('"+ imagens[contador].src +"')";
        imagensFace[contador].setAttribute("id", imagens[contador].id);
        contador++;
    }
}

var indice = 0;

function posicionarCartas(){

    document.getElementById("container-titulo").style.display = "block";
    document.getElementById("container-botao").style.display = "none";

    var posicaoX;
    var posicaoY;
    var elemento =  document.querySelector("#carta" + 0);

    var alturaCartaString = getStyle(elemento, "height");
    var alturaCarta = parseFloat(alturaCartaString.substr(0, alturaCartaString.length-2));
    var larguraCartaString = getStyle(elemento, "width");
    var larguraCarta = parseFloat(larguraCartaString.substr(0, larguraCartaString.length-2));

    var alturaContainerString = getStyle(document.getElementById("container"), "height");
    var alturaContainer = parseFloat(alturaContainerString.substr(0, alturaContainerString.length-2));
    var larguraContainerString = getStyle(document.getElementById("container"), "width");
    var larguraContainer = parseFloat(larguraContainerString.substr(0, larguraContainerString.length-2));

    var marginTop = ((0.5076 / 100) * alturaContainer);
    var marginLeft = ((0.3355 / 100) * larguraContainer);

    if(indice++ < totalCartas){
        var carta = document.querySelector("#carta" + indice);

        posicaoX = (indice === 0 || indice === cartasPorLinha) ? marginLeft : (indice % cartasPorLinha ) * (larguraCarta + marginLeft) + marginLeft;
        if(indice < cartasPorLinha){
            posicaoY = marginTop;
        }
        else{
            if(indice > cartasPorLinha-1 && indice < cartasPorLinha*2){
                posicaoY = (alturaCarta + marginTop) + marginTop;
            }
            else{
                if(indice > ((cartasPorLinha*2)-1) && indice < cartasPorLinha*3){
                    posicaoY = ((alturaCarta + marginTop) * 2) + marginTop;
                }
                else{
                    posicaoY = ((alturaCarta + marginTop) * 3) + marginTop;
                }
            }
        }
        //FIM IF

        var posX = 0;
        var posY = 0;
        Animacao();

        setTimeout(posicionarCartas, 2);

        function Animacao() {
            if(posX < posicaoX){
                posX++;
            }
            if(posY < posicaoY)
                posY++;

            carta.style.left = posX + "px";
            carta.style.top = posY + "px";
            if(posX < posicaoX || posY < posicaoY){
                setTimeout(Animacao, 1);
            }
            else{
                if(parseInt(carta.style.top.substr(0, carta.style.top.length-2)) == posY && parseInt(carta.style.left.substr(0, carta.style.left.length-2)) == posX){
                    adicionarListener(carta);
                }
            }
        }
    }
}

function adicionarListener(cartaFinal) {

    if(cartaFinal.id == "carta35"){
        for(var indice = 0; indice < totalCartas; indice++){
            var carta = document.querySelector("#carta" + indice);
            carta.addEventListener("click", virarCarta, false);
        }
    }
}

function embaralhar(imagensOrdenadas){

    var imagensEmbaralhadas = [];

    while(imagensEmbaralhadas.length !== imagensOrdenadas.length){
        var indice = Math.floor(Math.random() * imagensOrdenadas.length);

        if(imagensEmbaralhadas.indexOf(imagensOrdenadas[indice]) < 0){
            imagensEmbaralhadas.push(imagensOrdenadas[indice]);
        }
    }

    return imagensEmbaralhadas;
}

function virarCarta() {
    var faces = this.getElementsByClassName("face");
    faces[0].classList.toggle("virada");
    faces[1].classList.toggle("virada");
    window.setTimeout(function(){esperar(faces[1])}, 1000);
}

function exibirCarta(carta) {
    var cartaEscolhida = document.getElementById("carta-escolhida-frente");
    document.getElementById("carta-numero").innerHTML = "Carta " + (parseInt(carta.id) + 1);
    document.getElementById("carta-titulo").innerHTML = titulos[carta.id];
    document.getElementById("texto").innerHTML = frases[opcao][carta.id];
    cartaEscolhida.style.background = "url('imagens/" + (parseInt(carta.id) + 1) +".jpg')";

    document.getElementsByTagName("BODY")[0].className= "modal-open";

    modal.style.zIndex = 10;
    modal.style.display = "block";
    modal.style.visibility = "visible";
    indice = 0;
}

function esperar(carta) {
    setTimeout(exibirCarta(carta), 10000);
}

function limparMesa() {
    var cartas = document.getElementsByClassName("carta");
    if(cartas.length > 0){
        cartas.remove();
    }

    cartas = document.getElementsByClassName("descricaoCarta");
    if(cartas.length > 0){
        cartas.remove();
    }
}

NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = this.length - 1; i >= 0; i--) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
};

function getStyle(el, styleProp) {
    var value, defaultView = el.ownerDocument.defaultView;
    // W3C standard way:
    if (defaultView && defaultView.getComputedStyle) {
        // sanitize property name to css notation (hypen separated words eg. font-Size)
        styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
        return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
    } else if (el.currentStyle) { // IE
        // sanitize property name to camelCase
        styleProp = styleProp.replace(/\-(\w)/g, function(str, letter) {
            return letter.toUpperCase();
        });
        value = el.currentStyle[styleProp];
        // convert other units to pixels on IE
        if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
            return (function(value) {
                var oldLeft = el.style.left, oldRsLeft = el.runtimeStyle.left;
                el.runtimeStyle.left = el.currentStyle.left;
                el.style.left = value || 0;
                value = el.style.pixelLeft + "px";
                el.style.left = oldLeft;
                el.runtimeStyle.left = oldRsLeft;
                return value;
            })(value);
        }
        return value;
    }
}