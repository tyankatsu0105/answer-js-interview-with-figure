# JSON とメソッド(What is JSON and its common operations)

[https://github.com/sudheerj/javascript-interview-questions#what-is-json-and-its-common-operations](https://github.com/sudheerj/javascript-interview-questions#what-is-json-and-its-common-operations)

## JSON

JSON(JavaScript Object Notation)を JS では扱えて、JSON オブジェクトを JS は持っている。

## JSON.stringify

オブジェクトを JSON に変換する。
JSON に変換できない undefined やメソッドなどは変換途中で無視される。
`toJSON`メソッドを持つオブジェクトを見つけた場合、それを実行する。

```js
const obj = {
  name: "John",
  toJSON() {
    return this.name;
  },
};

console.log(JSON.stringify(obj));
// "John"
```

## JSON.parse

JSON を解析してオブジェクトに変換する。
解析できない JSON だった場合、該当箇所をスキップではなく、エラーで終了する。

### 参考

- [デコレータと転送, call/apply](https://ja.javascript.info/call-apply-decorators)
- [関数バインディング](https://ja.javascript.info/bind)

<Code name="json-rv3tl" />
