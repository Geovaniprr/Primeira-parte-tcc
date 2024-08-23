Descrição do Commit:

Implementação das telas e componentes principais do aplicativo CaEntreNos utilizando React Native.

Detalhes do Commit:

Estrutura do Projeto:

Organização do projeto seguindo uma estrutura de pastas clara, com a separação das telas na pasta telas e componentes reutilizáveis na pasta components.
Componentes:

Texto.js: Componente reutilizável para gerenciar a estilização de textos com as fontes customizadas PoppinsRegular e PoppinsBold.
Telas Implementadas:

Cadastro.js: Tela para o cadastro de usuários, incluindo validação de campos, máscara para senha, e exibição de modal de confirmação.
EnvioRelato.js: Tela que confirma o envio de um relato, com um botão para retornar à página inicial.
Home.js: Tela principal que exibe o avatar do usuário, menu de navegação horizontal e uma seção de perguntas frequentes (FAQ) com expansão das respostas.
HomeConfiguracoes.js: Tela de configurações do perfil do usuário, permitindo o acesso às configurações de informações pessoais, segurança, e suporte técnico.
InformacoesPessoais.js: Tela para visualização e edição de informações pessoais do usuário, com ícones de edição para cada campo.
Relatar_1.js e Relatar_2.js: Telas sequenciais para o relato de problemas, com formulários e validações de campos, além de uma opção para tornar o relato público.
SenhaSeguranca.js: Tela para gerenciar a segurança da conta, com validação de senha e exibição de modal para alteração.
SuporteTecnico.js: Tela de suporte técnico, com instruções para envio de e-mail e um botão para redirecionar o usuário ao aplicativo de e-mail.
Dependências e Bibliotecas:

React Native: Framework principal utilizado para a criação das interfaces móveis.
Expo: Utilizado para facilitar o desenvolvimento, incluindo o uso de fontes customizadas e o LinearGradient.
React Native Vector Icons: Para a inclusão de ícones customizados em diferentes partes do aplicativo.
React Native Picker: Implementação de dropdowns para seleção de opções nas telas de relato.
Ferramentas de Estilização:

Uso de StyleSheet para estilização das telas, garantindo consistência visual e facilidade de manutenção.
Funcionalidades Adicionais:

Validação de senhas com critérios específicos (mínimo de 8 caracteres, inclusão de letra maiúscula e caracteres especiais).
Implementação de navegação entre telas utilizando botões e ícones.
Exibição de mensagens e modais de confirmação para uma melhor experiência do usuário.
Outros Arquivos:

Configurações de ambiente e dependências foram gerenciadas pelos arquivos package.json, babel.config.js, e app.json.
