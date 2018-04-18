import FHL from "./../ns-fhl"
import $ from "jquery"
/**
 * UrlParameter class 
 * '#/aaa/bbb' 或 '#aaa/bbb' 皆可. 
 * 在 index.html new 一個全域變數, 例如
  * var urlRouter = new URLParameter()
    * $(urlRouter).on('changed', function () {
 * var hashArray = urlRouter.result
        * })
    * 通常會用 $(window).trigger('hashchange') 在初始化trigger一次.
 */
export default class UrlParameter {
  result: string[];
  constructor() {
    this.result = [];
    this.bindonhashchange();
  }
  private bindonhashchange() {
    var that = this;
    window.onhashchange = function () {
      console.log('hi');
      var hash = window.location.hash;
      that.result = that.urlHashParse(hash);
      $(that).trigger('changed');
    }
    $(window).trigger('hashchange') //initial
  }
  private urlHashParse(hash: string): string[] {
    let resultArray: string[] = [];
    FHL.STR.eachFitDo('(#/|/|#)([^/#]+)', hash, function (r1) {
      resultArray.push(r1[2])
    })
    return resultArray;
  }
}