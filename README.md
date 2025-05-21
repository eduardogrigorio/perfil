# Portfólio Profissional - Eduardo Grigorio

Este repositório contém o código-fonte do site de portfólio profissional de Eduardo Grigorio, desenvolvido com React, TypeScript e Tailwind CSS.

## Visão Geral

O site apresenta um design moderno e responsivo, com foco em experiência do usuário (UX) e acessibilidade. Ele inclui seções para apresentação pessoal, habilidades técnicas, experiência profissional e formulário de contato.

## Tecnologias Utilizadas

- React 18
- TypeScript
- Tailwind CSS
- Vite (para build e desenvolvimento)

## Características

- Design responsivo para todos os dispositivos
- Animações e microinterações para melhor experiência do usuário
- Acessibilidade seguindo boas práticas WCAG
- Formulário de contato funcional
- Otimizado para SEO

## Instalação e Execução Local

1. Clone este repositório:
```bash
git clone https://github.com/eduardogrigorio/perfil.git
cd perfil
```

2. Instale as dependências:
```bash
pnpm install
```

3. Execute o servidor de desenvolvimento:
```bash
pnpm run dev
```

4. Acesse o site em seu navegador:
```
http://localhost:5173
```

## Publicação no GitHub Pages

Este projeto está configurado para ser facilmente publicado no GitHub Pages.

### Método 1: Usando gh-pages (recomendado)

1. Certifique-se de que o repositório já existe no GitHub
2. Execute o comando de deploy:
```bash
pnpm run deploy
```

### Método 2: Deploy manual

1. Gere o build do projeto:
```bash
pnpm run build
```

2. Copie o conteúdo da pasta `dist` para a branch `gh-pages` do seu repositório GitHub

## Estrutura do Projeto

```
/src
  /assets        # Imagens e recursos estáticos
  /components    # Componentes React reutilizáveis
    /ui          # Componentes de UI básicos
  /hooks         # Custom React hooks
  /lib           # Funções utilitárias
  App.tsx        # Componente principal
  index.css      # Estilos globais
  main.tsx       # Ponto de entrada
```

## Personalização

Para personalizar o conteúdo do site:

1. Edite os componentes em `/src/components` para atualizar textos e informações
2. Modifique as cores e estilos no arquivo `tailwind.config.js`
3. Adicione ou substitua imagens na pasta `/src/assets`

## Licença

Este projeto está licenciado sob a licença MIT.

---

Desenvolvido com ❤️ por Eduardo Grigorio
