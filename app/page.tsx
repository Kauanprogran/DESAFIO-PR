import { Button } from "@/components/button";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>M00 — Design System</h1>
        <p>Tokens, componentes e padrões visuais do DESAFIO PR.</p>
      </header>

      <section className={styles.section} aria-labelledby="colors-heading">
        <h2 id="colors-heading">Paleta de Cores (6.1)</h2>
        <div className={styles.swatches}>
          {[
            { label: "Primary", var: "--color-primary" },
            { label: "Primary Hover", var: "--color-primary-hover" },
            { label: "Primary Light", var: "--color-primary-light" },
            { label: "Primary Dark", var: "--color-primary-dark" },
            { label: "Success", var: "--color-success" },
            { label: "Error", var: "--color-error" },
            { label: "Warning", var: "--color-warning" },
            { label: "Info", var: "--color-info" },
            { label: "Neutral 50", var: "--color-neutral-50" },
            { label: "Neutral 100", var: "--color-neutral-100" },
            { label: "Neutral 200", var: "--color-neutral-200" },
            { label: "Neutral 300", var: "--color-neutral-300" },
            { label: "Neutral 400", var: "--color-neutral-400" },
            { label: "Neutral 500", var: "--color-neutral-500" },
            { label: "Neutral 600", var: "--color-neutral-600" },
            { label: "Neutral 700", var: "--color-neutral-700" },
            { label: "Neutral 800", var: "--color-neutral-800" },
            { label: "Neutral 900", var: "--color-neutral-900" },
          ].map((color) => (
            <div key={color.var} className={styles.swatch}>
              <div
                className={styles.swatchPreview}
                style={{ background: `var(${color.var})` }}
              />
              <span className={styles.swatchLabel}>{color.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="typo-heading">
        <h2 id="typo-heading">Tipografia (6.2)</h2>
        <div className={styles.typeScale}>
          {[
            { size: "text-xs", label: "text-xs (12px)", sample: "Texto auxiliar" },
            { size: "text-sm", label: "text-sm (14px)", sample: "Texto pequeno" },
            { size: "text-base", label: "text-base (16px)", sample: "Texto base" },
            { size: "text-lg", label: "text-lg (18px)", sample: "Texto grande" },
            { size: "text-xl", label: "text-xl (20px)", sample: "Heading pequeno" },
            { size: "text-2xl", label: "text-2xl (24px)", sample: "Heading médio" },
            { size: "text-3xl", label: "text-3xl (30px)", sample: "Heading grande" },
            { size: "text-4xl", label: "text-4xl (36px)", sample: "Heading extra" },
          ].map((t) => (
            <div key={t.size} className={styles.typeItem}>
              <small>{t.label}</small>
              <p style={{ fontSize: `var(--${t.size})`, margin: 0 }}>
                {t.sample}
              </p>
            </div>
          ))}
        </div>
        <div className={styles.weights}>
          <h3>Pesos disponíveis</h3>
          {[400, 500, 600, 700].map((w) => (
            <span
              key={w}
              style={{ fontWeight: w, marginRight: "var(--spacing-4)" }}
            >
              Weight {w}
            </span>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="buttons-heading">
        <h2 id="buttons-heading">Botões (6.5)</h2>
        <h3>Variants + Sizes</h3>
        {(["primary", "secondary", "outline", "ghost", "danger"] as const).map(
          (variant) => (
            <div key={variant} className={styles.buttonRow}>
              {(["sm", "md", "lg"] as const).map((size) => (
                <Button key={size} variant={variant} size={size}>
                  {variant} {size}
                </Button>
              ))}
            </div>
          )
        )}

        <h3>Estados</h3>
        <div className={styles.buttonRow}>
          <Button variant="primary">Default</Button>
          <Button variant="primary" loading>
            Carregando
          </Button>
          <Button variant="primary" success>
            Sucesso
          </Button>
          <Button variant="primary" error>
            Erro
          </Button>
          <Button variant="primary" disabled>
            Desabilitado
          </Button>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="spacing-heading">
        <h2 id="spacing-heading">Espaçamento (6.3) — escala de 4px</h2>
        <div className={styles.spacingGrid}>
          {[1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24].map((s) => (
            <div key={s} className={styles.spacingItem}>
              <div
                className={styles.spacingBar}
                style={{ width: `var(--spacing-${s})` }}
              />
              <small>spacing-{s} = {s * 4}px</small>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section} aria-labelledby="radius-heading">
        <h2 id="radius-heading">Border Radius (6.4)</h2>
        <div className={styles.radiusRow}>
          {[
            { token: "radius-sm", label: "sm (4px)" },
            { token: "radius-md", label: "md (8px)" },
            { token: "radius-lg", label: "lg (12px)" },
            { token: "radius-xl", label: "xl (16px)" },
            { token: "radius-full", label: "full (9999px)" },
          ].map((r) => (
            <div key={r.token} className={styles.radiusBox}>
              <div
                className={styles.radiusDot}
                style={{ borderRadius: `var(--${r.token})` }}
              />
              <small>{r.label}</small>
            </div>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <p>M00 — Design System &bull; DESAFIO PR &bull; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
