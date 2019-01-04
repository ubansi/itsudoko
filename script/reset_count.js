const fs = require('fs');

// resource
const when = require('../word/when.json');
const where = require('../word/where.json');
const who = require('../word/who.json');
const what = require('../word/what.json');
const doSomething = require('../word/do_something.json');

function resetCount(words) {
    return words.map((word) => {
        let obj = {
            word: word.word,
            count: 0,
            probability: 1
        }
        return obj;
    })
}

function call(){
    const resetedWhen = resetCount(when);
    const resetedWhere = resetCount(where);
    const resetedWho = resetCount(who);
    const resetedWhat = resetCount(what);
    const resetedDoSomething = resetCount(doSomething);

    fs.writeFileSync('./word/when.json',JSON.stringify(resetedWhen,null,4));
    fs.writeFileSync('./word/where.json',JSON.stringify(resetedWhere,null,4));
    fs.writeFileSync('./word/who.json',JSON.stringify(resetedWho,null,4));
    fs.writeFileSync('./word/what.json',JSON.stringify(resetedWhat,null,4));
    fs.writeFileSync('./word/do_something.json',JSON.stringify(resetedDoSomething,null,4));
}

call();