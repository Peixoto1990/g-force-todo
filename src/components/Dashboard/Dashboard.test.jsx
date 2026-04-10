import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Dashboard from ".";
import ThemeProvider from '../../contexts/ThemeProvider';

describe('Componente Dashboard.jsx', () => {
    it('Deve renderizar o componente', () => {
        render(
            <ThemeProvider>
                <Dashboard />
            </ThemeProvider>
        );
        const elementoDashboard = screen.getByTitle(/painel de controle/i)
        expect(elementoDashboard).toBeInTheDocument();
    });

    it('Deve chamar a função de controle de exibição do Form --- setShowForm', () => {
        const setShowFormMock = vi.fn();
        render(
            <ThemeProvider>
                <Dashboard setShowForm={setShowFormMock}/>
            </ThemeProvider>
        );
        fireEvent.click(screen.getByTitle("botão exibir/ocultar formulário"));
        expect(setShowFormMock).toHaveBeenCalled();
    });
})