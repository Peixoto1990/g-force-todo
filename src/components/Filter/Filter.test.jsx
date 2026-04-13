import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { FilterContext } from "../../contexts/FilterContext";
import FilterProvider from '../../contexts/FilterProvider';
import Filter from ".";

describe('Componente Filter.jsx', () => {
    it('Deve renderizar o componente', () => {
        render(
            <FilterProvider>
                <Filter />
            </FilterProvider>
        );
        expect(screen.getByTitle(/ações de filtro/i)).toBeInTheDocument();
    });

    it('Deve conter os botões de filtragem', () => {
        render(
            <FilterProvider>
                <Filter />
            </FilterProvider>
        );
        const botoesFiltro = screen.getAllByRole('button', { name: /filtro por \w+/i });
        botoesFiltro.forEach((botao) => {
            expect(botao).toBeInTheDocument();
        });
    });

    it('Deve executar a filtragem', () => {
        const setFilterMock = vi.fn();
        render(
            <FilterContext.Provider value={{setFilter: setFilterMock}}>
                <Filter />
            </FilterContext.Provider>
        );
        const botoesFiltro = screen.getAllByRole('button', { name: /filtro por \w+/i });
        botoesFiltro.forEach((botao, index) => {
            fireEvent.click(botao);
            expect(setFilterMock).toHaveBeenCalledTimes(index + 1);
        });
    });
});