// lavar Roupa

function lavarRoupa(cestoRoupa) {
  const cesto = cestoRoupa;
  // abuscar roupa suja
  const roupaSuja = getRoupaSuja(cesto);
  abrirMaquina();
  colocarRoupaSuja(roupaSuja);
  fecharMaquina();
  colocarDetergentes('vernel', 'skip', 'omo');
  definirTempoLavagem(60);
  comecarLavagem();
  tirarRoupa(false);

  const roupaLimpa = roupaSuja;
  estenderRoupa(true, roupaLimpa);
}

function getRoupaSuja(cesto) {
  if (!cesto) throw new Error('Não tens roupa para lavar');
  console.log('apanhei a roupa suja');
  const roupaSuja = cesto;
  return roupaSuja;
}

function abrirMaquina() {
  console.log('abri a maquina', true);
  return true;
}

/// por cada uma das pelas
function colocarRoupaSuja(roupaSuja) {
  roupaSuja.forEach((pecaRoupa) =>
    console.log('colocada na máquina a peça: ', pecaRoupa),
  );
}

function fecharMaquina() {
  return console.log('máquina fechada com sucesso ', true);
}

function colocarDetergentes(amaciador, detergente, pozinho) {
  console.log('misturei o:', amaciador, detergente, pozinho);
  return;
}

function definirTempoLavagem(programa) {
  switch (programa) {
    case (programa = 30):
      console.log('programa de 30 minutos em curso');
      break;
    case (programa = 60):
      console.log('programa de 60 minutos em curso');
      break;
    case (programa = 'customizado'):
      console.log('programa costumizado');
      break;
    default:
      'sem programa';
      break;
  }
}

function comecarLavagem() {
  return console.log('inciou a lavagem', true);
}

function tirarRoupa(lavagemCurso) {
  // esperar que a maquina acabe
  while (lavagemCurso) {
    console.error('Oh zé não podes abrir a máquina');
  }
  console.log('roupa tirada para o cesto');

  return true;
}

function estenderRoupa(estendal, molas, roupa) {
  console.log('estendi a roupa', estendal);
  console.log('estendi a roupa', molas);
  console.log('estendi a roupa', roupa);
}

const cesto1 = ['meias', 'calçoes'];
const cesto2 = ['calças', 'soutiens', 'meias'];
const cesto3 = ['camisola', 'peugas', 'meias', ...cesto1, ...cesto2];
const cesto4 = ['fraldas'];

// lavarRoupa(cesto1);
// lavarRoupa(cesto2);
// lavarRoupa(cesto4);

const baciaRoupa = ['meias', 'calçoes', 'soutiens'];

function planearTarefasSenhoraLimpeza() {
  console.log('=================  LIMPAR CASA =======================');
  limparCasa();
  // estenderRoupa();
  console.log('=================  ESTENDER ROUPA =======================');
  estenderRoupa(true, true, baciaRoupa);

  console.log('=================  LAVARA ROUPA =======================');
  lavarRoupa(cesto4);
}

function limparCasa() {
  console.log('ficou um brilho, limpei em casa');
}

planearTarefasSenhoraLimpeza();
