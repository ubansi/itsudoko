word picker
--

# 概要
ランダムにワードを選んで文章を作る
「いつどこで誰が何をしたゲーム」を自動でやってくれるスクリプト

# word
単語はwordディレクトリ以下に次のファイルに定義されている

* いつ: `when.json` 
* どこで: `where.json`
* 誰が: `who.json`
* 何を: `what.json`
* どうした: `do_something.json`

# エントロピー
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