import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import App from "./App";

describe('Integração da aplicação g-force-todo WebApp - Componente principal - App.jsx', () => {
    it('Deve renderizar o componente', () => {
        render(
            <App />
        );
        expect(screen.getByTitle(/gForce WebApp/i)).toBeInTheDocument();
    });

    it('Deve iniciar sem o Form e após interação do usuário, renderizar o mesmo', () => {
        render(
            <App />
        );
        expect(screen.queryByTitle(/formulário de novas tarefas/i)).not.toBeInTheDocument();
        const botaoDoComponenteDashboard = screen.queryByTitle('botão exibir/ocultar formulário');
        fireEvent.click(botaoDoComponenteDashboard);
        expect(screen.queryByTitle(/formulário de novas tarefas/i)).toBeInTheDocument();
    });

    it('Deve criar tarefa, atualizar o localStorage, exibir o item de lista com a tarefa criada, exibir o astro correspondente a gravidade calculada.', () => {
        render(
            <App />
        );
        const botaoDoComponenteDashboard = screen.queryByTitle('botão exibir/ocultar formulário');
        fireEvent.click(botaoDoComponenteDashboard);
        const inputTaskElemento = screen.getByLabelText(/nova tarefa/i);
        const inputEffortElemento = screen.getByLabelText(/nível de esforço/i);
        const inputUrgencyElemento = screen.getByLabelText(/nível de urgência/i);
        fireEvent.change(inputTaskElemento, {target: { value: "Lavar os pratos"}});
        fireEvent.change(inputEffortElemento, {target: { value: "4"}});
        fireEvent.change(inputUrgencyElemento, {target: { value: "5"}});
        const botaoSubmitDoComponenteForm = screen.getByRole('button', {name: /criar tarefa/i});
        fireEvent.click(botaoSubmitDoComponenteForm);
        expect(JSON.parse(localStorage.getItem("gForceTodo"))).toStrictEqual([{
            id: expect.stringContaining("-"),
            task: "Lavar os pratos",
            effort: "4",
            urgency: "5"
        }]);
        const componenteTaskList = screen.getByTitle(/lista de tarefas/i);
        expect(componenteTaskList.querySelectorAll('li')).toHaveLength(1);
        const componenteTaskCard = screen.getByText(/lavar os pratos/i);
        expect(componenteTaskCard).toBeInTheDocument();
        expect(componenteTaskCard.querySelector('h4')).toHaveAttribute('title', 'Terra');
    });
});