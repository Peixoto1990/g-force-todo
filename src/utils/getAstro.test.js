import { describe, it, expect } from "vitest";
import { getAstro } from "./getAstro";

describe('Função utilitário getAstro', () => {
    it('Deve retornar o astro Titan', () => {
        expect(getAstro(5)).toEqual(
            {
                name: "Titã",
                gravity: "0.14",
                icon: "☁️",
            }
        );
    });

    it('Deve retornar o astro Terra (padrão)', () => {
        expect(getAstro()).toEqual(
            {
                name: "Terra",
                gravity: "1",
                icon: "🌍",
            }
        );
    });

    it('Deve retornar o astro Sol, após ter parâmetros inválidos ou acima de 26.50', () => {
        expect(getAstro(26.51)).toEqual(
            {
                name: "Sol",
                gravity: "28",
                icon: "☀️",
            }
        );

        expect(getAstro("gForceTodo")).toEqual(
            {
                name: "Sol",
                gravity: "28",
                icon: "☀️",
            }
        );
    });

    it('Deve retornar o Astro Plutão se o valor for menor que 0', () => {
        expect(getAstro(-1)).toEqual(
            {
                name: "Plutão",
                gravity: "0.06",
                icon: "❄️",
            }
        );
    });
});