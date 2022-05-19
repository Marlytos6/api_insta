// Esse código carrega o código da API do IFrame Player de forma assíncrona.
var tag = document.createElement('script')
tag.src = "https://www.youtube.com/iframe_api"
var firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
// Esta função cria um <iframe> (e player do YouTube)
// após o download do código da API.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'M7lc1UVf-VE',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}
// A API chamará essa função quando o player de vídeo estiver pronto.
function onPlayerReady(event) {
    event.target.playVideo()
}
// 5. A API chama essa função quando o estado do player muda. //    A função indica que ao reproduzir um vídeo (estado=1), //    o jogador deve jogar por seis segundos e depois parar.
var done = false
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000)
        done = true
    }
}

function stopVideo() {
    player.stopVideo()
}
