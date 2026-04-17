import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Dashboard from ".";
import MetaProvider from '../../contexts/MetaProvider';

describe('Componente Dashboard.jsx', () => {
    it('Deve renderizar o componente', () => {
        render(
            <MetaProvider>
                <Dashboard />
            </MetaProvider>
        );
        const elementoDashboard = screen.getByTitle(/painel de controle/i)
        expect(elementoDashboard).toBeInTheDocument();
    });

    it('Deve chamar a função de controle de exibição do Form --- setShowForm', () => {
        const setShowFormMock = vi.fn();
        render(
            <MetaProvider>
                <Dashboard setShowForm={setShowFormMock}/>
            </MetaProvider>
        );
        fireEvent.click(screen.getByTitle("botão exibir/ocultar formulário"));
        expect(setShowFormMock).toHaveBeenCalled();
    });
});