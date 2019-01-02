exports.wordPicker = wordPicker;
exports.createWordTable = createWordTable;
/**
 * 
 * @param {Array.<object>} wordsTable
 */
function wordPicker(words){

    const randMax = words
        .map((word) => word.probability)
        .reduce((accumlator, currentValue) => {
            return Number(accumlator) + Number(currentValue);
        });

    const randValue = rand(randMax);

    let seekVal = 0;
    let selectIndex;
    words.some((wordObj, index)=>{
        seekVal += wordObj.probability;

        if(seekVal > randValue){
            selectIndex = index;
            return true;
        }
    });

    return selectIndex;
}

/**
 * 利用数に応じた確率用テーブルを作成する
 * @param {Array.<object>} words
 * @return {Array.<object>}
 */
function createWordTable(words) {

    let min = minCount(words);
    let table = words.map(wordObj => {
        // 最小利用回数を一様に減算することで、確率の発散を防ぐ
        let superior = wordObj.count - min;
        // 利用数の多い単語に対して0.9の突出回数乗することで選ばれにくくする
        wordObj.probability = Math.pow(0.9, superior);

        return wordObj;
    });

    return table;
}

/**
 * 最小利用数を割り出す
 * @param {array} words 
 */
function minCount(words) {
    let min;
    words.forEach(word => {
        if (min === undefined) {
            min = word.count;
        }
        if (min > word.count) {
            min = word.count;
        }
    });

    return min;
}

/**
 * 0 ~ max までの乱数を生成する関数
 * @param {int} max 最大値(戻り値に含まれる)
 * @return {int} 整数値
 */
function rand(max = 1) {
    let number = Math.random() * max;

    return number;
}