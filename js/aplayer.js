!(function() {
  var oldLoadAp = window.onload;
  window.onload = function () {
    oldLoadAp && oldLoadAp();

    new APlayer({
      container: document.getElementById('aplayer'),
      fixed: true,
      autoplay: false,
      loop: 'all',
      order: 'random',
      theme: '#b7daff',
      preload: 'none',
      audio: [
        {
          name: 'home',
          // artist: 'artist1',
          url: '/shubihu.github.io/songs/home.mp3',
          cover: '/shubihu.github.io/img/avatar.png'
        }
      ]
    });
  }
})();
