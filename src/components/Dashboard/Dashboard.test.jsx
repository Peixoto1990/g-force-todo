import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Dashboard from ".";

describe('Componente Dashboard.jsx', () => {
    it('Deve renderizar o componente com o texto do botão igual a +', () => {
        render(
            <Dashboard />
        );
        const elementoDashboard = screen.getByTitle(/painel de controle/i)
        expect(elementoDashboard).toBeInTheDocument();
        expect(screen.getByTitle("botão exibir/ocultar formulário")).toHaveTextContent("+");
    });

    it('Deve chamar a função de controle de exibição do Form --- setShowForm', () => {
        const setShowFormMock = vi.fn();
        render(
            <Dashboard setShowForm={setShowFormMock}/>
        );
        fireEvent.click(screen.getByTitle("botão exibir/ocultar formulário"));
        expect(setShowFormMock).toHaveBeenCalled();
    });
})