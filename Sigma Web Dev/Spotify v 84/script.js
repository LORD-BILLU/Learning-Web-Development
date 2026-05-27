
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
            songs.push(element.href.split("songs")[1]);
        }
    }

    return songs;

}

let audio=1;

async function main(){
    let songs = await getSongs();

    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];
    for (const song of songs){
        let ele = song.replaceAll("%20"," ");
        let final = ele.replaceAll("%5C"," ");
        songUL.innerHTML = songUL.innerHTML + `<li>
                            <img src="music.svg" class="invert" alt="music-logo">
                            <div class="info">
                                <div>${final}</div>
                                <div>LORD BILLU</div>
                            </div>
                            <img src="play.svg" class="invert" alt="play-pause">
                        </li>`;
    }

    console.log(songs);
    audio = new Audio(songs[0]);
}


main();
