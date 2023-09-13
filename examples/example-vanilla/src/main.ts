import { setupCounter } from './counter.ts'
import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button data-element="counter" type="button"></button>
    </div>
    <div class="card">
      <button data-element="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

for (let counter of Array.from(document.querySelectorAll<HTMLButtonElement>('[data-element=counter]'))) {
  setupCounter(counter)
}

