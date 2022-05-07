// 定义 食物 类
class Food {
  // 定义一个属性表示食物对应的元素
  element: HTMLElement

  constructor() {
    this.element = document.querySelector("#food")!
  }

  // 获取食物 坐标
  get X() {
    return this.element.offsetLeft
  }

  get Y() {
    return this.element.offsetTop
  }

  // 修改食物位置方法
  change() {
    // 生成随机位置
    // 食物最小 0  最大 290  本身10
    let top = Math.round(Math.random() * 29) * 10
    let left = Math.round(Math.random() * 29) * 10

    this.element.style.left = `${left}px`
    this.element.style.top = `${top}px`
  }
}

export default Food