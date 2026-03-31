import { describe, it, expect } from "vitest";
import { calcTaskGravity } from "./calcTaskGravity";

describe('Função utilitária calcTaskGravity', () => {
    it('Deve retornar o valor 13', () => {
        expect(calcTaskGravity("4", "5")).toBe(13);
    });
    it('Deve retornar o valor 5, após os dados serem inválidos', () => {
        expect(calcTaskGravity("Aluilson", 8)).toBe(5);
    })
});