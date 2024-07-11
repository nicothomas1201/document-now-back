export const templateCode = `
/**
 * @module Utilities
 * A collection of utility functions for various purposes.
 */

/**
 * Generates a random integer between min and max (inclusive).
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} A random integer between min and max.
 */
function getRandomInt(min, max) {
    if (min > max) {
        throw new Error('Min should not be greater than Max');
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Formats a date object into a readable string.
 * @param {Date} date - The date object to format.
 * @returns {string} The formatted date string.
 */
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}

/**
 * Checks if a string is a palindrome.
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
    const sanitizedStr = str.toLowerCase().replace(/[\W_]/g, '');
    return sanitizedStr === sanitizedStr.split('').reverse().join('');
}

/**
 * Debounces a function so it only runs after a specified delay.
 * @param {function} func - The function to debounce.
 * @param {number} wait - The number of milliseconds to delay.
 * @returns {function} A debounced version of the input function.
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttles a function so it only runs at most once every specified delay.
 * @param {function} func - The function to throttle.
 * @param {number} limit - The number of milliseconds to wait between calls.
 * @returns {function} A throttled version of the input function.
 */
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

/**
 * Deep clones an object.
 * @param {object} obj - The object to clone.
 * @returns {object} A deep clone of the input object.
 */
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

/**
 * Merges two objects deeply.
 * @param {object} target - The target object.
 * @param {object} source - The source object.
 * @returns {object} The merged object.
 */
function deepMerge(target, source) {
    const output = { ...target };
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach((key) => {
            if (isObject(source[key])) {
                if (!(key in target)) {
                    Object.assign(output, { [key]: source[key] });
                } else {
                    output[key] = deepMerge(target[key], source[key]);
                }
            } else {
                Object.assign(output, { [key]: source[key] });
            }
        });
    }
    return output;
}

/**
 * Checks if a value is an object.
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is an object, false otherwise.
 */
function isObject(value) {
    return value && typeof value === 'object' && !Array.isArray(value);
}

module.exports = {
    getRandomInt,
    formatDate,
    isPalindrome,
    debounce,
    throttle,
    deepClone,
    deepMerge,
    isObject,
};


`
