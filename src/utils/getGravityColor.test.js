import { describe, it, expect } from "vitest";
import { getGravityColor } from "./getGravityColor";

describe('Função utilitária getGravityColor', () => {
    it('Deve retornar a string padrão (var(--g-low)) ao não receber parâmetros ou (var--g-high) ao receber parâmetro errado ou >= 20', () => {
        expect(getGravityColor()).toBe("var(--g-low)");
        expect(getGravityColor(90)).toBe("var(--g-high)");
        expect(getGravityColor("Aluilson")).toBe("var(--g-high)");
    });

    it('Deve retornar (var(--g-low)), ao receber parâmetro < 10; Deve retornar (var(--g-mid)), ao receber parâmetro >= 10 && < 20', () => {
        expect(getGravityColor(8)).toBe("var(--g-low)");
        expect(getGravityColor(15)).toBe("var(--g-mid)");
    });
});