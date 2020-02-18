function randomvideo(){
  var videoStorage = [ //Stockage des liens vers mes vidéos 
      'video0',
      'video1',
  ],
      video = document.querySelector('video'),
      // Choisis une vidéo aléatoire dans ma variable videoStorage
      activeVideoUrl = videoStorage[Math.round(Math.random() * (videoStorage.length - 1))];  
          
  // Verifie si le lecteur peut lire cette vidéo
  if(video.canPlayType('video/mp4')) {
      video.setAttribute('src', 'content/' + activeVideoUrl + '.mp4');
  }
  else if(video.canPlayType('video/webm')) {
  video.setAttribute('src', 'content/' + activeVideoUrl + '.webm');
  }
}
randomvideo();

// Appelle la fonction randomvideo lorsque la vidéo est terminé.
document.getElementById('myVideo').addEventListener('ended', randomvideo, false);