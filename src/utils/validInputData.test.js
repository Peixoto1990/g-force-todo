import { describe, it, expect } from "vitest";
import { validInputData } from "./validInputData";

describe('util function validInputData', () => {
    it('Deve retornar a string tarefa', () => {
        expect(validInputData("tarefa", "text")).toBe("tarefa");
    })

    it('Deve retornar uma string vazia ao verificar que somente existem espaços', () => {
        expect(validInputData("    ", "text")).toBe("");
    })

    it('Deve retornar uma string contendo um número > 0 && < 11', () => {
        expect(validInputData("5", "number")).toBe("5");
    })

    it('Deve retornar uma string contendo o número 1, após ser verificado valor < 0', () => {
        expect(validInputData("-1", "number")).toBe("1");
    })

    it('Deve retornar uma string contendo o número 10, após ser verificado valor > 10', () => {
        expect(validInputData("11", "number")).toBe("10");
    })

    it('Deve retornar valor null, após os parâmetros não serem respeitados', () => {
        expect(validInputData(3, "hello")).toBe(null);
    })
})