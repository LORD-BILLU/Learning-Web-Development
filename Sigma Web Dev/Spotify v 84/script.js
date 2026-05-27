
async function getSongs(){
    let a = await fetch("http://127.0.0.1:3000/songs/");
    let response = await a.text();
    console.log(response);
    let div = document.createElement('div');
    div.innerHTML = response;
    let as = div.getElementsByTagName('a');

    let songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if(element.href.endsWith(".mp3")){
            let ele = element.href.split("songs")[1].replaceAll("%20"," ");
            let final = ele.replaceAll("%5C"," ");
            final = final.trim();
            songs.push(final);
        }
    }

    return songs;

}

let current_sng = new Audio();
let curr_idx = -1;

async function main(){
    let songs = await getSongs();

    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];
    for (const song of songs){
        songUL.innerHTML = songUL.innerHTML + `<li>
                            <img src="music.svg" class="invert" alt="music-logo">
                            <div class="info">
                                <div class="name">${song}</div>
                                <div>LORD BILLU</div>
                            </div>
                            <img src="play.svg" class="invert" alt="play-pause">
                        </li>`;
    }

    console.log(songs);
    
    let song1 = Array.from(document.querySelector(".songList").getElementsByTagName("ul")[0].getElementsByTagName("li"));
    song1.forEach((element,index) => {
        let n1 = element.querySelector(".name").innerText;
        element.addEventListener('click',()=>{
            let path = `songs/${n1}`;

            current_sng.pause();
            current_sng.currentTime = 0;

            current_sng.src = path;
            curr_idx = index;
            current_sng.play();
        });
    });

    const prev = document.getElementById("prev");
    const play = document.getElementById("play");
    const next = document.getElementById("next");

    prev.addEventListener("click",()=>{
        if(curr_idx===0){
            curr_idx=9;
        }
        else{
            curr_idx--;
        }

        let path = `songs/${songs[curr_idx]}`;

        current_sng.pause();
        current_sng.currentTime = 0;

        current_sng.src = path;
            
        current_sng.play();

    });

    play.addEventListener("click",()=>{
        
        
    });

    next.addEventListener("click",()=>{
        if(curr_idx===9){
            curr_idx=0;
        }
        else{
            curr_idx++;
        }

        let path = `songs/${songs[curr_idx]}`;

        current_sng.pause();
        current_sng.currentTime = 0;

        current_sng.src = path;
            
        current_sng.play();

    });
}


main();
