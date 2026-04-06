import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import FormProvider from "../../contexts/FormProvider";
import Form from ".";

describe('Componente Form.jsx', () => {
    it('Deve renderizar o componente', () => {
        render(
            <FormProvider>
                <Form />
            </FormProvider>
        );

        expect(screen.getByTitle(/formulário de novas tarefas/i)).toBeInTheDocument();
    });

    it('Deve chamar a função de criar nova tarefa, limpar os campos e dar foco no input de tarefas', () => {
        const setTaskListMock = vi.fn();
        render(
            <FormProvider>
                <Form setTaskList={setTaskListMock}/>
            </FormProvider>
        )

        const inputTaskElement = screen.getByLabelText(/nova tarefa/i);
        const inputEffortElement = screen.getByLabelText(/nível de esforço/i);
        const inputUrgencyElement = screen.getByLabelText(/nível de urgência/i);
        const btnSubmitElement = screen.getByRole('button', {name: /criar tarefa/i});

        fireEvent.change(inputTaskElement, {target: {value: 'Ir a Santa Missa'}});
        fireEvent.change(inputEffortElement, {target: {value: '6'}});
        fireEvent.change(inputUrgencyElement, {target: {value: '10'}});
        fireEvent.click(btnSubmitElement);

        expect(setTaskListMock).toHaveBeenCalled();
        expect(inputTaskElement).toHaveValue("");
        expect(inputEffortElement).toHaveValue(null);
        expect(inputUrgencyElement).toHaveValue(null);
        expect(inputTaskElement).toHaveFocus();
    });

    it('Deve rejeitar a chamada da função, ao usuário digitar dados inválidos', () => {
        const setTaskListMock = vi.fn();
        render(
            <FormProvider>
                <Form setTaskList={setTaskListMock}/>
            </FormProvider>
        );

        const inputTaskElement = screen.getByLabelText(/nova tarefa/i);
        const inputEffortElement = screen.getByLabelText(/nível de esforço/i);
        const inputUrgencyElement = screen.getByLabelText(/nível de urgência/i);
        const btnSubmitElement = screen.getByRole('button', {name: /criar tarefa/i});

        fireEvent.change(inputTaskElement, {target: {value: ' '}});
        fireEvent.change(inputEffortElement, {target: {value: '3'}});
        fireEvent.change(inputUrgencyElement, {target: {value: '6'}});
        fireEvent.click(btnSubmitElement);

        expect(setTaskListMock).not.toHaveBeenCalled();
    });
});