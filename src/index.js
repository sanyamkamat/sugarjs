/**
 * Created by sanyam on 18/5/16.
 */
"use strict";

(function () {

  String.prototype.reverse = function () {
    return this ? this.split("").reverse().join("") : this;
  };

  String.prototype.ucfirst = function () {
    if (this.length > 1) {
      return this[0].toUpperCase() + this.substr(1);
    }
    return this.toUpperCase();
  };

  String.prototype.ucwords = function () {
    var stringWords = this.split(" ");

    if (stringWords.length > 1) {
      return (stringWords.reduce(function (previousValue, currentValue) {
        return previousValue + " " + currentValue.ucfirst();
      })).ucfirst();
    }
    return stringWords[0].ucfirst();
  };

})();
