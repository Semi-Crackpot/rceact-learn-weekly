# FrontEnd
## fixed宽度问题：
将min-width、max-width和width设计成和父组件一致

## ValueError: invalid mode: 'rU' while trying to load binding.gyp
python3.11 移除了模式'U'，python回滚至3.10即可 <br/>
https://docs.python.org/3/whatsnew/3.11.html#porting-to-python-3-11

## ios设备下new Data()方法显示NAN
❎ new Date('2015-01-01 00:00:00') <br/>
✅ new Date('2015/01/01 00:00:00') <br/>
### 解决方法
```
let date = "2020-08-08 08:08:08"
let now = new Date(date.replace(/-/g,'/'))
```

## 事件问题：
window注册事件的回调会脱离react组件的状态

## display问题：
display:flex
align-items: baseline 对齐的是第一个元素

## try catch 不能catch异步代码，要在内部catch！！！
❎
```
try {
  setTimeout(() => {
    let a = null
    console.log(a.b)
  }, 100)
} catch (e) {
  console.log('抓到了错误～～～', e)
}
// 没抓到错误，抛出TypeError: Cannot read property 'b' of null
```
## useState初始化可以填函数
```
const [isRight, setIsRight] = useState(getState())
const getState = () => {
  return true
}
```

## 阻止手机端回车触发 表单提交
```
<input style={{display: 'none'}}></input>
```

## React 多个类名
```
className={value ? styles.cn1 : `${styles.cn1} ${styles.cn2}`}
className={classNames([styles.cn1, { [styles.cn2]: !value }])}
```
