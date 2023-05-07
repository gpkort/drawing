import { describe, expect, test, assertType } from 'vitest';
import { IColor } from './shapeInterfaces';
import Color from './Color';

describe("Create", () => {
    test("Type Check", () => {
        const c = Color.create(1, 2, 3, 100)
        assertType<Color>(c)
        assertType<IColor>(c)

    })
})

describe("Constructor", () => {
    test("no values construct", () => {
        const c = Color.create()
        expect(c.r).toEqual(0)
        expect(c.g).toEqual(0)
        expect(c.b).toEqual(0)
        expect(c.a).toEqual(100)
    })
    test("no values construct", () => {
        const c = Color.create(1, 2, 3, 4 )
        expect(c.r).toEqual(1)
        expect(c.g).toEqual(2)
        expect(c.b).toEqual(3)
        expect(c.a).toEqual(4)
        expect(c.RGBString).toEqual('rgb(1, 2, 3)')
        expect(c.RGBAString).toEqual('rgba(1, 2, 3, 4)')
    })
})
