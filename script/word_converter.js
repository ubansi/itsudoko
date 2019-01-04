const fs = require('fs');
const readline = require('readline');

const src = process.argv[2];
const dst = process.argv[3];

const INPUT_DIR = 'raw_word';
const OUTPUT_DIR = 'word';

function convert(input, output) {
    console.log(`${input} to ${output}`);
    const stream = fs.createReadStream(input, 'utf8');
    const reader = readline.createInterface({ input: stream });

    let wordData = [];
    reader.on('line', (data) => {
        let word = {
            word: data,
            count: 0,
            probability: 1
        };
        if(data !== ''){
            wordData.push(word);
        }
    });

    reader.on('close', () => {
        console.log(wordData);
        fs.writeFileSync(output, JSON.stringify(wordData, null, 4));
    });
}

function call() {
    if(src === undefined || dst === undefined){
        convert(`./${INPUT_DIR}/what.tsv`, `./${OUTPUT_DIR}/what.json`);
        convert(`./${INPUT_DIR}/when.tsv`, `./${OUTPUT_DIR}/when.json`);
        convert(`./${INPUT_DIR}/who.tsv`, `./${OUTPUT_DIR}/who.json`);
        convert(`./${INPUT_DIR}/where.tsv`, `./${OUTPUT_DIR}/where.json`);
        convert(`./${INPUT_DIR}/do_something.tsv`, `./${OUTPUT_DIR}/do_something.json`);
    }else{
        convert(`./${INPUT_DIR}/${src}`, `./${OUTPUT_DIR}/${dst}`);
    }
}

call();