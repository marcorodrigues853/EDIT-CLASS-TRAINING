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
const htmlCards = youtubeList.map(
  (item) =>
    `
  <div className="Card">
    <img src="${item.imagem}" className="img"></img>
    <div className="titulo-verde">${item.titulo}</div>
    <div className="descricao">${item.descricao}</div>
    <div className="duracao">${item.duracao}</div>
    <div>${`O user ${item.user} tem mais ${
      item.outrosVideo.length ? item.outrosVideo.length : 'sem videos'
    }`}</div>
  </div>
  `,
);

console.log('htmlCards', htmlCards);
