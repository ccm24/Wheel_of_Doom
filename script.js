let nombres = ["Javi", "Gabriela","Marina", "Mauricio", "Julio", "Andrés", "Daniel", "Cora", "Seif", "Alexandr C", "Alexander W", "Chiara", "Isaías", "Luc", "Matheus","Michelly", "Jorge", "Paul", "Karol", "Santi"];
let participants = nombres.slice();
let listaNombres = document.querySelector(".listaNombres");


window.onload = inicializarListaPredeterminada;
window.addEventListener('load', init_audio);
window.addEventListener('load', iniciar, true);





function inicializarListaPredeterminada() {
    const nombres = document.getElementById('participants');
    nombres.innerHTML = '';
    participants.forEach((participant) => {
        const listItem = document.createElement('li');
        listItem.textContent = participant;
        nombres.appendChild(listItem);
    });
}


function agregarParticipante() {
    const participantInput = document.getElementById('participant');
    const participantName = participantInput.value.trim();
    if (participantName !== '') {
        participants.push(participantName);
        participantInput.value = '';
        actualizarListaParticipantes();
    }
}


function actualizarListaParticipantes() {
    const participantsList = document.getElementById('participants');
    participantsList.innerHTML = '';
    participants.forEach((participant) => {
        const listItem = document.createElement('li');
        listItem.textContent = participant;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '';
        deleteButton.addEventListener('click', function (){
            const index = participants.indexOf(participant);
            if (index !== -1){
                participants.splice(index, 1);
                actualizarListaParticipantes(); 
            }
        });
        listItem.appendChild(deleteButton);
        participantsList.appendChild(listItem); 
    });
}


function seleccionarGanador() {
    const winnerDisplay = document.getElementById('winner');
    if (participants.length === 0) {
        document.getElementById('winner-name').textContent = "Quieres Jugar otra vez?";
        return;
    }else{
        const ganadorIndex = Math.floor(Math.random() * participants.length);
        const ganador = participants[ganadorIndex];
        document.getElementById('winner-name').textContent = ganador;
        winnerDisplay.style.display = 'block';
        participants = participants.filter((participant, index) => index !== ganadorIndex);
        eliminatedParticipants.push(ganador);
    }
    
    actualizarListaParticipantes();
}


function init_audio(){
    let audio = new Audio('musica/cancion_saw.mp3');
    console.log(audio);
    audio.volume = 0.02;
    audio.play();
}


function iniciar() {
    let boton=document.getElementById('boton');
    boton.addEventListener('click', presionar, false);
}


function presionar() {
    let audio=document.getElementById('audio');
    audio.play();
    audio.volume = 0.5;

}


document.getElementById("boton").onclick = function (){
    document.getElementsByClassName("teleVideo")[0].classList.toggle("visible");
}

function playVideo(){
    let video = document.getElementById("videoSaw");
    video.volume = 0.1;
    video.play();
    seleccionarGanador();
}

