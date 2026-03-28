import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ErrorModal from ".";

describe('Componente ErrorModal', () => {
    it('Deve renderizar o componente', () => {
        render(<ErrorModal />);
        expect(screen.getByTitle(/errormodal/i)).toBeInTheDocument();
    })

    it('Deve retirar o elemento visivelmente da tela e após 1 segundo, remover a classe de invisibilidade', () => {
        vi.useFakeTimers();
        render(<ErrorModal setIsvalidTask={() => {}}/>);
        const buttonElement = screen.getByRole('button', { name: /entendi/i });
        fireEvent.click(buttonElement);
        expect(screen.queryByTitle(/errormodal/i)).toHaveClass(/errordisplayoff/i);
        vi.advanceTimersByTime(1000);
        expect(screen.queryByTitle(/errormodal/i)).not.toHaveClass(/errordisplayoff/i); 
        vi.useRealTimers(); 
    })

    it('Deve exibir a mensagem Erro de tarefa', () => {
        render(<ErrorModal message="Erro de tarefa"/>);
        expect(screen.queryByTitle(/errormodal/i).querySelector("p")).toHaveTextContent(/erro de tarefa/i);
    })
})