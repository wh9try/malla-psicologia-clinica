// Aquí el arreglo completo con los semestres y materias (solo pongo algunos ejemplos, agrega todos tus semestres)

const malla = [
  {
    semestre: "Semestre 1",
    creditos: 36,
    materias: [
      {
        nombre: "Fundamentos de la Salud Física y emocional",
        clasificacion: ["estudios-generales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Historia de la psicología",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Psicología de la Personalidad",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Anátomo-fisiología",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Psicologia del niño y del adolescente",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Psicologia social",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      }
    ]
  },
  {
    semestre: "Semestre 2",
    creditos: 42,
    materias: [
      {
        nombre: "Antropologia filosófica",
        clasificacion: ["estudios-generales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Fundamentos de psicología clínica",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Psicología de los procesos básicos",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Psicolobiología",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Psicología del adulto y del adulto mayor",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Psicología del aprendizaje",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      },
      {
        nombre: "Psicologia del trabajo",
        clasificacion: ["estudios-profesionales", "obligatoria"],
        creditos: 6,
        prerrequisitos: []
      }
    ]
  },
  // Continúa agregando aquí el resto de los semestres siguiendo el mismo formato...
  // Semestre 3, 4, 5, 6, 7, 8, 9...
];

const container = document.getElementById('container-malla');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalInfo = document.getElementById('modal-info');
const closeBtn = document.querySelector('.close-button');

function crearMateria(materia) {
  const div = document.createElement('div');
  div.classList.add('materia');

  // Clasificaciones para color y borde
  materia.clasificacion.forEach(c => div.classList.add(c));

  // Si tiene prerrequisito, agregar clase para color específico
  if (materia.prerrequisitos && materia.prerrequisitos.length > 0) {
    div.classList.add('prerrequisito');
  }

  div.innerHTML = `
    <div>${materia.nombre}</div>
    <div>Créditos: ${materia.creditos}</div>
    <button class="btn-aprobar">Se aprueba</button>
    <div class="btn-info">+</div>
  `;

  // Botón aprobar
  const btnAprobar = div.querySelector('.btn-aprobar');
  btnAprobar.addEventListener('click', e => {
    e.stopPropagation();
    div.classList.toggle('aprobada');
  });

  // Botón info (+)
  const btnInfo = div.querySelector('.btn-info');
  btnInfo.addEventListener('click', e => {
    e.stopPropagation();
    mostrarModal(materia);
  });

  return div;
}

function mostrarModal(materia) {
  modalTitle.textContent = materia.nombre;
  let info = `Clasificación: ${materia.clasificacion.join(', ')}<br>Créditos: ${materia.creditos}`;
  if (materia.prerrequisitos && materia.prerrequisitos.length > 0) {
    info += `<br>Prerrequisitos: ${materia.prerrequisitos.join(', ')}`;
  }
  modalInfo.innerHTML = info;
  modal.classList.remove('hidden');
}

function cerrarModal() {
  modal.classList.add('hidden');
}

closeBtn.addEventListener('click', cerrarModal);
modal.addEventListener('click', e => {
  if (e.target === modal) cerrarModal();
});

function crearSemestre(semestre) {
  const div = document.createElement('div');
  div.classList.add('semestre');

  div.innerHTML = `
    <h2>${semestre.semestre}</h2>
    <div class="creditos-semestre">Créditos: ${semestre.creditos}</div>
  `;

  const listaMaterias = document.createElement('div');
  listaMaterias.classList.add('materias-lista');

  semestre.materias.forEach(materia => {
    listaMaterias.appendChild(crearMateria(materia));
  });

  div.appendChild(listaMaterias);
  return div;
}

function cargarMalla() {
  malla.forEach(semestre => {
    container.appendChild(crearSemestre(semestre));
  });
}

cargarMalla();
