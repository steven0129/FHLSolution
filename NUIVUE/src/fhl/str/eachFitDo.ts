/**
 * matchResult = exec(strTest), 回傳值會作為 callback whenExec 的第1個參數, 通常取 matchResult[0] 是字串
 * @param regPattern 例如 [0-9]+
 * @param strTest 要被測試的字串
 * @param fnDoEach 傳入的參數match, 就是每一個要作的事
 */
export default function eachFitDo(regPattern: string, strTest: string, fnDoEach: (matchEach: RegExpExecArray) => void) {
    let exp1 = new RegExp(regPattern, 'g');
    let match: RegExpExecArray;
    while ((match = exp1.exec(strTest)) !== null) {
        fnDoEach(match);
    }
}