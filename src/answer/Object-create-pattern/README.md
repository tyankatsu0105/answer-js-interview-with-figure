# Object の作成パターン

[https://github.com/sudheerj/javascript-interview-questions#what-are-the-possible-ways-to-create-objects-in-javascript](https://github.com/sudheerj/javascript-interview-questions#what-are-the-possible-ways-to-create-objects-in-javascript)

1.Object constructor

```js
const object = new Object();
```

[https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/Object](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)

2. Object.create()

```js
const object = Object.create({});
```

[https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/create](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/create)

3. Object initializer

```js
const object = {};
```

[https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)

4.Function constructor

```js
function Person {
  const object = {}

  object.name = 'John'

  return object
}

const object = new Person()
```

[https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/Function](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)

5. Function constructor with prototype

```js
function Person {}
Person.prototype.name = 'John'
const object = new Person()
```

関数に prototype を生やす

6. ES6 Class syntax

```js
class Person {
  constructor(name) {
    this.name = name;
  }
}

const object = new Person("John");
```

[https://codesandbox.io/s/funny-mclean-dbbs7?file=/src/index.js:0-125](https://codesandbox.io/s/funny-mclean-dbbs7?file=/src/index.js:0-125)
babel だと、class は function で作られている
[https://babeljs.io/repl/#?browsers=defaults%2C%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=MYGwhgzhAEAKCmAnCB7AdtA3gKGtY6EALogK7BEqIAUaYAtvAJRa555EAWAlhAHR1G0ALzRB8ANxsAvtlnYAbmETQUAIwBW8CiLHwA7nCSo01AEQBlUgBNO8JGaZTsBNKhDw-IFAHNq6rQonbCA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.14.3&externalPlugins=](https://babeljs.io/repl/#?browsers=defaults%2C%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=MYGwhgzhAEAKCmAnCB7AdtA3gKGtY6EALogK7BEqIAUaYAtvAJRa555EAWAlhAHR1G0ALzRB8ANxsAvtlnYAbmETQUAIwBW8CiLHwA7nCSo01AEQBlUgBNO8JGaZTsBNKhDw-IFAHNq6rQonbCA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.14.3&externalPlugins=)
