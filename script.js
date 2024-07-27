
function mostrarProjetos(tipo) {
  const frontEndProjects = document.querySelector('.contain-projetos-front');
  const backEndProjects = document.querySelector('.contain-projetos-back');

  if (tipo === 'front') {
    frontEndProjects.style.display = 'flex';
    backEndProjects.style.display = 'none';
  } else if (tipo === 'back') {
    frontEndProjects.style.display = 'none';
    backEndProjects.style.display = 'flex';
  }
}

