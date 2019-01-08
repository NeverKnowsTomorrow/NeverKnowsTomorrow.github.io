const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: false,
  audio: [{
      name: "Melodies Of Life",
      artist: '南澤大介',
      url: 'http://music.163.com/song/media/outer/url?id=478352.mp3',
      cover: 'https://p2.music.126.net/BKwll0cjx67McZd9WKuvsg==/5660285859859451.jpg?param=90y90',
    },
    {
      name: "Love Song",
      artist: '小松原俊',
      url: 'http://music.163.com/song/media/outer/url?id=458272.mp3',
      cover: 'https://p2.music.126.net/ccdszadRQ-sAqU9wSJPChw==/856519558080649.jpg?param=90y90',
    },
    {
      name: "Always With Me(木吉他) ",
      artist: 'V.A.',
      url: 'http://music.163.com/song/media/outer/url?id=29802225.mp3',
      cover: 'https://p2.music.126.net/wdD9S0BorAeBN28hE7WLKA==/3294136838291288.jpg?param=90y90',
    },
    {
      name: "Wedding Bell",
      artist: 'DEPAPEPE',
      url: 'http://music.163.com/song/media/outer/url?id=22688493.mp3',
      cover: 'http://p1.music.126.net/e7tHu2ucWtRob8LIoDkzbA==/17801093254116482.jpg?param=130y130',
    },
  ]
});
