// 创建节点
const div = dom.create("<div>newDiv</div>");
console.log(div);

// 新增弟弟节点
dom.after(test, div);

// 新增爸爸节点
const div3 = dom.create('<div id="parent"></div>')
dom.wrap(test, div3)

// 删除后代
const nodes = dom.empty(window.empty)
console.log(nodes)

// 读写属性
dom.attr(test, 'title', 'Hi, I am Sherry')
const title = dom.attr(test, 'title')
console.log(`title: ${title}`)

// 读写文本内容
dom.text(test, '你好，这是新的内容')
dom.text(test)

// 修改style样式
dom.style(test, { border: '1px solid red', color: 'blue' })
console.log(dom.style(test, 'border'))
dom.style(test, 'border', '1px solid black')

// 添加class
dom.class.add(test, 'red')
dom.class.add(test, 'blue')
dom.class.remove(test, 'blue')
console.log(dom.class.has(test, 'blue'))


// 事件监听
const fn = () => {
    console.log('点击了')
}
// 添加事件监听
dom.on(test, 'click', fn)
// 删除事件监听
dom.off(test, 'click', fn)

// 获取标签和标签（查）
const testDiv = dom.find('#test')[0]
console.log(testDiv)
const test2 = dom.find('#test2')[0]
console.log(dom.find('.red', test2)[0])

// 获取父元素
console.log(dom.parent(test))


const s2 = dom.find('#s2')[0]
// 获取兄弟姐妹元素
console.log(dom.siblings(s2))
// 获取弟弟节点
console.log(dom.next(s2))
// 获取哥哥节点
console.log(dom.previous(s2))

// 遍历所有节点
// 为遍历节点元素添加样式：(n) => dom.style(n, 'color', 'red')
const t = dom.find('#travel')[0]
dom.each(dom.children(t), (n) => dom.style(n, 'color', 'red'))

// 获取排行老几
console.log(dom.index(s2))