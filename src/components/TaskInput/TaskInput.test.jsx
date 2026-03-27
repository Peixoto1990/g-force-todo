import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import TaskInput from ".";

describe('Componente taskInput', () => {
    it('Deve ser renderizado com o valor "estou aqui" e ser de preenchimento obrigatório', () => {
        render(<TaskInput value="estou aqui"/>);
        const inputElement = screen.getByPlaceholderText(/new task/i);
        expect(inputElement).toBeInTheDocument();
        expect(inputElement).toHaveValue("estou aqui");
        expect(inputElement).toBeRequired();
    })

    it('Deve atualizar o valor do input, através da função validData', () => {
        const validDataMock = vi.fn();
        render(<TaskInput setValue={validDataMock} />);
        const inputElement = screen.getByPlaceholderText(/new task/i)
        fireEvent.change(inputElement, {target: {value: "lavar pratos"}});
        expect(validDataMock).toHaveBeenCalledWith("lavar pratos");
    })

    it('Deve resetar o valor do input para o valor 1', () => {
        const validDataMock = vi.fn();
        render(<TaskInput setValue={validDataMock} type="number" placeholder="effort"/>);
        const inputElement = screen.getByPlaceholderText(/effort/i)
        fireEvent.change(inputElement, {target: {value: "-1"}});
        expect(validDataMock).toHaveBeenCalledWith("1");  
    })

    it('Deve resetar o valor do input para o valor 10', () => {
        const validDataMock = vi.fn();
        render(<TaskInput setValue={validDataMock} type="number" placeholder="effort"/>);
        const inputElement = screen.getByPlaceholderText(/effort/i)
        fireEvent.change(inputElement, {target: {value: "11"}});
        expect(validDataMock).toHaveBeenCalledWith("10");  
    })
})