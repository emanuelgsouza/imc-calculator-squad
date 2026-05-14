import { describe, expect, it } from "vitest";

import { calculate } from "../calc.ts";

describe('function calculate tests', () => {
    it(`ao chamar calculate com os parametros 70 e 1.75, é esperado o resultado 22.86`, () => {
        const imc = calculate('70', '1.75')
        expect(imc).toBe('22.86')
    })

    it(`ao chamar calculate com os parametros 90 e 1.65, é esperado o resultado 33.05`, () => {
        const imc = calculate('90', '1.65')
        expect(imc).toBe('33.06')
    })
})