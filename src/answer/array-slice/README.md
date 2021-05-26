# array slice(What is the purpose of the array slice method)

[https://github.com/sudheerj/javascript-interview-questions#what-is-the-purpose-of-the-array-slice-method](https://github.com/sudheerj/javascript-interview-questions#what-is-the-purpose-of-the-array-slice-method)

## できること

Array#slice は第 1 引数に start、第 2 引数に end となる index 番号を入れると、その箇所を切り取った新たな配列を返す

## 負の数

start と end に-1 みたいな負の数を入れると、配列の終わりからの index 番号になる。

## start と end の index 番号

start は 0 だと配列の 1 つ目という意味だが、end は 1 が一つという意味になる。
`slice(0,0)`は配列 1 つ目だけの array 生成ではなくて、0 個の要素の配列になる。
ecma spec 的に、end の値は`relativeEnd`と呼ばれていて、start と相対的な距離って意味だと思うから、slice(0,0)だと、配列 0 番目から 0 こ離れた場所まで slice って意味になり要素 0 個の配列ができる。

## shallow copy

slice は shallow copy なので、1 階層目以外を変更すると、slice 元に影響が出る

<Code name="array-slice-hn962" />
