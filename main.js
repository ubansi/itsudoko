const fs = require('fs');

// script
const wordPicker = require('./word_picker');

// fileName
const whenJson = './word/when.json';
const whereJson = './word/where.json';
const whoJson = './word/who.json';
const whatJson = './word/what.json';
const doSomethingJson = './word/do_something.json';

// first read
let when = require(whenJson);
let where = require(whereJson);
let who = require(whoJson);
let what = require(whatJson);
let doSomething = require(doSomethingJson);

function wordPick(words) {
    const wordTable = wordPicker.createWordTable(words);
    const index = wordPicker.wordPicker(wordTable);

    words[index].count++;

    // 更新後の確率を再計算(処理に影響はない)
    words = wordPicker.createWordTable(words);

    return index;
};

function makeSentence() {
    const whenIndex = wordPick(when);
    const whereIndex = wordPick(where);
    const whoIndex = wordPick(who);
    const whatIndex = wordPick(what);
    const doSomethingIndex = wordPick(doSomething);

    const whenWord = when[whenIndex].word;
    const whereWord = where[whereIndex].word;
    const whoWord = who[whoIndex].word;
    const whatWord = what[whatIndex].word;
    const doSomethingWord = doSomething[doSomethingIndex].word;

    const result = `${whenWord}、${whereWord}で${whoWord}が${whatWord}を${doSomethingWord}`;

    console.log(result);
}

function call(){
    
    makeSentence();

    // console.log(when);
    // console.log(where);
    // console.log(who);
    // console.log(what);
    // console.log(doSomething);

    fs.writeFileSync(whenJson,JSON.stringify(when,null,4));
    fs.writeFileSync(whereJson,JSON.stringify(where,null,4));
    fs.writeFileSync(whoJson,JSON.stringify(who,null,4));
    fs.writeFileSync(whatJson,JSON.stringify(what,null,4));
    fs.writeFileSync(doSomethingJson,JSON.stringify(doSomething,null,4));

}

call();
