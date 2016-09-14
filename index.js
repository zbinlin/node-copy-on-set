"use strict";

function isObject(obj) {
    return obj != null && typeof obj === "object" || Array.isArray(obj);
}

/**
 * @param {Object} obj
 * @param {string|string[]} [prop]
 * @param {*} [newVal]
 */
function assign(obj, prop, newVal) {
    if (!isObject(obj)) {
        return obj;
    }

    if (arguments.length === 1) {
        if (Array.isArray(obj)) {
            return obj.slice();
        } else {
            return Object.assign({}, obj);
        }
    }

    var props = typeof prop === "string" ? prop.split(".") : prop;

    var key = props.shift();
    var val = obj[key];

    if (Array.isArray(obj)) {
        obj = obj.slice();
        obj[key] = _assign(val, props, newVal);
        return obj;
    } else {
        return Object.assign({}, obj, {
            [key]: _assign(val, props, newVal),
        });
    }

    function _assign(obj, props, newVal) {
        if (props.length === 0) {
            return newVal;
        } else {
            return assign(isObject(obj) ? obj : {}, props, newVal);
        }
    }
}

exports.assign = assign;
