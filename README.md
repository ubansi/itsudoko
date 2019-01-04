word picker
--

## 概要
ランダムにワードを選んで文章を作る
「いつどこで誰が何をしたゲーム」を自動でやってくれるスクリプト

## 実行方法
```
npm install
node main.js
```

## テスト方法
`npm test`

エントロピーが付与された選択が行われるかをテストする
試行回数が少ない場合には失敗することがある

## word
単語はwordディレクトリ以下に次のファイルに定義されている

* いつ: `when.json` 
* どこで: `where.json`
* 誰が: `who.json`
* 何を: `what.json`
* どうした: `do_something.json`

### word_converter
`./script/word_converter.js`

を実行することで`raw_word`ディレクトリ内のTSV形式の単語リストを読み込み可能なjson形式に変換することができる。
`raw_word`内の`input.tsv`ファイルを`output.json`形式に変換する際の実行方法は

`node script/word_converter.js input.tsv output.json`

引数無しで実行した場合、
```
./raw_word/do_something.tsv
./raw_word/what.tsv
./raw_word/when.tsv
./raw_word/where.tsv
./raw_word/who.tsv
```
のファイル変換が実行される。

## エントロピーについて
選択した単語は次の抽選では選ばれにくくなるように
0.9の回数乗の係数がかかる

countを選出回数、probabilityを確率係数とすると
```json
[
    {
        "word": "今",
        "count": 1,
        "probability": 1
    },
    {
        "word": "昨日",
        "count": 3,
        "probability": 0.81
    },
    {
        "word": "明日",
        "count": 2,
        "probability": 0.9
    },
    {
        "word": "平成最後の夏",
        "count": 1,
        "probability": 1
    }
]
```
というようになる。
この場合、すべての単語は1回以上使われているため、その回数はcountから引き確率係数を定義する。
例）明日の場合2回となっているが、すべてのワードは1回以上抽選されているため、1を引き

`0.9^(2-1) = 0.9`

となる

probabilityは回数から計算されるため、変更しても常に計算結果で上書きされる。