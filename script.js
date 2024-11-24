function openModal(character) {
  alert(`Exibir informações detalhadas sobre ${character}.`);
}

function openVideo(trailerId) {
  alert(`Abrir vídeo do trailer: ${trailerId}`);
}

function handleSubmit(event) {
  event.preventDefault();
  document.getElementById('success-message').style.display = 'block';
}

const modal = document.createElement('div');
modal.id = 'character-modal';
modal.style.display = 'none';
modal.innerHTML = `
  <div class="modal-content">
    <span id="close-modal">&times;</span>
    <div id="modal-info"></div>
  </div>
`;
document.body.appendChild(modal);

function openModal(character) {
  const modalInfo = {
    naruto: {
      name: "Naruto Uzumaki",
      img: "./assets/naruto.jpg",
      description: "Naruto Uzumaki é o protagonista da série Naruto. Ele é um ninja determinado e sonha em se tornar o Hokage de sua vila, buscando respeito e reconhecimento. Ao longo da série, ele enfrenta desafios enormes e cresce como líder e guerreiro. Seu maior poder é a Raposa de Nove Caudas selada dentro de si, o que lhe confere uma força imensa.",
    },
    sasuke: {
      name: "Sasuke Uchiha",
      img: "./assets/sasuke.jpg",
      description: "Sasuke Uchiha é um prodígio e o último sobrevivente do clã Uchiha. Inicialmente, ele é um dos melhores ninjas da sua geração, mas após a destruição de sua vila natal e a morte de seu irmão, ele busca vingança contra seu irmão Itachi. Sua jornada de ódio e vingança se torna central na história de Naruto.",
    },
    kakashi: {
      name: "Kakashi Hatake",
      img: "./assets/kakashi.jpg",
      description: "Kakashi Hatake é um dos ninjas mais habilidosos da Vila da Folha. Ele é o mentor de Naruto, Sasuke e Sakura, guiando-os nas suas aventuras e treinamento. Kakashi é famoso por seu Sharingan, o qual ele herdou de seu amigo Obito Uchiha, e sua técnica lendária de copiar jutsus.",
    },
  };

  const { name, img, description } = modalInfo[character];
  const modalContent = `
    <h2>${name}</h2>
    <img src="${img}" alt="${name}">
    <p>${description}</p>
  `;

  document.getElementById('modal-info').innerHTML = modalContent;
  modal.style.display = 'block';
}

document.getElementById('close-modal').onclick = () => {
  modal.style.display = 'none';
};

window.onclick = (event) => {
  if (event.target === modal) modal.style.display = 'none';
};

const videoModal = document.createElement('div');
videoModal.id = 'video-modal';
videoModal.style.display = 'none';
videoModal.innerHTML = `
  <div class="modal-content">
    <iframe id="video-frame" width="560" height="315" frameborder="0" allowfullscreen></iframe>
  </div>
`;
document.body.appendChild(videoModal);

function openVideo(trailerId) {
    const videoIds = {
      trailer1: 'S7Pdiekr3rU',  
      trailer2: 'In9eYQtLUwA',
      trailer3: 'ljBDO4Wp4do'
    };
  
    const videoId = videoIds[trailerId]; 
  
    if (videoId) {
      const iframe = document.createElement('iframe');
      iframe.width = '560';
      iframe.height = '315';
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      iframe.frameBorder = '0';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
  
      const modal = document.createElement('div');
      modal.id = 'video-modal';
      modal.classList.add('modal');
      modal.innerHTML = `
        <div class="modal-content">
          <div class="video-container">
            ${iframe.outerHTML}
          </div>
        </div>
      `;
      document.body.appendChild(modal);
  
      modal.addEventListener('click', (event) => {
        if (event.target === modal) {
          modal.style.display = 'none';
          document.body.removeChild(modal);
        }
      });
    }
  }



window.onclick = (event) => {
  if (event.target === videoModal) videoModal.style.display = 'none';
};

const toggle = document.getElementById('theme-toggle');


document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    toggle.textContent = '☀️';
  }
});

toggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-theme');
  toggle.textContent = isDark ? '☀️' : '🌙'; 
  localStorage.setItem('theme', isDark ? 'dark' : 'light'); 
});


function applyThemeToModals() {
    const modals = document.querySelectorAll('#character-modal, #video-modal');
    modals.forEach((modal) => {
      if (document.body.classList.contains('dark-theme')) {
        modal.classList.add('dark-modal');
      } else {
        modal.classList.remove('dark-modal');
      }
    });
  }
  
  toggle.addEventListener('click', applyThemeToModals);
  
  document.addEventListener('DOMContentLoaded', applyThemeToModals);