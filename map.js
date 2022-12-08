const youtubeList = [
  {
    id: 1,
    titulo: 'React',
    descricao: 'reactivo  para caracas',
    duracao: '2:00',
    imagem: '/img/logo.png',
    user: 'Cristian',
    outrosVideo: [],
  },
  {
    id: 2,
    titulo: 'Javascript',
    descricao: 'mais facil',
    duracao: '5:00',
    imagem: '/img/js.png',
    user: 'Teresa',
    outrosVideo: [],
  },
  {
    id: 3,
    titulo: 'Html',
    descricao: 'super easy mas nao',
    duracao: '10:00',
    imagem: '/img/html.png',
    user: 'Jesus',
    outrosVideo: [],
  },
  {
    id: 4,
    titulo: 'CSS',
    descricao: 'CSS  cascade',
    duracao: '2:00',
    imagem: '/img/css.png',
    user: 'Cristian',
    outrosVideo: [
      { id: 'video1', duracao: '2:00' },
      { id: 'video2', duracao: '3:00' },
    ],
  },
];

// console.log('youtubeList', youtubeList);
const htmlCards = youtubeList.map((item) => {
  const { imagem, duracao, titulo, descricao, user, outrosVideo } = item;

  const build = `
  <div className="Card">
    <img src="${imagem}" className="img"></img>
    <div className="titulo-verde">${titulo}</div>
    <div className="descricao">${descricao}</div>
    <div className="duracao">${duracao}</div>
    <div>${`O user ${user} tem mais ${
      outrosVideo.length ? outrosVideo.length : 'sem videos'
    }`}</div>
  </div>
  `;

  return build;
});

console.log('htmlCards', htmlCards);
