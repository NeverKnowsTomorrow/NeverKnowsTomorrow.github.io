const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: false,
  audio: [{
      name: "Melodies Of Life",
      artist: '南澤大介',
      url: 'https://m10.music.126.net/20190106220009/91f4d8aceb1a8ae061534208d83c880a/ymusic/14fe/ef96/fc7e/c8c10269843499ccdfe6391f5a49a3b8.mp3',
      cover: 'https://p2.music.126.net/BKwll0cjx67McZd9WKuvsg==/5660285859859451.jpg?param=90y90',
    },
    {
      name: "Love Song",
      artist: '小松原俊',
      url: 'https://m10.music.126.net/20190108094637/9d09e6d9477fea5ae9951489633af17a/ymusic/d04e/382a/510a/d0675eac99352519ef9d07425a66ed0b.mp3',
      cover: 'https://p2.music.126.net/ccdszadRQ-sAqU9wSJPChw==/856519558080649.jpg?param=90y90',
    },
    {
      name: "Always With Me(木吉他) ",
      artist: 'V.A.',
      url: 'https://m10.music.126.net/20190108094647/9c020446927ae14898a96a5849e5894b/ymusic/8695/8f24/b40c/f63ef34272d163b7c5681119f7185018.mp3',
      cover: 'https://p2.music.126.net/wdD9S0BorAeBN28hE7WLKA==/3294136838291288.jpg?param=90y90',
    },
    {
      name: "Wedding Bell",
      artist: 'DEPAPEPE',
      url: 'https://m10.music.126.net/20190108095346/1ff0f5a3901329c29936c1afc275033e/ymusic/fa8d/f480/dd60/bf313a60f7607103cc24226564dd3cf8.mp3',
      cover: 'http://p1.music.126.net/e7tHu2ucWtRob8LIoDkzbA==/17801093254116482.jpg?param=130y130',
    },
  ]
});
