// 记分牌 类
class ScorePanel {
  score: number = 0
  level: number = 1
  scoreEle: HTMLElement
  levelEle: HTMLElement

  // 等级限制
  maxLevel: number
  // 多少分升级
  upScore: number

  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreEle = document.querySelector('#score')!
    this.levelEle = document.querySelector('#level')!
    this.maxLevel = maxLevel
    this.upScore = upScore
  }

  // 加分
  addScore() {
    this.score++
    this.scoreEle.innerHTML = `${this.score}`
    if (this.score % this.upScore === 0) {
      this.levelUp()
    }
  }

  // 提升等级
  levelUp() {
    this.level++
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = `${this.level}`
    }
  }
}

export default ScorePanel