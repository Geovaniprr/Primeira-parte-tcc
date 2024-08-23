**Descrição do Commit:**

**Implementação das telas e componentes principais do aplicativo `CaEntreNos`, desenvolvido para facilitar e melhorar a comunicação entre alunos, responsáveis e a administração escolar.** 

---

**Detalhes do Commit:**

### Estrutura do Projeto:
- Organização do projeto utilizando uma estrutura de pastas clara e modular:
  - **`components/`:** Contém componentes reutilizáveis para diferentes partes do aplicativo.
  - **`telas/`:** Contém as telas principais que compõem a interface do usuário.

### Componentes:
- **Texto.js:** Componente reutilizável que gerencia a estilização de textos, utilizando as fontes customizadas `PoppinsRegular` e `PoppinsBold` para garantir uma apresentação visual consistente e elegante em todo o aplicativo.

### Telas Implementadas:
- **Cadastro.js:** Tela para o cadastro de novos usuários, com validação de campos obrigatórios e critérios de senha segura. Inclui máscara para senhas e um modal de confirmação para melhorar a experiência do usuário.
  
- **EnvioRelato.js:** Tela de confirmação de envio de relatos, agradecendo ao usuário pela confiança e oferecendo um botão para retornar à página inicial.

- **Home.js:** Tela principal que serve como hub do aplicativo. Exibe o avatar do usuário e um menu de navegação horizontal com diferentes funcionalidades. Inclui também uma seção de Perguntas Frequentes (FAQ) com expansão de respostas.

- **HomeConfiguracoes.js:** Tela de configurações, onde o usuário pode gerenciar informações pessoais, segurança da conta e acessar o suporte técnico.

- **InformacoesPessoais.js:** Tela dedicada à visualização e edição de informações pessoais, com campos editáveis para nome, e-mail, escola, matrícula e ano escolar.

- **Relatar_1.js e Relatar_2.js:** Telas sequenciais para a criação de relatos. O usuário pode fornecer informações iniciais sobre o problema, selecionar temas e detalhes, e optar por tornar o relato público ou mantê-lo privado.

- **SenhaSeguranca.js:** Tela para gerenciar a segurança da conta, com um sistema de validação de senha que assegura conformidade com critérios de segurança elevados (mínimo de 8 caracteres, uma letra maiúscula e um caractere especial). Inclui um modal para a alteração de senha.

- **SuporteTecnico.js:** Tela de suporte técnico com instruções claras para o usuário entrar em contato por e-mail. Inclui um botão que redireciona diretamente ao aplicativo de e-mail, facilitando o processo de suporte.

### Dependências e Bibliotecas:
- **React Native:** Framework principal utilizado para a criação das interfaces móveis do aplicativo.
  
- **Expo:** Ferramenta usada para simplificar o desenvolvimento, incluindo o uso de fontes customizadas e o `LinearGradient` para criar transições suaves de cores.

- **React Native Vector Icons:** Biblioteca utilizada para a inclusão de ícones customizados, que são essenciais para a navegação e a interface do usuário.

- **React Native Picker:** Implementação de dropdowns que permitem ao usuário selecionar opções nas telas de relato, como ano escolar e tema do relato.

### Ferramentas de Estilização:
- **StyleSheet:** Utilizado para a estilização de todas as telas, garantindo uma aparência coesa e uma experiência de usuário agradável e intuitiva.

### Funcionalidades Adicionais:
- **Validação de Senhas:** Implementação de critérios rigorosos para senhas (mínimo de 8 caracteres, inclusão de letra maiúscula e caracteres especiais), garantindo a segurança das contas dos usuários.
  
- **Navegação Intuitiva:** Botões e ícones foram implementados para permitir uma navegação fácil e intuitiva entre as diferentes telas do aplicativo.

- **Modais de Confirmação:** Exibição de mensagens e modais de confirmação para ações importantes, proporcionando feedback imediato ao usuário e melhorando a usabilidade do aplicativo.

### Outros Arquivos:
- **Configuração do Ambiente:** As dependências e configurações do projeto são gerenciadas através dos arquivos `package.json`, `babel.config.js`, e `app.json`, garantindo que o ambiente de desenvolvimento esteja preparado para suportar todas as funcionalidades do aplicativo.
