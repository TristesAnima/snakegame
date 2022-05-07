// 控制其他所有类
import Snake from "./Snake"
import Food from "./Food"
import ScorePanel from "./ScorePanel"

class GameControl {
  snake: Snake
  food: Food
  scorePanel: ScorePanel

  // 创建属性 储存按键方向
  direction: string = ''
  // 创建一个属性 记录 游戏 是否结束
  isLive = true

  constructor() {
    this.snake = new Snake()
    this.food = new Food()
    this.scorePanel = new ScorePanel()
    this.init()
  }

  // 游戏初始化 调用后游戏立即开始
  init() {
    // 绑定键盘事件
    document.addEventListener('keydown', this.keydownHandler.bind(this))
    this.run()
  }

  // ArrowUp
  // ArrowDown
  // ArrowLeft
  // ArrowRight

  // 键盘按下函数
  keydownHandler(e: KeyboardEvent) {
    this.direction = e.key
  }


  run() {
    let X = this.snake.x
    let Y = this.snake.y

    // 修改 X Y 值
    switch (this.direction) {
      case 'ArrowUp':
      case 'Up':
        Y -= 10
        break;
      case 'ArrowDown':
      case 'Dowm':
        Y += 10
        break;
      case 'ArrowLeft':
      case 'Left':
        X -= 10
        break;
      case 'ArrowRight':
      case 'Right':
        X += 10
        break;
    }

    this.checkEat(X, Y)

    try {
      this.snake.x = X
      this.snake.y = Y
    } catch (e: any) {
      alert(`${e.message}！ Gameover！`)
      
      // 游戏结束
      this.isLive = false
    }

    this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
  }

  // 检查蛇是否吃到了食物
  checkEat(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      // 重置位置
      this.food.change()
      // 分数增加
      this.scorePanel.addScore()
      // 增加身体
      this.snake.addBody()
    }
  }

}

export default GameControl