import { describe, it, expect } from 'vitest'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import {App} from '../App.tsx'

describe('App.tsx tests', () => {
    it('ao preencher as informações de peso e altura com 70kgs e 1.75m, é esperado que a interface exiba o IMC e a categoria calculados após o clique no botão Calcular IMC', async () => {
        render(<App />)

        // ACT
        await userEvent.type(screen.getByRole('spinbutton', { name: 'Peso (kg):' }), '70')
        await userEvent.type(screen.getByRole('spinbutton', { name: 'Altura (m):' }), '1.75')
        await userEvent.click(screen.getByRole('button', { name: 'Calcular IMC' }))

        expect(
            screen.queryByTestId('result')
        ).toHaveTextContent('Seu índice IMC é 22.86, considerado Normal')
    })
})