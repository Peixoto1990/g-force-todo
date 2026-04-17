import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { MetaContext } from "../../contexts/MetaContext";
import MetaProvider from '../../contexts/MetaProvider';
import Filter from ".";

describe('Componente Filter.jsx', () => {
    it('Deve renderizar o componente', () => {
        render(
            <MetaProvider>
                <Filter />
            </MetaProvider>
        );
        expect(screen.getByTitle(/ações de filtro/i)).toBeInTheDocument();
    });

    it('Deve conter os botões de filtragem', () => {
        render(
            <MetaProvider>
                <Filter />
            </MetaProvider>
        );
        const botoesFiltro = screen.getAllByRole('button', { name: /filtro por \w+/i });
        botoesFiltro.forEach((botao) => {
            expect(botao).toBeInTheDocument();
        });
    });

    it('Deve executar a filtragem', () => {
        const setMetaDataMock = vi.fn();
        render(
            <MetaContext.Provider value={{metaData: {lastFilter: "gforce"}, setMetaData: setMetaDataMock}}>
                <Filter />
            </MetaContext.Provider>
        );
        const botoesFiltro = screen.getAllByRole('button', { name: /filtro por \w+/i });
        botoesFiltro.forEach((botao, index) => {
            fireEvent.click(botao);
            expect(setMetaDataMock).toHaveBeenCalledTimes(index + 1);
        });
    });
});