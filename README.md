# Imersão ao Cypress

## Cypress: do zero à integração contínua

- Dia 1:
    Cypress Essencial Mindmap – Vídeo
    Cypress Essencial Mindmap – Mapa para download
    NodeJS – Download
    Visual Studio Code – Download
    Plugins do Visual Studio Code:
        Mocha ES6 Snippets
        Cypress Helper
        Cuke Steps Generator
        Cucumber (Gherkin) Full Support
    Meus snippets – Gist
    Cypress – Documentação

- Dia 2:
     Cypress Essencial Mindmap – Mapa para download
    Site que vamos testar – http://demo.automationtesting.in
    Cypress – Documentação
    Cypress Schema – Link
    Chancejs – Documentação
    Cypress File Upload – Documentação
    JSON Formatter & Validator – Link

- Dia 3: 
    Cypress Config – Link
    Gherkin (Behat) – Documentação
    Imagem do início, explicando BDD – Imagem
    Plugin do Cypress para integrar com o Cucumber – Link

- Dia 4:
    Relatorios com Mochawesome

    - mocha -> lib de execução de testes
    - mochawesome -> formato de relatório nativo do cypress
    - mochawesome-report-generator -> gerar um relatório baseado em um .json
        - problema -> um arquivo .json para cada spec.
    - mochawesome-merge -> unifica o resultado de varios .json em um arquivo único
    - cypress-multi-reporters -> permite o uso de multiplos tipos de relatório so final da execução. 

Execução:
    >> npm run cy:run
    >> npm run report:merge
    >> npm run report:mocha
    >> npm run report:clean

    Relatórios com Cucumber HTML Reports

    - cucumber-html-reporter -> gera um relatorio html baseado nos arquivos. 

    >> npm run cy:run:cucumber
    >> node cypress/reports/reporter.js

    Links adicionais:

    Cucumber Reports – Documentação
    Mochawesome Reports – Documentação
    Código do reporter.js criado, para conferir – Gist

DIA 5: 
