#language: pt

Funcionalidade: Cadastro

    Como usuário, desejo realizar um cadastro
    Para que possa acessar o sistema

        Cenario: Cadastro de novo usuário
            Dado que acesso o site
             Quando informar meus dados
              E salvar
             Entao deve ser cadastrado com sucesso

# Given / Dado -> contexto
# When / Quando -> ação executada
# Then / Entao -> resultado esperado
# And / E -> continuidade do passo anterior