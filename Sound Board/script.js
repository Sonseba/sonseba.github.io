const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']
currentSound = null

sounds.forEach(sound => {
        const btn = document.createElement('button');
        btn.classList.add('btn');

        btn.innerText = sound;

        btn.addEventListener('click', () => {
            if (currentSound) {
                currentSound.pause();
                currentSound.currentTime = 0;

            }
            currentSound = document.getElementById(sound);
            currentSound.play();
        })

        document.getElementById('buttons').appendChild(btn);

    }
)
