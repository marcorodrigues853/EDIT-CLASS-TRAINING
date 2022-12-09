//? Array.filter()
/*
 Returns a new array with all elements that pass the test implemented by
 the provided function.
 */

// const arrayIcons = ['😀', '😫', '😀', '😫', '😀', '😫', 3, 4];
// const filtros = arrayIcons.filter((icon) => icon === '😀' || icon <= 3); // ['😀', '😀']
// console.log('filtros', filtros);

const youtubeList = [
  {
    id: 1,
    titulo: 'React',
    descricao: 'reactivo  para caracas',
    duracao: 2,
    imagem: '/img/logo.png',
    user: 'Cristian',
    outrosVideo: [],
  },
  {
    id: 2,
    titulo: 'Javascript',
    descricao: 'mais facil',
    duracao: 5,
    imagem: '/img/js.png',
    user: 'Teresa',
    outrosVideo: [],
  },
  {
    id: 3,
    titulo: 'Html',
    descricao: 'super easy mas nao',
    duracao: 10,
    imagem: '/img/html.png',
    user: 'Jesus',
    outrosVideo: [],
  },
  {
    id: 4,
    titulo: 'CSS',
    descricao: 'CSS  cascade',
    duracao: 5,
    imagem: '/img/css.png',
    user: 'Cristian',
    outrosVideo: [
      { id: 'video1', duracao: '2:00' },
      { id: 'video2', duracao: '3:00' },
    ],
  },
];

// ir buscar todos os video do Cristian

const videosCristian = youtubeList.filter((video) => {
  return video.user === 'Cristian' || video.duracao === 10;
});

console.table(videosCristian);

const coleccaoCamisolas = [
  { id: 1, tamanho: 'S', preco: 10, cor: 'vermelho', modelo: 'A' },
  { id: 2, tamanho: 'M', preco: 12, cor: 'amarelo', modelo: 'A' },
  { id: 2, tamanho: 'S', preco: 15, cor: 'amarelo', modelo: 'B' },
];

const filtroCamisolasAmarelas = coleccaoCamisolas.filter((camisola) => {
  return camisola.cor === 'amarelo';
});

console.table(filtroCamisolasAmarelas);
