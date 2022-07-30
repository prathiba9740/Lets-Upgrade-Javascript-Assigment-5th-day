let music = [
    {
        id: 1,
        name: "Bombe helutaithe",
        artist: "Vijay Prakash",
        audioSrc: "audio/Bombe-helutaithe.mp3",
        imageSrc: "images/Rajkumara.jpg"
    },
    {
        id: 2,
        name: "Appa I love you",
        artist: "Anuradha Bhat",
        audioSrc: "audio/Appa I Love You.mp3",
        imageSrc: "images/Chowka.jpg"
    },

    {
        id: 3,
        name: "O Nanna Kanne",
        artist: "Siddarth Belmannu",
        audioSrc: "audio/O Nanna Kanne.mp3",
        imageSrc: "images/Jaga-Malla.jpg"
    },
    {
        id: 4,
        name: "Yaaru Yaaru",
        artist: "Shankar Mahadevan",
        audioSrc: "audio/Yaaru Yaaru.mp3",
        imageSrc: "images/Hatavadi.jpg"
    },

    {
        id: 5,
        name: "Chithaara moodo veleli",
        artist: "Priyanka Bharali",
        audioSrc: "audio/Chithaara.mp3",
        imageSrc: "images/Ugramm.jpg"
    }
]


for (let i = 0; i < music.length; i++) {

    let playerInfo = document.createElement("div");
    playerInfo.classList.add("player-info");

    let songThumbnail = document.createElement("div");
    songThumbnail.classList.add("song-thumbnail");

    let img = document.createElement("img");
    img.src = music[i].imageSrc;


    songThumbnail.append(img);
    playerInfo.append(songThumbnail);

    let songDetails = document.createElement("div");
    songDetails.classList.add("song-details");

    let h2 = document.createElement("h2");
    h2.classList.add("song-names-list");
    h2.append(music[i].name)
    songDetails.append(h2);

    let h3 = document.createElement("h3");
    h3.classList.add("song-artist-list");
    h3.append(music[i].artist)
    songDetails.append(h3);

    playerInfo.append(songDetails);

    playerInfo.addEventListener("click", function () {
        playMusic(music[i]);
    });

    document.querySelector(".player-list").append(playerInfo);


}

function playMusic(music) {
    document.querySelector(".main-thumbnail-img").src = music.imageSrc;
    document.querySelector(".song-name").innerText = music.name;
    document.querySelector(".song-artist").innerText = music.artist;
    document.querySelector(".audio").src = music.audioSrc;
}




