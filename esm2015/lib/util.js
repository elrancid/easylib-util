import * as moment from 'moment';
import { isString, isObject, isArray } from 'lodash-es';
export class Util {
    /**
     * Parse value to number.
     * @param value String value
     * @return Number value, null if fails.
     */
    static toNumber(value) {
        // https://flaviocopes.com/how-to-convert-string-to-number-javascript/
        if (!value) {
            return null;
        }
        const num = +value;
        if (value === '' || isNaN(num)) {
            return null;
        }
        return num;
    }
    /**
     * Parse value to string.
     * @param value Number value
     * @return String value, null if fails.
     */
    static toString(value) {
        if (value === undefined || value === null || (typeof value === 'number' && isNaN(value))) {
            return null;
        }
        if (value instanceof moment) {
            return moment(value).format('YYYY-MM-DD');
        }
        // https://stackoverflow.com/questions/5765398/whats-the-best-way-to-convert-a-number-to-a-string-in-javascript
        return value.toString();
    }
    /**
     * Copy object with Object.assign
     * @param value the object to clone
     */
    static copyObject(obj) {
        // const newObj = {};
        // Object.assign(newObj, obj);
        // return newObj;
        return Object.assign({}, obj);
    }
    /**
     * Clone deep an object or array
     * @param value the object to clone
     */
    static cloneDeep(value) {
        return JSON.parse(JSON.stringify(value));
        // return cloneDeep(value);
    }
    static isEqual(value1, value2) {
        return JSON.stringify(value1) === JSON.stringify(value2);
        // return _.isEqual(value1, value2);
    }
    // ********************************* FROM LODASH *****************************
    /**
     * Checks if value is classified as a String primitive or object.
     * @param value — The value to check.
     * @return — Returns true if value is correctly classified, else false.
     */
    static isString(value) {
        return isString(value);
    }
    /**
     * Checks if value is the language type of Object. (e.g. arrays, functions,
     * objects, regexes, new Number(0), and new String(''))
     * @param value — The value to check.
     * @return — Returns true if value is an object, else false.
     */
    static isObject(value) {
        return isObject(value);
    }
    /**
     * Checks if value is classified as an Array object.
     * @param value — The value to check.
     * @return — Returns true if value is correctly classified, else false.
     */
    static isArray(value) {
        return isArray(value);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9wcm9qZWN0cy9lYXN5bGliL3V0aWwvc3JjLyIsInNvdXJjZXMiOlsibGliL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRXhELE1BQU0sT0FBTyxJQUFJO0lBRWY7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBVTtRQUN4QixzRUFBc0U7UUFDdEUsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUNuQixJQUFJLEtBQUssS0FBSyxFQUFFLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzlCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFVO1FBQ3hCLElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ3hGLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLEtBQUssWUFBWSxNQUFNLEVBQUU7WUFDM0IsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzNDO1FBQ0QsK0dBQStHO1FBQy9HLE9BQU8sS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQVc7UUFDM0IscUJBQXFCO1FBQ3JCLDhCQUE4QjtRQUM5QixpQkFBaUI7UUFDakIseUJBQVksR0FBRyxFQUFHO0lBQ3BCLENBQUM7SUFFRDs7O09BR0c7SUFDSCxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQVU7UUFDekIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN6QywyQkFBMkI7SUFDN0IsQ0FBQztJQUVELE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBVyxFQUFFLE1BQVc7UUFDckMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekQsb0NBQW9DO0lBQ3RDLENBQUM7SUFFRCw4RUFBOEU7SUFFOUU7Ozs7T0FJRztJQUNILE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBVztRQUN6QixPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQVc7UUFDekIsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQVc7UUFDeEIsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBpc1N0cmluZywgaXNPYmplY3QsIGlzQXJyYXkgfSBmcm9tICdsb2Rhc2gtZXMnO1xuXG5leHBvcnQgY2xhc3MgVXRpbCB7XG5cbiAgLyoqXG4gICAqIFBhcnNlIHZhbHVlIHRvIG51bWJlci5cbiAgICogQHBhcmFtIHZhbHVlIFN0cmluZyB2YWx1ZVxuICAgKiBAcmV0dXJuIE51bWJlciB2YWx1ZSwgbnVsbCBpZiBmYWlscy5cbiAgICovXG4gIHN0YXRpYyB0b051bWJlcih2YWx1ZTogYW55KTogbnVtYmVyfG51bGwge1xuICAgIC8vIGh0dHBzOi8vZmxhdmlvY29wZXMuY29tL2hvdy10by1jb252ZXJ0LXN0cmluZy10by1udW1iZXItamF2YXNjcmlwdC9cbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgbnVtID0gK3ZhbHVlO1xuICAgIGlmICh2YWx1ZSA9PT0gJycgfHwgaXNOYU4obnVtKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBudW07XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgdmFsdWUgdG8gc3RyaW5nLlxuICAgKiBAcGFyYW0gdmFsdWUgTnVtYmVyIHZhbHVlXG4gICAqIEByZXR1cm4gU3RyaW5nIHZhbHVlLCBudWxsIGlmIGZhaWxzLlxuICAgKi9cbiAgc3RhdGljIHRvU3RyaW5nKHZhbHVlOiBhbnkpOiBzdHJpbmd8bnVsbCB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwgfHwgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgaXNOYU4odmFsdWUpKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIG1vbWVudCkge1xuICAgICAgcmV0dXJuIG1vbWVudCh2YWx1ZSkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgfVxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU3NjUzOTgvd2hhdHMtdGhlLWJlc3Qtd2F5LXRvLWNvbnZlcnQtYS1udW1iZXItdG8tYS1zdHJpbmctaW4tamF2YXNjcmlwdFxuICAgIHJldHVybiB2YWx1ZS50b1N0cmluZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvcHkgb2JqZWN0IHdpdGggT2JqZWN0LmFzc2lnblxuICAgKiBAcGFyYW0gdmFsdWUgdGhlIG9iamVjdCB0byBjbG9uZVxuICAgKi9cbiAgc3RhdGljIGNvcHlPYmplY3Qob2JqOiBvYmplY3QpOiBvYmplY3Qge1xuICAgIC8vIGNvbnN0IG5ld09iaiA9IHt9O1xuICAgIC8vIE9iamVjdC5hc3NpZ24obmV3T2JqLCBvYmopO1xuICAgIC8vIHJldHVybiBuZXdPYmo7XG4gICAgcmV0dXJuIHsgLi4ub2JqIH07XG4gIH1cblxuICAvKipcbiAgICogQ2xvbmUgZGVlcCBhbiBvYmplY3Qgb3IgYXJyYXlcbiAgICogQHBhcmFtIHZhbHVlIHRoZSBvYmplY3QgdG8gY2xvbmVcbiAgICovXG4gIHN0YXRpYyBjbG9uZURlZXAodmFsdWU6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICAvLyByZXR1cm4gY2xvbmVEZWVwKHZhbHVlKTtcbiAgfVxuXG4gIHN0YXRpYyBpc0VxdWFsKHZhbHVlMTogYW55LCB2YWx1ZTI6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZTEpID09PSBKU09OLnN0cmluZ2lmeSh2YWx1ZTIpO1xuICAgIC8vIHJldHVybiBfLmlzRXF1YWwodmFsdWUxLCB2YWx1ZTIpO1xuICB9XG5cbiAgLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIEZST00gTE9EQVNIICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB2YWx1ZSBpcyBjbGFzc2lmaWVkIGFzIGEgU3RyaW5nIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gICAqIEBwYXJhbSB2YWx1ZSDigJQgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICAgKiBAcmV0dXJuIOKAlCBSZXR1cm5zIHRydWUgaWYgdmFsdWUgaXMgY29ycmVjdGx5IGNsYXNzaWZpZWQsIGVsc2UgZmFsc2UuXG4gICAqL1xuICBzdGF0aWMgaXNTdHJpbmcodmFsdWU/OiBhbnkpOiB2YWx1ZSBpcyBzdHJpbmcge1xuICAgIHJldHVybiBpc1N0cmluZyh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHZhbHVlIGlzIHRoZSBsYW5ndWFnZSB0eXBlIG9mIE9iamVjdC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsXG4gICAqIG9iamVjdHMsIHJlZ2V4ZXMsIG5ldyBOdW1iZXIoMCksIGFuZCBuZXcgU3RyaW5nKCcnKSlcbiAgICogQHBhcmFtIHZhbHVlIOKAlCBUaGUgdmFsdWUgdG8gY2hlY2suXG4gICAqIEByZXR1cm4g4oCUIFJldHVybnMgdHJ1ZSBpZiB2YWx1ZSBpcyBhbiBvYmplY3QsIGVsc2UgZmFsc2UuXG4gICAqL1xuICBzdGF0aWMgaXNPYmplY3QodmFsdWU/OiBhbnkpOiB2YWx1ZSBpcyBvYmplY3Qge1xuICAgIHJldHVybiBpc09iamVjdCh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHZhbHVlIGlzIGNsYXNzaWZpZWQgYXMgYW4gQXJyYXkgb2JqZWN0LlxuICAgKiBAcGFyYW0gdmFsdWUg4oCUIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAgICogQHJldHVybiDigJQgUmV0dXJucyB0cnVlIGlmIHZhbHVlIGlzIGNvcnJlY3RseSBjbGFzc2lmaWVkLCBlbHNlIGZhbHNlLlxuICAgKi9cbiAgc3RhdGljIGlzQXJyYXkodmFsdWU/OiBhbnkpOiB2YWx1ZSBpcyBvYmplY3Qge1xuICAgIHJldHVybiBpc0FycmF5KHZhbHVlKTtcbiAgfVxufVxuIl19