import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import BtnForm from ".";

describe('Componente BtnForm', () => {
    it('Deve renderizar o componente como botão de submissão de formulário', () => {
        render(
            <BtnForm />
        );
        const buttonElement = screen.getByRole('button', {name: /criar tarefa/i});
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveAttribute('type', 'submit');
    });
    
    it('Deve renderizar o componente como botão tipo reset e chamar a função de resetar', () => {
        const resetAllFieldsMock = vi.fn();
        render(
            <BtnForm text="Resetar campos" type="reset" resetAllFields={resetAllFieldsMock}/>
        );
        const buttonElement = screen.getByRole('button', {name: /resetar campos/i})
        expect(buttonElement).toHaveAttribute('type', 'reset');
        fireEvent.click(buttonElement);
        expect(resetAllFieldsMock).toHaveBeenCalled();
    });
});