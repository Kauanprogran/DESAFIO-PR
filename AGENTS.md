<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Sessão — 11/06/2026

### Problema reportado pelo usuário
- "Textos falhados" (fonte aparecendo quebrada/troca brusca)
- Design "muito simples"
- Textos não visíveis após deploy

### Correções aplicadas
1. **Fonte**: Removeu `next/font/google Inter` (causava FOUT e texto invisível). Trocou para fonte nativa do sistema (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`) com `!important` no body.
2. **CSS**: Removeu `@layer base` e `@layer utilities` — Tailwind v4 tem comportamento imprevisível com esses wrappers. Regras CSS colocadas diretamente.
3. **Fundo**: Migrou para tema escuro `#0F0A2E` com cards glass semi-transparentes e texto branco.
4. **Cards**: Redesenhados sem preços, apenas ícone + título + descrição. Fundo `rgba(255,255,255,0.06)` com backdrop-filter.
5. **Mapa**: Adicionado mapa interativo do Paraná com Leaflet (10 cidades com circleMarkers).
6. **Pet SOS**: Seção destacada com botão ativo para `/pet-sos`.
7. **Depoimentos**: Removidos por serem falsos.
8. **Estatísticas**: Removidas por serem números falsos.
9. **WhatsApp**: Número atualizado para `+55 41 8415-8693` no botão flutuante.
10. **Adereços pets**: 🐾 🐕 🐱 🦴 🐰 🐶 flutuando como decoração.

### Problemas de build
- `vercel.json` tinha `buildCommand: "prisma generate && next build"` sobrescrevendo o script do `package.json`. Corrigido para `"next build"`.
- `prisma generate` falhava no Vercel sem `DATABASE_URL`. `postinstall` alterado para `npx prisma generate || echo 'skipped'`.
- Variável `DATABASE_URL` adicionada ao Vercel (production).

### Pacotes instalados
- `framer-motion` — animações
- `leaflet`, `react-leaflet`, `@types/leaflet` — mapa interativo

### Deploy
- URL: https://desafio-pr.vercel.app
- Último commit: `72cbaa2` — "Update WhatsApp number para +55 41 8415-8693"

### Para continuar amanhã
- Usuário pediu foco em "designer interativo e nos textos" — pendente refinamento visual
- Possível: ajustar animações, melhorar seções existentes, adicionar conteúdo real
- Fonte nativa está resolvida (texto sempre visível)
