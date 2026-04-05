const audioManager = uni.getBackgroundAudioManager();
audioManager.title = '致爱丽丝';
audioManager.singer = '暂无';
audioManager.coverImgUrl = 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/7fbf26a0-4f4a-11eb-b680-7980c8a877b8.png';
audioManager.src = 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3';
audioManager.stop();

export default audioManager