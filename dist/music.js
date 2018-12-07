const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: false,
  loop: 'all',
  volume: 0.5,
  listFolded: true,
  listMaxHeight: 60,
  theme: '#FFF0F5',
  preload: 'auto',
  lrcType: 3,
  order: 'list',
  audio: [{
      name: 'B.O.M.O.',
      artist: 'Tatiana Manaois',
      url: 'http://music.163.com/song/media/outer/url?id=418708818.mp3',
      cover: 'https://p1.music.126.net/2cYOs5q1syDBPMk-9rdIBA==/3416182632954257.jpg?param=90y90',
      lrc: '/dist/lrc/bomo.lrc'
    },
    {
      name: 'Wait',
      artist: 'NoMBe',
      url: 'http://music.163.com/song/media/outer/url?id=454966480.mp3',
      cover: 'https://p2.music.126.net/BMi28upQKHs1kvXteHiotg==/18705991325076241.jpg?param=130y130',
      lrc: '/dist/lrc/wait.lrc'
    },
    // {
    //     name: '願い~あの頃のキミへ~ Acoustic ver.',
    //     artist: '當山みれい',
    //     url: 'https://m10.music.126.net/20181207191618/05c257f354314f9ffc567a8dce981f83/ymusic/e983/4940/535e/a4b161ab07369cf0e7c214e2fe45cfaa.mp3',
    //     cover: 'https://p1.music.126.net/wRrEvenyms1DxFfTEiwE_Q==/109951163180867808.jpg?param=130y130',
    //     lrc:'/dist/lrc/negaiJP.lrc'
    // },
// 删除前面的#号，后面加上media/outer/url，结尾+.mp3 https变http 没版权的也可以
  ]
});