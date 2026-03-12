import { motion } from "framer-motion";
import { Terminal, Zap, RefreshCw, Shield, Github, ArrowRight, Check } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const TerminalBlock = () => (
  <div className="rounded-lg border border-border bg-card glow-box overflow-hidden font-mono text-sm">
    <div className="flex items-center gap-2 px-4 py-3 border-b border-border">

      <div className="w-3 h-3 rounded-full bg-destructive/60" />
      <div className="w-3 h-3 rounded-full bg-muted-foreground/40" />
      <div className="w-3 h-3 rounded-full bg-primary/50" />
      <span className="ml-2 text-muted-foreground text-xs">terminal</span>
    </div>
    <div className="p-5 space-y-2 text-muted-foreground">
      <p><span className="text-primary">$</span> antigravity --run</p>
      <p className="text-muted-foreground/60">⚠ Aguardando confirmação manual...</p>
      <p className="text-muted-foreground/60">⚠ "Executar comando?" [S/N]</p>
      <p className="text-muted-foreground/60 line-through">⚠ Precisa clicar toda vez...</p>
      <div className="h-px bg-border my-3" />
      <p><span className="text-primary">$</span> antigravity-real-autorun</p>
      <p className="text-primary">✔ Autorun ativado com sucesso!</p>
      <p className="text-primary">✔ Executando automaticamente...</p>
      <p className="text-primary">✔ Sem interrupções. Sem prompts.<span className="terminal-cursor ml-1">▊</span></p>
    </div>
  </div>
);

const features = [
  {
    icon: Zap,
    title: "Autorun de verdade",
    desc: "Chega de clicar em 'Executar' toda vez. Roda automaticamente sem intervenção.",
  },
  {
    icon: RefreshCw,
    title: "Automação Windows",
    desc: "Script inteligente que automatiza a confirmação no Windows. Configure uma vez, funcione sempre.",
  },
  {
    icon: Shield,
    title: "Open Source",
    desc: "Código aberto, transparente e seguro. Veja exatamente o que roda na sua máquina.",
  },
];

const steps = [
  { num: "01", text: "Clone o repositório do GitHub" },
  { num: "02", text: "Execute o script de instalação" },
  { num: "03", text: "Antigravity roda sem pedir permissão" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background gradient-radial-top">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-5 max-w-6xl mx-auto">
        <div className="flex items-center gap-2 font-mono">
          <Terminal className="w-5 h-5 text-primary" />
          <span className="text-foreground font-bold text-lg">antigravity<span className="text-primary">-real-autorun</span></span>
        </div>
        <a
          href="https://github.com/suissa/antigravity-real-autorun"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-mono font-medium text-foreground border border-border px-3 py-1.5 rounded-md hover:bg-secondary transition-colors"
        >
          <Github className="w-4 h-4" />
          GitHub
        </a>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 pt-0 pb-24">
        
      <img src="/logo.png" alt="Logo" className="w-auto h-[300px] mx-auto" />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.h1
              custom={1}
              variants={fadeUp}
              className="text-4xl text-center md:text-5xl lg:text-6xl cal-sans-regular leading-tight"
            >
              Autorun que funciona de verdade
            </motion.h1>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-lg text-muted-foreground max-w-lg"
            >
              Cansado do Antigravity pedindo confirmação toda vez? Este projeto automatiza tudo no Windows — sem prompts, sem cliques manuais. Só roda.
            </motion.p>
            <motion.div custom={3} variants={fadeUp} className="flex gap-4 flex-wrap">
              <a
                href="https://github.com/suissa/antigravity-real-autorun"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-mono font-bold px-6 py-3 rounded-lg hover:brightness-110 transition-all glow-box"
              >
                Ver no GitHub <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center gap-2 border border-border text-foreground font-mono px-6 py-3 rounded-lg hover:bg-secondary transition-colors"
              >
                Como funciona
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="animate-float"
          >
            <TerminalBlock />
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              variants={fadeUp}
              className="p-6 rounded-lg border border-border bg-card hover:glow-border transition-all"
            >
              <f.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-bold font-mono mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* How it works */}
      <section id="como-funciona" className="max-w-6xl mx-auto px-6 md:px-12 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.h2 custom={0} variants={fadeUp} className="text-3xl md:text-4xl font-bold font-mono">
            Como <span className="text-primary">funciona</span>
          </motion.h2>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((s, i) => (
            <motion.div key={s.num} custom={i} variants={fadeUp} className="text-center space-y-3">
              <span className="text-5xl font-mono font-bold text-primary/20">{s.num}</span>
              <p className="text-foreground font-medium">{s.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-12 rounded-xl border border-border bg-card glow-box"
        >
          <h2 className="text-2xl md:text-3xl font-bold font-mono mb-4">
            Pare de clicar.<br />
            <span className="text-primary glow-text">Deixe rodar.</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            O Antigravity Real-Auto-run resolve de vez o problema de ter que confirmar execução manualmente.
          </p>
          <a
            href="https://github.com/suissa/antigravity-real-autorun"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-mono font-bold px-8 py-4 rounded-lg hover:brightness-110 transition-all glow-box text-lg"
          >
            <Github className="w-5 h-5" /> Acessar repositório
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 md:px-12 py-8 border-t border-border text-center text-muted-foreground text-sm font-mono">
        antigravity-real-autorun • open source • feito com 💙
      </footer>
    </div>
  );
};

export default Index;
