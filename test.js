"use strict";

const assert = require("assert");
const assign = require("./index.js").assign;

const a1 = {
    foo: "bar",
};
const b1 = assign(a1, "foo", "BAR");
assert.notEqual(b1, a1);
assert.equal(b1.foo, "BAR");

const a2 = [1, 2, 3];
const b2 = assign(a2, "1", "0");
assert.notEqual(b2, a2);
assert.equal(b2[1], "0");

const a3 = {
    foo: {
        bar: "biz",
    },
};
const b3 = assign(a3, "foo", {
    biz: "bar",
});
assert.notEqual(b3, a3);
assert.equal(b3.foo.biz, "bar");
assert.equal(b3.foo.bar, undefined);

const c3 = assign(a3, "foo.bar", "BIZ");
assert.notEqual(c3, a3);
assert.equal(c3.foo.bar, "BIZ");

const d3 = assign(a3, ["foo", "bar"], "foobar");
assert.notEqual(d3, a3);
assert.equal(d3.foo.bar, "foobar");

const e3 = assign(a3, "foo", "bar");
assert.notEqual(e3, a3);
assert.equal(e3.foo, "bar");
