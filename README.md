# fis3-parser-art-template
parser artTemplate use fis/fis3

```js
fis3.match('*.html',{
  parser: fis.plugin('art-template',{
    dataFile: '/_data.js',
		_data: {}
	})
})
```
