const fs = require('fs');

// resource
const when = require('./word/when.json');
const where = require('./word/where.json');
const who = require('./word/who.json');
const what = require('./word/what.json');
const doSomething = require('./word/do_something.json');

function resetCount(words) {
    return words.map((word) => {
        word.count = 0;
        return word;
    })
}

function call(){
    const resetedWhen = resetCount(when);
    const resetedWhere = resetCount(where);
    const resetedWho = resetCount(who);
    const resetedWhat = resetCount(what);
    const resetedDoSomething = resetCount(doSomething);

    fs.writeFileSync('./word/when.json',JSON.stringify(resetedWhen));
    fs.writeFileSync('./word/where.json',JSON.stringify(resetedWhere));
    fs.writeFileSync('./word/who.json',JSON.stringify(resetedWho));
    fs.writeFileSync('./word/what.json',JSON.stringify(resetedWhat));
    fs.writeFileSync('./word/do_something.json',JSON.stringify(resetedDoSomething));
}

call();