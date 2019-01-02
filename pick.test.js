const wordPicker = require('./word_picker');

test('call test', () => {

    let testData = [
        {
            "word":"今",
            "count":1
        },
        {
            "word":"昨日",
            "count":3
        },
        {
            "word":"明日",
            "count":2
        },
        {
            "word":"平成最後の夏",
            "count":0
        }
    ];


    let result = [];
    for (let i = 0; i < 10000; i++) {
        const wordTable = wordPicker.createWordTable(testData);
        const index = wordPicker.wordPicker(wordTable);
        if (result[index] === undefined) {
            result[index] = 0;
        }
        result[index]++;
    }

    const resultCount = result.map((val, index)=>{
        let res = {
            index:index,
            count:val
        };
        return res;
    }).sort((a,b)=>{
        return a.count < b.count;
    });

    console.log(resultCount);

    expect(resultCount[0].index).toBe(3);
    expect(resultCount[1].index).toBe(0);
    expect(resultCount[2].index).toBe(2);
    expect(resultCount[3].index).toBe(1);

});

