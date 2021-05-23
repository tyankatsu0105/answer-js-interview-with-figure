# Object の作成パターン(What are the possible ways to create objects in JavaScript)

[https://github.com/sudheerj/javascript-interview-questions#what-are-the-possible-ways-to-create-objects-in-javascript](https://github.com/sudheerj/javascript-interview-questions#what-are-the-possible-ways-to-create-objects-in-javascript)

## Object constructor

```js
const object = new Object();
```

[https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/Object](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/Object)

## Object.create()

```js
const object = Object.create({});
```

[https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/create](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/create)

## Object initializer

```js
const object = {};
```

[https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer)

## Function constructor

```js
function Person {
  const object = {}

  object.name = 'John'

  return object
}

const object = new Person()
```

[https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/Function](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)

## Function constructor with prototype

```js
function Person {}
Person.prototype.name = 'John'
const object = new Person()
```

関数に prototype を生やす

## ES6 Class syntax

```js
class Person {
  constructor(name) {
    this.name = name;
  }
}

const object = new Person("John");
```

[babel だと、class は function で作られている](https://babeljs.io/repl/#?browsers=defaults%2C%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=MYGwhgzhAEAKCmAnCB7AdtA3gKGtY6EALogK7BEqIAUaYAtvAJRa555EAWAlhAHR1G0ALzRB8ANxsAvtlnYAbmETQUAIwBW8CiLHwA7nCSo01AEQBlUgBNO8JGaZTsBNKhDw-IFAHNq6rQonbCA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.14.3&externalPlugins=)

<Code name="funny-mclean-dbbs7" />
