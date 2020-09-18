const ap = new APlayer({
  container: document.getElementById('aplayer'),
  autoplay: false,
  loop: 'all',
  order: 'random',
  preload: 'auto',
  volume: 0.7,
  listFolded: true,
  listMaxHeight: 60,
  lrcType: 3,
  mutex: true,
  audio: [
    {
      name: 'Stay Here Forever',
      artist: 'Jewel',
      url: 'http://www.ytmp3.cn/down/50472.mp3',
      cover: '/images/musics/sweet_and_wild.jpg',
      lrc: '/lrcs/stay_here_forever.lrc',
    },
    {
      name: '天下无双 (Live In Hong Kong, 2013)',
      artist: '陈奕迅',
      url: 'http://dl.stream.qqmusic.qq.com/M500000AhnWz3NWiYT.mp3?vkey=C4D4F3BF26635885AD89EEF834913AA93416343F134D0FBE2AA122C3151FB947A76E9711362D90FEAC65C08E3244796D6210B5B5AA0DE9EF&guid=5150825362&fromtag=1',
      cover: '/images/musics/tianxiawushuang.jpg',
      lrc: '/lrcs/Eason/tian_xia_wu_shuang.lrc',
    },
    {
      name: '两个女孩',
      artist: '莫文蔚',
      url: 'http://dl.stream.qqmusic.qq.com/M500004UsV380vm32o.mp3?vkey=ACF3CF9D85AEA998218C3A1F0C2C2C9FF50B81F874DDB0750772B330E38FB113AB9F45DF51CB13127327D2F711AA49121248E15E9F478E88&guid=5150825362&fromtag=1',
      cover: '/images/musics/mowenwei/shi_er_lou_de_mo_wen_wei.jpg',
      lrc: '/lrcs/mowenwei/shi_er_lou_de_mo_wen_wei.lrc',
    },
    {
      name: 'Right Now (Na Na Na)',
      artist: 'Akon',
      url: 'http://dl.stream.qqmusic.qq.com/M500002pjUZG3IDITo.mp3?vkey=3818FF68851277D9494E566BC1C73ED42A36063FF5D5C1FDF45E4AECCD257D3E4566C4A2BF873D0ED6BEEEA0E5D6D0F3547EA54FC641B65D&guid=5150825362&fromtag=1',
      cover: '/images/musics/right_now.jpg',
      lrc: '/lrcs/right_now.lrc',
    },
    {
      name: '雨夜的浪漫',
      artist: '张学友',
      url: 'http://dl.stream.qqmusic.qq.com/M500000bVEFN3pymI1.mp3?vkey=E26E052C7B49313D042868CA7C4669C3C4E31A4841C447E47F80DE3C7C06B0F873FC238F88A83B16C454ACDDDB02F8782D0B30FDA9BBA8A4&guid=5150825362&fromtag=1',
      cover: '/images/musics/zhangxueyou/Jacky_cheung_15.jpg',
      lrc: '/lrcs/zhangxueyou/yu_ye_de_lang_man.lrc',
    },
    {
      name: '富士山下',
      artist: '陈奕迅',
      url: 'http://dl.stream.qqmusic.qq.com/M500003dtkNk26WhJD.mp3?vkey=D54A563B019AE6B9CF9C652CED4A52D3A31BBE3C8FE320B1B4BFD9D04D201496202FAFF21F17ED1FE3C19F3D4DEC167094D7B361BBC4A896&guid=5150825362&fromtag=1',
      cover: '/images/musics/Eason/What_going_on.jpg',
      lrc: '/lrcs/Eason/fu_shi_shan_xia.lrc',
    },
  ]
});
