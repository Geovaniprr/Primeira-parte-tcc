**Descrição do Commit:**

**Adicionei as telas e componentes principais do aplicativo `CaEntreNos`, que foi criado para melhorar a comunicação entre alunos, responsáveis e a administração escolar.**

---

**Detalhes do Commit:**

### Estrutura do Projeto:
- Organizei o projeto de forma que tudo ficasse bem estruturado e fácil de manter:
  - **`components/`:** Onde coloquei os componentes reutilizáveis que podem ser usados em várias partes do app.
  - **`telas/`:** Contém todas as telas principais do aplicativo.

### Componentes:
- **Texto.js:** Criei um componente reutilizável para gerenciar a estilização dos textos, utilizando as fontes customizadas `PoppinsRegular` e `PoppinsBold` para garantir uma aparência consistente e agradável em todo o aplicativo.

### Telas Implementadas:
- **Cadastro.js:** Desenvolvi a tela de cadastro, que inclui a validação dos campos e a confirmação por modal quando o cadastro é realizado com sucesso.

- **EnvioRelato.js:** Tela que confirma o envio do relato, agradecendo ao usuário pela confiança e permitindo que ele retorne à tela inicial.

- **Home.js:** Esta é a tela principal do aplicativo, onde coloquei o avatar do usuário, um menu de navegação horizontal, e uma seção de perguntas frequentes (FAQ) com respostas expansíveis.

- **HomeConfiguracoes.js:** Tela de configurações do perfil do usuário, permitindo que ele gerencie suas informações pessoais, segurança da conta, e acesse o suporte técnico.

- **InformacoesPessoais.js:** Tela onde o usuário pode visualizar e editar suas informações pessoais, como nome, e-mail, escola, matrícula e ano escolar.

- **Relatar_1.js e Relatar_2.js:** Duas telas que guiam o usuário na criação de relatos. Elas permitem que o usuário forneça detalhes iniciais, escolha temas, e decida se o relato será público ou privado.

- **SenhaSeguranca.js:** Tela que permite ao usuário gerenciar a segurança de sua conta, incluindo uma verificação rigorosa da senha e um modal para alteração de senha.

- **SuporteTecnico.js:** Tela de suporte técnico com instruções claras para contato por e-mail. Adicionei um botão que redireciona o usuário diretamente ao aplicativo de e-mail para facilitar o suporte.

### Dependências e Bibliotecas:
- **React Native:** Usei este framework para desenvolver as interfaces móveis do aplicativo.
  
- **Expo:** Ferramenta que ajudou a simplificar o desenvolvimento, incluindo o uso de fontes customizadas e efeitos de gradiente com `LinearGradient`.

- **React Native Vector Icons:** Biblioteca que usei para adicionar ícones customizados essenciais para a navegação e interface do usuário.

- **React Native Picker:** Utilizei este componente para criar dropdowns, que permitem ao usuário selecionar opções como ano escolar e tema do relato.

### Ferramentas de Estilização:
- **StyleSheet:** Estilizei todas as telas com `StyleSheet` para garantir uma aparência consistente e uma experiência de usuário agradável e intuitiva.

### Funcionalidades Adicionais:
- **Validação de Senhas:** Implementei critérios rigorosos para as senhas (mínimo de 8 caracteres, incluindo letra maiúscula e caracteres especiais) para garantir a segurança das contas dos usuários.
  
- **Navegação Intuitiva:** Adicionei botões e ícones para facilitar a navegação entre as telas.

- **Modais de Confirmação:** Incluí modais de confirmação para ações importantes, proporcionando feedback imediato ao usuário.

### Outros Arquivos:
- **Configuração do Ambiente:** Gerenciei as dependências e configurações do projeto através dos arquivos `package.json`, `babel.config.js`, e `app.json`, garantindo que o ambiente de desenvolvimento esteja preparado para todas as funcionalidades do aplicativo.
