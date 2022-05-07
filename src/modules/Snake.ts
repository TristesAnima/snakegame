class Snake {
  // 🐍头元素
  head: HTMLElement
  // 蛇身体
  bodies: HTMLCollection
  // 蛇容器
  element: HTMLElement

  constructor() {
    this.element = document.querySelector('#snake')!
    this.head = document.querySelector('#snake > div')!
    this.bodies = this.element.getElementsByTagName('div')
  }

  // 获取蛇的坐标(🐍头)
  get x() {
    return this.head.offsetLeft
  }
  get y() {
    return this.head.offsetTop
  }

  // 设置坐标(🐍头)
  set x(value: number) {
    if (this.x === value) return
    // x 值合法范围
    if (value < 0 || value > 290) {
      throw new Error('🐍撞墙了')
    }

    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
      if (value > this.x) {
        value = this.x - 10
      } else {
        value = this.x + 10
      }
    }

    this.head.style.left = `${value}px`
    this.moveBody()
  }
  set y(value: number) {
    if (this.y === value) return
    if (value < 0 || value > 290) {
      throw new Error('🐍撞墙了')
    }

    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      if (value > this.y) {
        value = this.y - 10
      } else {
        value = this.y + 10
      }
    }

    this.head.style.top = `${value}px`
    this.moveBody()
  }

  // 设置蛇增加身体
  addBody() {
    this.element.insertAdjacentHTML("beforeend", "<div></div>")
  }

  moveBody() {
    for (let i = this.bodies.length - 1; i > 0; i--) {
      // 获取前边身体位置
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

      // 将值设置到当前身体
      (this.bodies[i] as HTMLElement).style.left = `${X}px`;
      (this.bodies[i] as HTMLElement).style.top = `${Y}px`;
    }
  }
}

export default Snake