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
    audio: [
        {
            name: 'B.O.M.O.',
            artist: 'Tatiana Manaois',
            url: 'https://m10.music.126.net/20181207133134/125e299fdd8f40254c4f77779d697ee2/ymusic/e82d/9575/4f35/ef399ea99e6a1126617aec4f65ca91a8.mp3',
            cover: 'https://p1.music.126.net/2cYOs5q1syDBPMk-9rdIBA==/3416182632954257.jpg?param=90y90',
            lrc:'/dist/lrc/bomo.lrc'
        },
        {
            name: 'Wait',
            artist: 'NoMBe',
            url: 'https://m10.music.126.net/20181207190119/3707249a646ea978bcfacb35c16a94d6/ymusic/c1fb/5cb4/3211/cf3fc3f594b616d9217c12a816b1cd86.mp3',
            cover: 'https://p2.music.126.net/BMi28upQKHs1kvXteHiotg==/18705991325076241.jpg?param=130y130',
            lrc:'/dist/lrc/wait.lrc'
        },
        {
            name: '願い~あの頃のキミへ~ Acoustic ver.',
            artist: '當山みれい',
            url: 'https://m10.music.126.net/20181207191618/05c257f354314f9ffc567a8dce981f83/ymusic/e983/4940/535e/a4b161ab07369cf0e7c214e2fe45cfaa.mp3',
            cover: 'https://p1.music.126.net/wRrEvenyms1DxFfTEiwE_Q==/109951163180867808.jpg?param=130y130',
            lrc:'/dist/lrc/negaiJP.lrc'
        },
    ]
});