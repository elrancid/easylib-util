export declare class Util {
    /**
     * Parse value to number.
     * @param value String value
     * @return Number value, null if fails.
     */
    static toNumber(value: any): number | null;
    /**
     * Parse value to string.
     * @param value Number value
     * @return String value, null if fails.
     */
    static toString(value: any): string | null;
    /**
     * Copy object with Object.assign
     * @param value the object to clone
     */
    static copyObject(obj: object): object;
    /**
     * Clone deep an object or array
     * @param value the object to clone
     */
    static cloneDeep(value: any): any;
    static isEqual(value1: any, value2: any): boolean;
    /**
     * Checks if value is classified as a String primitive or object.
     * @param value — The value to check.
     * @return — Returns true if value is correctly classified, else false.
     */
    static isString(value?: any): value is string;
    /**
     * Checks if value is the language type of Object. (e.g. arrays, functions,
     * objects, regexes, new Number(0), and new String(''))
     * @param value — The value to check.
     * @return — Returns true if value is an object, else false.
     */
    static isObject(value?: any): value is object;
    /**
     * Checks if value is classified as an Array object.
     * @param value — The value to check.
     * @return — Returns true if value is correctly classified, else false.
     */
    static isArray(value?: any): value is object;
}
