import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import MetaProvider from '../../contexts/MetaProvider';
import TaskList from ".";

describe('Componente TaskList.jsx', () => {
    it('Deve renderizar o componente, com 1 item de lista', () => {
        const task = {
            id: "2",
            task: "Lavar o banheiro",
            effort: "5",
            urgency: "5",
            done: false
        }
        render(
            <MetaProvider>
                <TaskList taskList={[{...task}]}/>
            </MetaProvider>
        );

        const elementoLista = screen.getByTitle(/lista de tarefas/i);
        const elementoTarefa = screen.getByTitle(/tarefa: lavar o banheiro/i);
        expect(elementoLista).toBeInTheDocument();
        expect(elementoLista.querySelectorAll('li')).toHaveLength(1);
        expect(elementoTarefa).toBeInTheDocument();
        expect(elementoTarefa.querySelector('h4')).toHaveAttribute('title', 'Urano');
    });

    it('Deve exibir uma lista vazia', () => {
        render(
            <MetaProvider>
                <TaskList />
            </MetaProvider>
        );

        const elementoLista = screen.getByTitle(/lista de tarefas/i);
        expect(elementoLista).toBeInTheDocument();
        expect(elementoLista.querySelector('li')).not.toBeInTheDocument();
    })
});