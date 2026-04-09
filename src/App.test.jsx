import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import App from "./App";
import ThemeProvider from "./contexts/ThemeProvider";

describe('Integração da aplicação g-force-todo WebApp - Componente principal - App.jsx - Fluxo do usuário', () => {
    it('Deve renderizar o componente', () => {
        render(
            <ThemeProvider>
                <App />
            </ThemeProvider>
        );
        expect(screen.getByTitle(/gForce WebApp/i)).toBeInTheDocument();
    });

    it('Deve iniciar sem o Form e após interação do usuário, renderizar o mesmo', () => {
        render(
            <ThemeProvider>
                <App />
            </ThemeProvider>
        );
        expect(screen.queryByTitle(/formulário de novas tarefas/i)).not.toBeInTheDocument();
        const botaoDoComponenteDashboard = screen.queryByTitle('botão exibir/ocultar formulário');
        fireEvent.click(botaoDoComponenteDashboard);
        expect(screen.queryByTitle(/formulário de novas tarefas/i)).toBeInTheDocument();
    });

    it('Deve criar tarefa, atualizar o localStorage, exibir o item de lista com a tarefa criada, exibir o astro correspondente a gravidade calculada, excluir o item de lista após interação do usuário e limpar o localStorage', () => {
        render(
            <ThemeProvider>
                <App />
            </ThemeProvider>
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
        fireEvent.click(componenteTaskCard);
        expect(componenteTaskCard).not.toBeInTheDocument();
        expect(JSON.parse(localStorage.getItem("gForceTodo"))).toStrictEqual([]);
    });

    it('Deve iniciar com uma lista de 2 itens e excluir 1 deles após interação do usuário', () => {
        localStorage.clear();
        localStorage.setItem('gForceTodo', JSON.stringify([{
            id: "teste-task1",
            task: "Fazer a cama",
            effort: "3",
            urgency: "5"
        }, {
            id: "teste-task2",
            task: "Lavar os pratos",
            effort: "4",
            urgency: "6"
        }]));
        render(
            <ThemeProvider>
                <App />
            </ThemeProvider>
        );

        expect(screen.getByText(/fazer a cama/i)).toBeInTheDocument();
        expect(screen.getByText(/lavar os pratos/i)).toBeInTheDocument();
        expect(screen.getByTitle(/lista de tarefas/i).querySelectorAll('li')).toHaveLength(2);

        fireEvent.click(screen.getByText(/fazer a cama/i));
        expect(screen.queryByText(/fazer a cama/i)).not.toBeInTheDocument();
        expect(screen.getByText(/lavar os pratos/i)).toBeInTheDocument();
        expect(screen.getByTitle(/lista de tarefas/i).querySelectorAll('li')).toHaveLength(1);
    });
});

describe('Integração da aplicação g-force-todo WebApp - Componente principal - App.jsx - Fluxo de erros', () => {
    it('Deve exibir o componente ErrorModal nos seguintes cenários: 1)Tentativa de criar tarefa vazia; ', async () => {
        localStorage.clear();
        vi.useFakeTimers();
        render(
            <ThemeProvider>
                <App />
            </ThemeProvider>
        );
        const botaoDoComponenteDashboard = screen.queryByTitle('botão exibir/ocultar formulário');
        fireEvent.click(botaoDoComponenteDashboard);
        const inputTaskElemento = screen.getByLabelText(/nova tarefa/i);
        const inputEffortElemento = screen.getByLabelText(/nível de esforço/i);
        const inputUrgencyElemento = screen.getByLabelText(/nível de urgência/i);
        inputTaskElemento.removeAttribute('required');
        fireEvent.change(inputTaskElemento, {target: { value: "      "}});
        fireEvent.change(inputEffortElemento, {target: { value: "4"}});
        fireEvent.change(inputUrgencyElemento, {target: { value: "5"}});
        const botaoSubmitDoComponenteForm = screen.getByRole('button', {name: /criar tarefa/i});
        fireEvent.click(botaoSubmitDoComponenteForm);
        const componenteErrorModal = screen.getByTitle(/errormodal/i);
        expect(componenteErrorModal).toBeInTheDocument();
        const btnErrorModal = screen.getByRole('button', {name: /entendi/i});
        fireEvent.click(btnErrorModal);
        await act(async () => {
            vi.advanceTimersByTime(1000);
        });
        expect(componenteErrorModal).not.toBeInTheDocument();
        vi.useRealTimers();
        expect(JSON.parse(localStorage.getItem("gForceTodo"))).toStrictEqual([]);
    });
});