// 指定されたJSファイルをパースし、ASTを出力する
// Example:
//   $ node index.js 01/a.js

import * as parser from "@babel/parser"
import * as fs from "fs"

async function main() {
    const filename = process.argv[2];
    const source = fs.readFileSync(filename).toString();
    const ast = parser.parse(source);

    console.log(JSON.stringify(ast, null, 4));
}

main();
