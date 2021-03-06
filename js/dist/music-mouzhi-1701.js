const ap = new APlayer({
  container: document.getElementById('aplayer'),
  autoplay: false,
  loop: 'all',
  order: 'random',
  preload: 'none',
  volume: 1,
  listMaxHeight: 180,
  lrcType: 3,
  mutex: true,
  audio: [
    {
      name: '大象',
      artist: '李志',
      url: 'http://priyjhw3p.bkt.clouddn.com/songs/%E6%9D%8E%E5%BF%97/1701/01.%E5%A4%A7%E8%B1%A1.mp3',
      cover: '/images/musics/mouzhi/cover_1701.jpg',
      lrc: '/lrcs/mouzhi/1701/01.lrc',
    },
    {
      name: '鼠说',
      artist: '李志',
      url: 'http://priyjhw3p.bkt.clouddn.com/songs/%E6%9D%8E%E5%BF%97/1701/02.%E9%BC%A0%E8%AF%B4.mp3',
      cover: '/images/musics/mouzhi/cover_1701.jpg',
      lrc: '/lrcs/mouzhi/1701/02.lrc',
    },
    {
      name: '定西',
      artist: '李志',
      url: 'http://priyjhw3p.bkt.clouddn.com/songs/%E6%9D%8E%E5%BF%97/1701/03.%E5%AE%9A%E8%A5%BF.mp3',
      cover: '/images/musics/mouzhi/cover_1701.jpg',
      lrc: '/lrcs/mouzhi/1701/03.lrc',
    },
    {
      name: '看见',
      artist: '李志',
      url: 'http://priyjhw3p.bkt.clouddn.com/songs/%E6%9D%8E%E5%BF%97/1701/04.%E7%9C%8B%E8%A7%81.mp3',
      cover: '/images/musics/mouzhi/cover_1701.jpg',
      lrc: '/lrcs/mouzhi/1701/04.lrc',
    },
    {
      name: '不多',
      artist: '李志',
      url: 'http://priyjhw3p.bkt.clouddn.com/songs/%E6%9D%8E%E5%BF%97/1701/05.%E4%B8%8D%E5%A4%9A.mp3',
      cover: '/images/musics/mouzhi/cover_1701.jpg',
      lrc: '/lrcs/mouzhi/1701/05.lrc',
    },
    {
      name: '热河',
      artist: '李志',
      url: 'http://priyjhw3p.bkt.clouddn.com/songs/%E6%9D%8E%E5%BF%97/1701/06.%E7%83%AD%E6%B2%B3.mp3',
      cover: '/images/musics/mouzhi/cover_1701.jpg',
      lrc: '/lrcs/mouzhi/1701/06.lrc',
    },
    {
      name: '好威武支持有希望',
      artist: '李志',
      url: 'http://priyjhw3p.bkt.clouddn.com/songs/%E6%9D%8E%E5%BF%97/1701/07.%E5%A5%BD%E5%A8%81%E6%AD%A6%E6%94%AF%E6%8C%81%E6%9C%89%E5%B8%8C%E6%9C%9B.mp3',
      cover: '/images/musics/mouzhi/cover_1701.jpg',
      lrc: '/lrcs/mouzhi/1701/07.lrc',
    },
    {
      name: '方式',
      artist: '李志',
      url: 'http://priyjhw3p.bkt.clouddn.com/songs/%E6%9D%8E%E5%BF%97/1701/08.%E6%96%B9%E5%BC%8F.mp3',
      cover: '/images/musics/mouzhi/cover_1701.jpg',
      lrc: '/lrcs/mouzhi/1701/08.lrc',
    },
  ]
});
