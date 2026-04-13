import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import TaskCard from ".";

describe('Componente TaskCard.jsx', () => {
    it('Deve renderizar o componente e exibir o astro Titã', () => {
        render(
            <TaskCard />
        );
        const elementoLi = screen.getByTitle(/tarefa: tarefateste/i);
        expect(elementoLi).toBeInTheDocument();
        expect(elementoLi.querySelector('h4')).toHaveAttribute('title', 'Titã');
    });

    it('Deve chamar a função de excluir tarefa', () => {
        const excludeTaskMock = vi.fn();
        render(
            <TaskCard setTaskList={excludeTaskMock}/>
        );
        const elementoLi = screen.getByTitle(/tarefa: tarefateste/i).querySelector('[title="Excluir tarefa"]');
        fireEvent.click(elementoLi);
        expect(excludeTaskMock).toHaveBeenCalled();
    });
});