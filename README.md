<h1 align="center">Cypress & Cucumber</h1>

## Instalar `Libs`

```
yarn add cypress-cucumber-preprocessor@4.0.0 cypress@4.6.0 --dev
```

## Configuracoes

> Adicione as configuracoes abaixo no `package.json`

```json
"cypress-cucumber-preprocessor": {
  "nonGlobalStepDefinitions": true
}
```

## Rodar os `Tests`

<br />

<div align="center">
  <table border="1">
    <tr>
        <td>Browser</td>
        <td>Command</td>
    </tr>
    <tr>
        <td>Firefox</td>
        <td>yarn test:all --browser=firefox</td>
    </tr>
    <tr>
        <td>Chrome</td>
        <td>yarn test:all --browser=chrome</td>
    </tr>
    <tr>
        <td>Edge</td>
        <td>yarn test:all --browser=edge</td>
    </tr>
    <tr>
        <td>Chromium</td>
        <td>yarn test:all --browser=chromium</td>
    </tr>
  </table>
</div>

