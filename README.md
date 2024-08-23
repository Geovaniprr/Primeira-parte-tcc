**Descrição do Commit:**

**Implemento das telas frontend do APP `CaEntreNos`, que foi desenvolvido afim de melhorar a comuição entre escola e aluno.** 

---

**Detalhes do Commit:**

### Estrutura do Projeto:
- Organização do projeto utilizando uma estrutura de pastas clara e modular:
  - **`components/`:** Contém componentes para serem reutilizados
  - **`telas/`:** Contém as telas principais da interface do usuario.

### Componentes:
- **Texto.js:** Componente reutilizável que gerencia a estilização de textos usando as fontes personalizadas "PoppinsRegular" e "PoppinsBold" para garantir uma apresentação visual consistente e elegante em todo o aplicativo.

### Telas Implementadas:
- **Cadastro.js:** Tela para o cadastro de novos usuários com padrões de senha segura e validação de campos obrigatórios. Para melhorar a experiência do usuário, adicione um modal de confirmação e uma máscara para senhas.
  
- **EnvioRelato.js:** Tela de confirmação de envio de relatos, agradecendo ao usuário pela confiança e um botão para retornar à página inicial

- **Home.js:** Tela principal, que funciona como centro do aplicativo. Exibe o avatar do usuário e um menu horizontal de navegação com várias funcionalidades. Acrescente também uma seção de Perguntas Frequentes (FAQ), que oferece mais respostas.

- **HomeConfiguracoes.js:** A tela de configurações permite que o usuário controle seus dados pessoais, proteja sua conta e obtenha suporte técnico.

- **InformacoesPessoais.js:** Tela destinada à visualização e edição de informações pessoais; há campos editáveis para nome, e-mail, escola, matrícula e ano escolar.

- **Relatar_1.js e Relatar_2.js:** Tela sequencial para a criação de relatos O usuário pode fornecer informações iniciais sobre o problema, escolher temas e detalhes e escolher se o relato deve ser divulgado ou mantido privado.

- **SenhaSeguranca.js:** A tela possui um sistema de validação de senha que cumpre altos padrões de segurança (mínimo de 8 caracteres, uma letra maiúscula e um caractere especial). Adicionar um modal para alterar a senha.

- **SuporteTecnico.js:** A tela de suporte técnico fornece instruções detalhadas para entrar em contato por e-mail. Incorporar um botão que redireciona diretamente ao aplicativo de e-mail torna o processo de suporte mais fácil.

### Dependências e Bibliotecas:
- **React Native:** O principal framework usado para criar as interfaces móveis do aplicativo.
  
- **Expo:** A ferramenta é usada para facilitar o desenvolvimento e inclui o uso de fontes personalizadas e o "LinearGradient" para transições de cores suaves.

- **React Native Vector Icons:** A biblioteca fornece ícones personalizados, que são essenciais para a navegação e a interface do usuário.

- **React Native Picker:** Implementação de menus de seleção que permitem que os usuários selecionem opções nas telas de relato, como ano escolar e tema.

### Ferramentas de Estilização:
- **StyleSheet:** Usado para estilizar todas as telas, garantindo uma aparência coesa e uma experiência de usuário agradável e fácil de usar.

### Funcionalidades Adicionais:
- **Validação de Senhas:** Exige regras rígidas para senhas, incluindo letra maiúscula e caracteres especiais, para proteger as contas dos usuários.
  
- **Navegação Intuitiva:** Para facilitar a navegação entre as várias telas do aplicativo, foram desenvolvidos botões e ícones.

- **Modais de Confirmação:** Proporciona feedback imediato ao usuário e melhora a usabilidade do aplicativo exibindo mensagens e modais de confirmação para ações importantes.
  
### Outros Arquivos:
- **Configuração do Ambiente:** Os arquivos package.json, babel.config.js e app.json são usados para gerenciar as dependências e configurações do projeto, garantindo que o ambiente de desenvolvimento esteja preparado para suportar todas as funcionalidades do aplicativo.
