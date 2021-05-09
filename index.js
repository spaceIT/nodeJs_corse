const { pipeline } = require('stream');
const { Command } = require('commander');
const program = new Command();

const { StreamsModules } = require('./StreamsModules');

program
    .storeOptionsAsProperties(false)
    .passCommandToAction(false);

program
    .option('-a, --action <value>', 'action')
    .option('-s, --shift <number>', 'shift')
    .option('-i, --input <value>', 'input file')
    .option('-o, --output <path>', 'output file');

program
    .parse(process.argv);

const actionValue = program.opts().action;
const shift = program.opts().shift;
const inputValue = program.opts().input;
const outputValue = program.opts().output;

pipeline(
    StreamsModules.getReadableStream(inputValue),
    StreamsModules.getTransformStream(shift, actionValue),
    streamFunc.getWritableStream(outputValue),
    (err) => {
        if (err)
            console.error(`Pipeline is failed`, err);
        else
            console.log(`Pipeline is succeeded`);
    }
);
