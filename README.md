# css-compatible-loader

webpack loader，用于css适配。

## 原理
借助rem，把css中的px根据设计稿尺寸，替换成rem，PX替换成px，绝对像素。

比如  
设计稿尺寸宽度 1920px
```css
// css代码
.container{
  width: 200px;
  height: 200px;
  border: 1PX solid #000;
}
// 经过loader转义的代码
.container{
  width: 200/192rem;
  height: 200/192/rem;
  border: 1px solid #000;
}
```
## 使用
```javascript
{
  loader: 'css-compatible-loader',
  options: {
    scale: 1920 // 这里是设计稿尺寸宽度
  }
}
```
除此之外，还需要给html设置font-size，否则rem会以默认值 1rem=16px 来转换。
## 设置font-size
```javascript
const setFontSize = useCallback(() => {
  const bodyWidth = document.documentElement.clientWidth;

  document.documentElement.style.fontSize = `${bodyWidth / 10}px`;
}, []);

useEffect(() => {
  setFontSize();
  window.addEventListener('resize', setFontSize);
  return () => {
    window.removeEventListener('resize', setFontSize);
  };
}, [setFontSize]);
```
