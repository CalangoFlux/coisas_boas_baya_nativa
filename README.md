# Coisas Boas da Baya Nativa

Um portal web que celebra saberes, sabores e soluções da floresta viva através de práticas regenerativas, educação libertadora e produtos naturais.

## 🌿 Sobre o Projeto

Este portal é estruturado como um hub de landing pages independentes, cada uma com sua própria identidade visual coerente com o tema regenerativo, indígena-contemporâneo e tropical.

### Páginas do Portal:
- **Portal Principal**: Apresentação geral e navegação
- **Serviços Baya Nativa**: Consultorias, vivências e assessorias
- **Educação Regenerativa**: Programas educativos e formação
- **Produtos das Florestas**: Hub para marcas parceiras
  - **Cacau Flor**: Chocolateria artesanal
  - **Namoa**: Farmácia nativa e produtos naturais
- **Comunidades e Coletivos**: Hub para redes e articulações
  - **Teia dos Povos**: Rede de povos originários
- **Agenda**: Eventos e vivências

## 🚀 Tecnologias

- **Next.js 15** com App Router
- **React 18** com TypeScript
- **TailwindCSS** para estilização
- **Framer Motion** para animações
- **Lucide React** para ícones
- **shadcn/ui** para componentes

## 📦 Instalação

1. Clone o repositório:
\`\`\`bash
git clone https://github.com/CalangoFlux/coisas_boas_baya_nativa.git
cd coisas_boas_baya_nativa
\`\`\`

2. Instale as dependências:
\`\`\`bash
npm install
# ou
yarn install
\`\`\`

3. Configure as variáveis de ambiente (opcional):
\`\`\`bash
cp .env.example .env.local
\`\`\`

4. Execute o projeto:
\`\`\`bash
npm run dev
# ou
yarn dev
\`\`\`

5. Acesse http://localhost:3000

## 🌱 Deploy na Vercel

1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente (se necessário)
3. Deploy automático a cada push na branch main

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/CalangoFlux/coisas_boas_baya_nativa)

## 🎨 Personalização

### Cores e Temas
As cores principais podem ser ajustadas no arquivo `tailwind.config.js` e `app/globals.css`.

### Conteúdo
- Textos e imagens podem ser editados diretamente nos componentes
- Adicione novas páginas criando arquivos em `app/nova-pagina/page.tsx`
- Componentes reutilizáveis estão em `components/`

### Funcionalidades
- **Carrinho de Compras**: Sistema simples integrado com WhatsApp
- **Formulários de Contato**: Envio via email
- **Navegação Responsiva**: Otimizada para todos os dispositivos

## 📁 Estrutura do Projeto

\`\`\`
├── app/
│   ├── page.tsx              # Portal principal
│   ├── servicos/page.tsx     # Serviços Baya Nativa
│   ├── educacao/page.tsx     # Educação Regenerativa
│   ├── produtos/page.tsx     # Hub Produtos das Florestas
│   ├── cacau-flor/page.tsx   # Marca Cacau Flor
│   ├── namoa/page.tsx        # Marca Namoa
│   ├── comunidades/page.tsx  # Hub Comunidades e Coletivos
│   ├── teia-dos-povos/page.tsx # Teia dos Povos
│   ├── agenda/page.tsx       # Agenda de eventos
│   ├── layout.tsx            # Layout raiz
│   └── globals.css           # Estilos globais
├── components/
│   ├── header.tsx            # Cabeçalho
│   ├── footer.tsx            # Rodapé
│   ├── cart-drawer.tsx       # Carrinho de compras
│   ├── cart-button.tsx       # Botão do carrinho
│   └── ui/                   # Componentes shadcn/ui
├── hooks/
│   └── use-cart.ts           # Hook do carrinho
├── public/                   # Arquivos estáticos
└── README.md
\`\`\`

## 🛒 Sistema de Carrinho

O projeto inclui um sistema de carrinho simples que:
- Armazena produtos no localStorage
- Calcula frete simulado
- Gera mensagem formatada para WhatsApp
- Suporta múltiplas lojas independentes

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🌍 Contato

- **Website**: [coisasboasbayanativa.com](https://coisasboasbayanativa.com)
- **Email**: contato@bayanativa.com
- **GitHub**: [@CalangoFlux](https://github.com/CalangoFlux)

---

© Coisas Boas da Baya Nativa – Código livre sob Licença MIT.

*Feito com 💚 pela natureza*
