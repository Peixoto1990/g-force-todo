import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import FilterProvider from "../../contexts/FilterProvider";
import TaskList from ".";

describe('Componente TaskList.jsx', () => {
    it('Deve renderizar o componente, com 1 item de lista', () => {
        const task = {
            id: "2",
            task: "Lavar o banheiro",
            effort: "5",
            urgency: "5"
        }
        render(
            <FilterProvider>
                <TaskList taskList={[{...task}]}/>
            </FilterProvider>
        );

        const elementoLista = screen.getByTitle(/lista de tarefas/i);
        const elementoTarefa = screen.getByTitle(/tarefa: lavar o banheiro/i);
        expect(elementoLista).toBeInTheDocument();
        expect(elementoLista.querySelectorAll('li')).toHaveLength(1);
        expect(elementoTarefa).toBeInTheDocument();
        expect(elementoTarefa.querySelector('h4')).toHaveAttribute('title', 'Terra');
    });

    it('Deve exibir uma lista vazia', () => {
        render(
            <FilterProvider>
                <TaskList />
            </FilterProvider>
        );

        const elementoLista = screen.getByTitle(/lista de tarefas/i);
        expect(elementoLista).toBeInTheDocument();
        expect(elementoLista.querySelector('li')).not.toBeInTheDocument();
    })
});