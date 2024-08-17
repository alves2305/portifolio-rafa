
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


function mostrarSkills(tipo) {
  const backSkills = document.querySelector('.contain-skils-back');
  const frontSkills = document.querySelector('.contain-skils-front');
  const ferramentasSkills = document.querySelector('.contain-skils-ferramentas');

  if (tipo === 'back') {
    backSkills.style.display = 'flex';
    frontSkills.style.display = 'none';
    ferramentasSkills.style.display = 'none';
  } else if (tipo === 'front') {
    backSkills.style.display = 'none';
    frontSkills.style.display = 'flex';
    ferramentasSkills.style.display = 'none';
  } else if (tipo === 'ferramentas') {
    backSkills.style.display = 'none';
    frontSkills.style.display = 'none';
    ferramentasSkills.style.display = 'flex';
  }
}

function abrirArquivos() {
  // URL do primeiro arquivo (currículo)
  const curriculoURL = "arquivos/curriculo.pdf";
  
  // URL do segundo arquivo (certificado)
  const certificadoURL = "arquivos/certificado.pdf";

  // Abrir uma nova aba para o currículo
  window.open(curriculoURL, '_blank');

  // Abrir uma nova aba para o certificado
  window.open(certificadoURL, '_blank');
}
