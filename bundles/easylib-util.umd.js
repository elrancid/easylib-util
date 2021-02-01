(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('moment'), require('lodash-es')) :
    typeof define === 'function' && define.amd ? define('@easylib/util', ['exports', 'moment', 'lodash-es'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.easylib = global.easylib || {}, global.easylib.util = {}), global.moment, global.lodashEs));
}(this, (function (exports, moment, lodashEs) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var moment__namespace = /*#__PURE__*/_interopNamespace(moment);

    var Util = /** @class */ (function () {
        function Util() {
        }
        /**
         * Parse value to number.
         * @param value String value
         * @return Number value, null if fails.
         */
        Util.toNumber = function (value) {
            // https://flaviocopes.com/how-to-convert-string-to-number-javascript/
            if (!value) {
                return null;
            }
            var num = +value;
            if (value === '' || isNaN(num)) {
                return null;
            }
            return num;
        };
        /**
         * Parse value to string.
         * @param value Number value
         * @return String value, null if fails.
         */
        Util.toString = function (value) {
            if (value === undefined || value === null || (typeof value === 'number' && isNaN(value))) {
                return null;
            }
            if (value instanceof moment__namespace) {
                return moment__namespace(value).format('YYYY-MM-DD');
            }
            // https://stackoverflow.com/questions/5765398/whats-the-best-way-to-convert-a-number-to-a-string-in-javascript
            return value.toString();
        };
        /**
         * Copy object with Object.assign
         * @param value the object to clone
         */
        Util.copyObject = function (obj) {
            // const newObj = {};
            // Object.assign(newObj, obj);
            // return newObj;
            return Object.assign({}, obj);
        };
        /**
         * Clone deep an object or array
         * @param value the object to clone
         */
        Util.cloneDeep = function (value) {
            return JSON.parse(JSON.stringify(value));
            // return cloneDeep(value);
        };
        Util.isEqual = function (value1, value2) {
            return JSON.stringify(value1) === JSON.stringify(value2);
            // return _.isEqual(value1, value2);
        };
        // ********************************* FROM LODASH *****************************
        /**
         * Checks if value is classified as a String primitive or object.
         * @param value — The value to check.
         * @return — Returns true if value is correctly classified, else false.
         */
        Util.isString = function (value) {
            return lodashEs.isString(value);
        };
        /**
         * Checks if value is the language type of Object. (e.g. arrays, functions,
         * objects, regexes, new Number(0), and new String(''))
         * @param value — The value to check.
         * @return — Returns true if value is an object, else false.
         */
        Util.isObject = function (value) {
            return lodashEs.isObject(value);
        };
        /**
         * Checks if value is classified as an Array object.
         * @param value — The value to check.
         * @return — Returns true if value is correctly classified, else false.
         */
        Util.isArray = function (value) {
            return lodashEs.isArray(value);
        };
        return Util;
    }());

    /*
     * Public API Surface of util
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Util = Util;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=easylib-util.umd.js.map
