import { describe, it, expect } from "vitest";
import { getFilter } from "./getFilter";

const taskListTest = [
    {
        id: "1",
        task: "varrer",
        effort: "4",
        urgency: "6",
        done: true
    },
    {
        id: "2",
        task: "correr",
        effort: "7",
        urgency: "6",
        done: false
    },
    {
        id: "3",
        task: "Fazer almoço",
        effort: "5",
        urgency: "8",
        done: false
    },
]

describe('Função utilitária getFilter', () => {
    it('Deve retornar um array ordenado pelo nível da força G', () => {
        expect(getFilter("gforce", taskListTest)).toStrictEqual(
            [
                {
                    id: "2",
                    task: "correr",
                    effort: "7",
                    urgency: "6",
                    done: false
                },
                {
                    id: "3",
                    task: "Fazer almoço",
                    effort: "5",
                    urgency: "8",
                    done: false
                },
                {
                    id: "1",
                    task: "varrer",
                    effort: "4",
                    urgency: "6",
                    done: true
                },
            ]
        )
    });

    it('Deve retornar um array com filtro aplicado de tarefas mais urgentes primeiro', () => {
        expect(getFilter("urgency", taskListTest)).toStrictEqual(
            [
                {
                    id: "3",
                    task: "Fazer almoço",
                    effort: "5",
                    urgency: "8",
                    done: false
                },
                {
                    id: "1",
                    task: "varrer",
                    effort: "4",
                    urgency: "6",
                    done: true
                },
                {
                    id: "2",
                    task: "correr",
                    effort: "7",
                    urgency: "6",
                    done: false
                },
            ]
        )
    });

    it('Deve retornar um array apenas com as tarefas pendentes, considerando o nível da força G', () => {
        expect(getFilter("pending", taskListTest)).toStrictEqual(
            [
                {
                    id: "2",
                    task: "correr",
                    effort: "7",
                    urgency: "6",
                    done: false
                },
                {
                    id: "3",
                    task: "Fazer almoço",
                    effort: "5",
                    urgency: "8",
                    done: false
                },
            ]
        )
    });

    it('Deve retornar valor null, após ter parâmetros errados', () => {
        expect(getFilter(56, "Aluilson")).toBeNull();
    });
});