import FHL from "./ns-fhl"
import $ from "jquery"
let BookName2iBookGlobal: any = {}; //加速用的全域cache

/**
 * 新增一個全域變數
 * 配合 jquery 去 on 事件 bible 
 * callback function 的第2個參數, 就是 bibleResult
 */
export default class FhlUrlParameter {

    // bible event的結果.
    bibleResult: any = {
        // 書卷, 1是創世記, -1是沒指定, 若要轉為文字, 可使用 FHL.CONSTANT.Bible 中的 Array, 只要記得, 那裡是0-based, 這裡是1-based.
        book: -1,
        // 章, 1是第1章, 0是本書卷大綱, -1是沒指定
        chap: -1,
        // 節, 1是第1節, -1是沒指定
        sec: -1
    };
    private _urlParameter: any = new FHL.NET.UrlParameter();
    constructor() { }
    private bindUrlParameterEvent() {
        let that = this;
        $(this._urlParameter).on('changed', function () {
            console.log('init');
            let result = that.parseHashArrayBible(that._urlParameter.result)
            if (result != null) {
                that.bibleResult.book = result.book != null ? result.book : -1
                that.bibleResult.chap = result.chap != null ? result.chap : -1
                that.bibleResult.sec = result.sec != null ? result.sec : -1

                $(that).trigger('bible', that.bibleResult);
            }
        });
    }
    private createBookName2iBookDictionary() {
        /// <summary> parseHashArrayBible 用 </summary>
        if (BookName2iBookGlobal != null)
            return BookName2iBookGlobal;

        let BookName2iBook: any = {};
        let bookNameList: any[] = [
            FHL.CONSTANT.ENGLISH_BOOK_SHORT_ABBREVIATIONS,
            FHL.CONSTANT.ENGLISH_BOOK_NAMES,
            FHL.CONSTANT.ENGLISH_BOOK_ABBREVIATIONS,
            FHL.CONSTANT.CHINESE_BOOK_ABBREVIATIONS,
            FHL.CONSTANT.CHINESE_BOOK_ABBREVIATIONS_GB
        ];
        bookNameList.forEach(function (list: any[]) {
            list.forEach(function (na: string, idx: number) {
                BookName2iBook[na.toLowerCase()] = idx + 1; // 創:1, 使用 1-based
            });
        });
        BookName2iBookGlobal = BookName2iBook;
        return BookName2iBook;
    }
    private parseHashArrayBible(hashArray: string[]) {
        /// <summary> parse 核心, 可獨立出 unit Test 的部分 </summary>
        /// <param type="string[]" name="hashArray" parameterArray="true"> UrlParameter 傳來的參數 ['bible','1','2','3','search',...] , 書卷各類都有效. '創' 'Ge' 都可</param>
        /// <returns type="{book:1, chap:1, sec:1 }"> 回傳null, 表示沒有 bible 這個關鍵字, 若存在, 當chap, sec參數有效, 就會parse出來 </returns>
        let result = { book: -1, chap: -1, sec: -1 };

        // find 'bible' idx
        let idxBible = hashArray.indexOf('bible');
        if (idxBible == -1)
            return null;
        let paramBook = hashArray[idxBible + 1];
        if (paramBook !== undefined && isNaN(parseInt(paramBook)))
            paramBook = paramBook.toLowerCase();
        let paramChap = hashArray[idxBible + 2];
        let paramSec = hashArray[idxBible + 3];

        // book to bookId, 1-based.
        let bookDictionary = this.createBookName2iBookDictionary();
        if (paramBook in bookDictionary === false && isNaN(parseInt(paramBook)) === true) {
            return result; //default value
        }
        result.book = (isNaN(parseInt(paramBook)) === false) ? parseInt(paramBook) : bookDictionary[paramBook];
        if (result.book < -1) { // 等於-1表示沒指定, 小於-1表示錯誤
            result.book = 0;
            return result;
        }
        else if (result.book > 66)
            result.book = 66;

        // chap, 1-based
        if (isNaN(parseInt(paramChap)) === true)
            return result;
        result.chap = parseInt(paramChap);
        if (result.chap < -1) // 等於-1表示沒指定, 小於-1表示錯誤
            result.chap = 0;
        else if (result.chap > FHL.CONSTANT.BOOK_CHAPTERS[result.book - 1])
            result.chap = FHL.CONSTANT.BOOK_CHAPTERS[result.book - 1];

        // sec
        if (isNaN(parseInt(paramSec)) === true)
            return result;
        result.sec = parseInt(paramSec);

        if (result.sec < -1) // 等於-1表示沒指定, 小於-1表示錯誤
            result.sec = 1;
        return result;
    }
    public start() {
        console.log('start');
        this.bindUrlParameterEvent();
        this._urlParameter.start();
    }
}