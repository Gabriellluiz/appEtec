import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicoNoticiaService } from '../servico/servico-noticia.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public listaNoticia=[
    {titulo:'Arraiá da Navar', subtitulo:'Venham participar conosco', img:'assets/arraia.jpg', link:"/por-numero/9"},
    {titulo:'CPS leva experiência de Etecs ao programa Novotec', subtitulo:'Agora você pode estudar na Etec pelo Programa Novotec Expresso!', img:'assets/Novotec.jpg', link:"/por-numero/8"},
    {titulo:'Vestibulinho Etec', subtitulo:'1ª lista de convocação e matrícula', img:'assets/vestibulinho.jpg', link:"/por-numero/1"},
    {titulo:'Etec representada nas Seletivas para OBA', subtitulo:'Olimpíadas Internacionais de Astronomia', img:'assets/oba2018.jpg', link:"/por-numero/2"},
    {titulo:'Alunas da Etec conquistam medalhas na ORMUB 2018', subtitulo:'Olimpíada Regional de Matemática da Unesp – Bauru', img:'assets/ormub2018.jpg', link:"/por-numero/3"},
    {titulo:'Etec de Portas Abertas para a comunidade', subtitulo:'', img:'assets/etecportasabertas.jpg', link:"/por-numero/4"},
    {titulo:'Etec Comendador João Rays Participará da Semana do MEI', subtitulo:'', img:'assets/semanadomei.jpg', link:"/por-numero/5"},
    {titulo:'Projeto Microsoft Imagine', subtitulo:'', img:'assets/microsoftimagine.jpg', link:"/por-numero/6"},
    {titulo:'Semana Científica e Cultural 2017', subtitulo:'', img:'assets/semanacientifica2017.jpg', link:"/por-numero/7"},
    {titulo:'CPS promove 3º Simpósio dos Ensinos Médio, Técnico e Tecnológico', subtitulo:'', img:'assets/3simposio.jpg', link:"/por-numero/10"},

  ];

  public listaConteudo= [
    {titulo:'Arraiá da Navar', subtitulo:'Venham participar conosco', img:"assets/arraia.jpg", desc:"<p>Venda de convites com os alunos da escola. Valor R$ 10,00.</p> "
    +"<p>- Permitida a entrada de maiores de 16 anos desacompanhados;</p> "
    +"<p>- Permitida a entrada de menores de 16 anos, somente acompanhados pelos pais ou responsável legal portando, obrigatoriamente, termo de guarda;</p>"
    +"<p>- ATENÇÃO: A apresentação de documento de identidade original é obrigatória para todas as idades;</p>"
    +"<p>- Proibida a entrada de bebidas alcoólicas.</p><p>Mais informações: (14) 3641-1310</p>"},

    {titulo:'CPS leva experiência de Etecs ao programa Novotec', subtitulo:'Agora você pode estudar na Etec pelo Programa Novotec Expresso!', img:"assets/Novotec.jpg", desc:"<p>Já estão abertas as inscrições para o programa de cursos rápidos profissionalizantes do</p>"
    +"<p>Novotec Expresso para alunos do Ensino Médio (1º, 2º ou 3º) da Rede Pública Estadual </p>"
    +"<p>Na Etec Comendador João Rays de Barra Bonita serão oferecidos os cursos: </p>"
    +"<p>➡️ Excel Aplicado à Área Administrativa – Tarde </p>"
    +"<p>➡️ Computação na Nuvem – Tarde</p>"
    +"<p>Previsão de início das aulas 01/08/2019</p>."
    +"<p>Serão10 aulas semanais (distribuídas em dois ou três dias)</p>"
    +"<p>Carga horária total: 200 horas</p>"
    +"<p>Inscrições até dia 16/06/2019 pelo site: www.novotec.sp.gov.br</p>"
    +"<p>Cursos Gratuitos</p>"
    +"<p>Informações pelo site www.novotec.sp.gov.br ou telefone (14) 3641-1310.</p>"},

    {titulo:'Vestibulinho Etec', subtitulo:'1ª lista de convocação e matrícula', img:"assets/vestibulinho.jpg", desc:"<p>Atenção, você que prestou o Vestibulinho da Etec referente ao 1º semestre de 2019!</p>"   
    +"<p>Nesta quinta-feira (17/01/2019) estará disponível a primeira lista de convocação para os candidatos aprovados. As"
    +"matrículas poderão ser realizadas na quinta (17/01/2019) e sexta-feira (18/01/2019), das 13h às 20h, na Etec"
    +"Comendador João Rays.</p>"
    +"<p>Lembramos que o aluno, no momento da matrícula, deve apresentar os seguintes documentos:</p>"
  +"<h3>Matrícula para o Ensino Médio</h3>"
  +"<p>>Xerox simples da célula de identidade (RG) e CPF;</p>"
    +"<p>>Histórico escolar ou declaração de conclusão de ensino fundamental;</p>"  
    +"<p>>2 fotos 3×4 recentes;</p>"  
    +"<p>>Escolaridade Pública: Apresentar histórico escolar ou declaração detalhada comprovando ter cursado integralmente"
    +"o ensino fundamental, de 5ª a 8ª série ou do 6º ao 9º ano em instituição pública.</p>"
  +"<h3>Matrícula para o Ensino Técnico</h3>"
  +"<p>>Xerox simples da célula de identidade (RG) e CPF;</p>"   
    +"<p>>Histórico escolar ou declaração de conclusão do ensino médio ou declaração que está matriculado a partir da 2º"
    +"série do ensino médio;</p>"    
    +"<p>>2 fotos 3×4 recentes;</p>"
    +"<p>>Escolaridade Pública: Apresentar histórico escolar ou declaração detalhada comprovando ter cursado integralmente"
    +"o ensino fundamental, de 5ª a 8ª série ou do 6º ao 9º ano em instituição pública.</p>"},

    {titulo:'Etec representada nas Seletivas para OBA', subtitulo:'Olimpíadas Internacionais de Astronomia', img:"assets/oba2018.jpg", desc:"<p>Na edição 2018 da OBA – Olimpíada Brasileira de Astronomia e Astronáutica, os alunos da Etec Comendador João Rays – Barra Bonita se destacaram com excelentes resultados.</p>"
    +"<p>Paulo Cesar Ferrarez Filho conquistou medalha de bronze e Vitor Francisco Pullini, a medalha de prata, tendo se classificado para participar das seletivas para formação das equipes que representarão o Brasil na Olimpíada Internacional de Astronomia e Astrofísica, e na Olimpíada Latino Americana de Astronomia e Astronáutica, que serão realizadas em 2019.</p>"
    +"<p>Parabéns Paulo e Vitor, por essa importante conquista. E continuaremos na torcida pelo Vitor, para que consiga representar bem o Brasil.</p>"},

    {titulo:'Alunas da Etec conquistam medalhas na ORMUB 2018', subtitulo:'Olimpíada Regional de Matemática da Unesp – Bauru', img:"assets/ormub2018.jpg", desc:"<p>Na edição 2018 da Olimpíada Regional de Matemática da Unesp – Bauru, as alunas Emily Vitória De Sousa Da Silva Ferreira (2º série do ensino médio) e Anyelle Meneghesso (3º série do ensino médio) conseguiram ótimas classificações na categoria Escolas Públicas, colocando em destaque o nome da nossa Etec Comendador João Rays e a qualidade de nossos cursos.</p>"
    +"<p>Parabéns Emily e Anyelle por essa importante conquista.</p>"},

    {titulo:'Etec de Portas Abertas para a comunidade', subtitulo:'', img:"assets/etecportasabertas.jpg", desc:"<p>Em mais uma edição do evento Etec de Portas Abertas, realizado segunda-feira, 29 de outubro, tivemos a oportunidade de novamente proporcionar à comunidade e estudantes da região uma visão sobre nossos cursos, instalações e projetos pedagógicos.</p>"
  +"<p>Os visitantes puderam conhecer nossa infraestrutura, participar de apresentações, minicursos e palestras abordando temas de interesse profissional, em um importante momento de troca de experiências, principalmente para os alunos interessados em ingressar em nossos cursos, os quais puderam interagir com professores e alunos dos cursos técnicos e ensino médio.</p>"
  +"<p>Dentre as atividades realizadas, figuraram:</p>"
  +"<p> > Apresentações sobre os cursos de Administração, Logística, Desenvolvimento de Sistemas, Ensino Médio e Ensino Médio Integrado.</p>"
  +" <p> > Mini palestra: “Prepare-se para uma seleção de emprego”, com Amanda Zanetti.</p>"
   +"<p> > Mini palestra: “Conflitos no ambiente de trabalho: Ter razão? Eis a questão”, com Amanda Bragion.</p>"
   +"<p> > Mini cursos: Photoshop e Excel.</p>"},

    {titulo:'Etec Comendador João Rays Participará da Semana do MEI', subtitulo:'', img:"assets/semanadomei.jpg", desc:"<p>A prefeitura de Barra Bonita e o Sebrae/SP promovem, entre os dias 14 e 18 de maio, a Semana do Microempreendedor Individual (MEI). O evento é destinado a empreendedores e representantes de empresas ativas no município. "
    +"As atividades gratuitas serão realizadas em forma de teleconferência no Centro Cultural Célia Stangherlin, na avenida Pedro Ometto, nº 467.</p>"
    +"<p>A ETEC Comendador João Rays (Naval) também participará do evento e terá um ponto de transmissão em sua unidade. Os alunos assistirão as teleconferências e a escola também está aberta para receber comerciantes, empresários, empreendedores, MEIs e cidadãos que também quiserem aproveitar os workshops. Contudo, a ETEC transmitirá apenas alguns cursos específicos.</p>"
    +"<p>Todos os interessados em participar das teleconferências - tanto no Centro Cultural como na ETEC - devem fazer as inscrições pelo telefone 3641-8082 com pelo menos 24 horas de antecedência."
    +"O objetivo é sanar dúvidas dos empresários sobre empresa, gestão financeira e plano de gestão, vendas, entre outros temas. Confira abaixo a lista de teleconferências oferecidas e se inscreva!</p>"},

    {titulo:'Projeto Microsoft Imagine', subtitulo:'', img:"assets/microsoftimagine.jpg", desc:"<p>É uma WebStore onde, os alunos e professores poderão realizar o download dos produtos Microsoft gratuitamente. Para obter este benefício, alunos ou professores deverão ter seu e-mail institucional e vínculo ativo com a Etec ou Fatec, ou seja, somente será permitido o download para os alunos durante o período em que estiver cursando uma Etec, Fatec ou professor em exercício.</p>"
    +"<p>O Microsoft Imagine dirige-se a instituições de ensino secundário, profissional e superior que pretendam oferecer aos seus alunos o acesso gratuito a tecnologias Microsoft. É um acordo especial entre o Centro Paula Souza e a Microsoft que inclui as mais recentes ferramentas de desenvolvimento, plataformas e servidores da Microsoft.</p>"},

    {titulo:'Semana Científica e Cultural 2017', subtitulo:'', img:"assets/semanacientifica2017.jpg", desc:"<p>A Escola Técnica Estadual (Etec) Comendador João Rays, de Barra Bonita, município localizado na Região de Bauru, promove nesta terça e quarta-feira, dias 12 e 13, a Semana Científica e Cultural 2017. As atividades começaram na véspera com apresentação aos familiares dos estudantes da unidade.</p>"
+"<p>Organizada pelos alunos e professores dos Ensinos Médio e Técnico integrado, a iniciativa aberta à comunidade terá apresentações de dança, teatro e salas temáticas. Instituições de ensino interessadas em agendar visitas monitoradas à Etec neste período podem entrar em contato com a unidade pelo e-mail.</p>"
+"<p>“A ideia do tema do evento ‘A Era da Pós-verdade’ surgiu durante conversa com os alunos sobre a onda de notícias falsas que temos visto nas redes sociais”, explica a diretora da Etec Sônia Dalavale Tozatto. “Os trabalhos têm o intuito de fazer o público refletir sobre as informações que estão consumindo e mostrar que é necessário procurar várias fontes”, conclui.</p>"
  +"<p>Durante a manhã, os estudantes vão apresentar duas peças teatrais: O Homem que Sabia Javanês, de Lima Barreto, e O Alienista, de Machado de Assis. Também haverá dramatização do poema Os ombros que suportam o mundo, de Carlos Drummond de Andrade, e uma apresentação de dança com a música Esquiva da Esgrima do cantor Criolo.</p>"
+"<p>Confira a programação das salas temáticas que poderão ser visitadas nos dois períodos:</p>"
+"<p><h5>Salas:</h5></p>"
+"<p><h6>Entre a luz e a escuridão:</h6>experimentos de física e química envolvendo fenômenos ópticos.</p>"
 +"<p><h6>A Arte do grafite:</h6>reflexões sobre preconceitos, racismo, violência numa linguagem artística.</p>"
+"<p><h6>Colômbia – mais do que os olhos podem ver:</h6>cultura, música, dança e a arte na Colômbia mostrando muito mais do que os olhos podem enxergar de forma a refletir, inclusive, sobre questões que também afligem nosso País.</p>"
+"<p><h6>Pós-Verdade:</h6>contextualização entre a literatura, história e filosofia sobre o conceito de pós-verdade, palavra que foi inserida no dicionário Oxford e considerada a palavra do ano de 2016</p>"
+"<p><h6>Acredito, logo existe:</h6>mitos e verdades envolvendo áreas do conhecimento de medicina, nutrição, farmácia e aspectos sociais.</p>"
+"<p><h6>Photofake:</h6>simulação fotográfica para “levar” os visitantes a lugares históricos e inusitados.</p>"},

    {titulo:'CPS promove 3º Simpósio dos Ensinos Médio, Técnico e Tecnológico', subtitulo:'', img:"assets/3simposio.jpg", desc:"<p>Centro Paula Souza Promove 3º Simpósio  Dos Ensinos Médio, Técnico E Tecnológico Crédito:</p> "
    +"<p>Divulgação | Na abertura do encontro, o vice-diretor superintendente do Centro Paula Souza,</p> "
    +"<p>César Silva, ressaltou importância da busca pelo aprimoramento constante</p> "
    +"<p>Nos dias 10 e 11 de agosto, o Centro Paula Souza promoveu seu 3º Simpósio dos Ensinos</p> "
    +"<p>Médio, Técnico e Tecnológico (Semtec). O evento foi realizado na Faculdade de Tecnologia do</p> "
    +"<p>Estado (Fatec) Sebrae, no bairro Campos Elíseos, na Capital. O encontro deste ano teve como</p>"
    +"<p>tema o trabalho e a educação técnica e tecnológica no mundo contemporâneo, convidando os</p> "
    +"<p>profissionais a refletirem sobre o papel da educação profissional no mercado de trabalho </p> "
    +"<p>atual, marcado por fluidez e mudanças constantes.</p> "
    +"<p>Com o objetivo de permitir a divulgação e o debate de estudos, práticas e reflexões dos</p> "
    +"<p>professores e gestores das Escolas Técnicas Estaduais (Etecs) e Fatecs, o simpósio incluiu</p> "
    +"<p>palestras e apresentação de artigos. A programação foi encerrada com o tema mundo do </p> "
    +"<p>trabalho e educação profissional, com Ladislau Dowbor, professor de Economia e </p> "
    +"<p>Administração da Pontifícia Universidade Católica de São Paulo.</p> "
    +"<p><h3>Troca de experiências</h3></p> "
    +"<p>No primeiro dia, durante a abertura do simpósio, o vice-diretor superintendente do Centro </p> "
    +"<p>Paula Souza, César Silva, ressaltou o dinamismo da instituição na busca pelo constante </p> "
    +"<p>aprimoramento. “Quando o assunto é educação voltada ao mundo do trabalho, devemos </p> "
    +"<p>pensar além das nossas quatro paredes.</p> " 
    +"<p>O modo de produção muda a cada momento. Nosso trabalho precisa ser permanentemente adaptado</p> "  
   +"<p>para acompanhar este contexto”, afirmou.</p> " 
    +"<p>O público pôde conferir ainda palestra do economista e demógrafo Haroldo da Gama Torres, </p> "
    +"<p>da Fundação Sistema Estadual de Análise de Dados (Seade), sobre o impacto da educação </p> "
    +"<p>profissional: estudos e indicadores, além de projetos inovadores de professores do CPS.</p> "   
    +"<p>Os artigos trataram de cinco linhas temáticas: qualificação e desenvolvimento regional: </p> "
    +"<p>arranjos produtivos locais e educação profissional; educação profissional, acesso e inclusão; o </p> "
    +"<p>lugar do profissional e o mundo do trabalho; avaliação e certificação de competências; e </p> "
    +"<p>análise de indicadores e impacto qualitativo da educação profissional. Além disso, 20 pôsteres </p> "
    +"<p>exibiram trabalhos de professores das Etecs e Fatecs. </p>"},
  ];


  constructor(private rota:Router, private enviaDados:ServicoNoticiaService){
    
  }

  public mostraNoticia(listaConteudo){
    this.enviaDados.setDados('listaConteudo', listaConteudo);
    this.rota.navigate(['/noticias']);
  }
}

