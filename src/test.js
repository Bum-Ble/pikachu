const string = `.skin *{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.skin *::before,
.skin *::after {
  box-sizing: border-box;
}
.skin {
  background-color: #ffe600;
  min-height: 50vh;
  position: relative;
}
.nose {
  position: absolute;
  border: solid 14px transparent;
  top: 50%;
  left: 50%;
  margin-left: -14px;
  margin-top: -14px;
  border-top-color: #000;
  border-radius: 50%;
  z-index: 20;
}
@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(5deg);
  }
  66% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.nose:hover {
  animation: wave 300ms infinite linear;
}
.eye {
  width: 36px;
  height: 36px;
  border: 1px solid #000;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -18px;
  margin-top: -18px;
  transform: translateY(10px);
  border-radius: 50%;
  background-color: #2e2e2e;
}

.eye::before {
  content: "";
  display: block;
  width: 16px;
  height: 16px;
  border: 1px solid #000;
  background-color: #fff;
  border-radius: 50%;
  position: relative;
  left: 4px;
  top: 2px;
}
.eye.left {
  transform: translateX(-88px) translateY(-30px);
}
.eye.right {
  transform: translateX(88px) translateY(-30px);
}
.mouth {
  width: 140px;
  height: 100px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -70px;
  transform: translateY(10px);
}
.mouth .up {
  position: relative;
  top: -20px;
}
.mouth .up .lip {
  position: absolute;
  width: 70px;
  height: 22px;
  border-bottom: 2px solid #000;
  left: 50%;
  margin-left: -35px;
  background-color: #ffe600;
  z-index: 10;
}
.mouth .up .lip.left {
  border-radius: 0 0 0 24px;
  border-left: 2px solid #000;
  transform: rotate(-15deg) translateX(-37px);
}
.mouth .up .lip.right {
  border-right: 2px solid #000;
  border-radius: 0 0 24px 0;
  transform: rotate(15deg) translateX(37px);
}
.mouth .down {
  width: 100%;
  height: 100px;
  position: absolute;
  overflow: hidden;
}
.mouth .down .outside {
  width: 160px;
  height: 1000px;
  border: 2px solid #000;
  position: absolute;
  left: 50%;
  margin-left: -80px;
  border-radius: 100px/600px;
  bottom: 0;
  background-color: #8c1d1c;
  overflow: hidden;
}
.mouth .down .outside .inside {
  width: 100px;
  height: 300px;
  position: absolute;
  bottom: -226px;
  border-radius: 100px;
  left: 50%;
  margin-left: -50px;
  background-color: #ea5866;
}
.face {
  position: absolute;
  width: 46px;
  height: 46px;
  border: 2px solid #000;
  background-color: #e8352e;
  left: 50%;
  margin-left: -23px;
  border-radius: 50%;
  top: 50%;
}
.face.left {
  transform: translateX(-160px);
}
.face.right {
  transform: translateX(160px);
}

`

const player = {
  n: 1,
  id: undefined,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  init: () => {
    player.ui.demo.innerHTML = string.substring(0, player.n)
    player.ui.demo2.innerText = string.substring(0, player.n)
    player.bindEvents()
    player.play(100)
  },
  events: {
    '#btnPause': 'pause',
    '#btnBegin': 'begin',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key]
        document.querySelector(key).onclick = player[value]
      }
    }
  },
  run: () => {
    player.n += 1
    if (player.n > string.length) {
      window.clearInterval(player.id)
      return
    }
    player.ui.demo.innerHTML = string.substring(0, player.n)
    player.ui.demo2.innerText = string.substring(0, player.n)
    player.ui.demo2.scrollTop = player.ui.demo2.scrollHeight
  },
  pause: () => {
    window.clearInterval(player.id)
  },
  play: (speed) => {
    player.pause()
    player.id = setInterval(player.run, speed)
  },
  begin: () => {
    player.play(100)
  },
  slow: () => {
    player.play(300)
  },
  normal: () => {
    player.play(100)
  },
  fast: () => {
    player.play(0)
  }
}

player.init()
