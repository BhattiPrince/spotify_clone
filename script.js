// function play(e) {
//     let myAudio = document.querySelector("audio");
//     myAudio.paused ? myAudio.play() : myAudio.pause();
//     e.classList.toggle('pressed')
//   }

//   type="module"
//   src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
//   nomodule
//   src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"




function playPause(e) {
    let myAudio = document.getElementById("audioPlayer");
    let playIcon = e.querySelector('i');

    if (myAudio.paused) {
        myAudio.play();
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
    } else {
        myAudio.pause();
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
    }
    
    e.classList.toggle('pressed');
}

let seekBar = document.getElementById('seekBar');
let audioPlayer = document.getElementById('audioPlayer');

audioPlayer.ontimeupdate = function() {
    let value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    seekBar.value = value;
};

function seekAudio() {
    let seekTo = audioPlayer.duration * (seekBar.value / 100);
    audioPlayer.currentTime = seekTo;
}


// btns

function changeColor(clickedButton) {
    // Get all buttons with the id 'mm'
    let buttons = document.querySelectorAll('#mm');

    // Remove the 'active' class from all buttons
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });

    // Add the 'active' class to the clicked button
    clickedButton.classList.add('active');
}



function togglePlayPause(button) {
    const audio = document.getElementById('mahadev_audio');
    const icon = button.querySelector('i');

    if (audio.paused) {
        audio.play();
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    } else {
        audio.pause();
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    }
}

function famous(button) {
    const audio = document.getElementById('famous');
    const icon = button.querySelector('i');

    if (audio.paused) {
        audio.play();
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    } else {
        audio.pause();
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    }
}

function love_song(button) {
    const audio = document.getElementById('love_audio');
    const icon = button.querySelector('i');

    if (audio.paused) {
        audio.play();
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    } else {
        audio.pause();
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    }
}

function arijit_audio(button) {
    const audio = document.getElementById('arijit_audio');
    const icon = button.querySelector('i');

    if (audio.paused) {
        audio.play();
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    } else {
        audio.pause();
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    }
}

function valantine_audio(button) {
    const audio = document.getElementById('valantine_audio');
    const icon = button.querySelector('i');

    if (audio.paused) {
        audio.play();
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    } else {
        audio.pause();
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    }
}

function raheman_audio(button) {
    const audio = document.getElementById('raheman_audio');
    const icon = button.querySelector('i');

    if (audio.paused) {
        audio.play();
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    } else {
        audio.pause();
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    }
}

function gym_audio(button) {
    const audio = document.getElementById('gym_audio');
    const icon = button.querySelector('i');

    if (audio.paused) {
        audio.play();
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    } else {
        audio.pause();
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    }
}

function malang(button) {
    const audio = document.getElementById('malang');
    const icon = button.querySelector('i');

    if (audio.paused) {
        audio.play();
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    } else {
        audio.pause();
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    }
}



function click_mobile(){
    
    var element = document.getElementById("part_one_");
    var elementt = document.getElementById("kkk");

    
        element.classList.add("active");
        elementt.classList.add("hero_bbb");
    
    


}


function remove_bar(){
    
    var element = document.getElementById("part_one_");
    var elementt = document.getElementById("kkk");

    
        element.classList.remove("active");
        elementt.classList.remove("hero_bbb");
    
}