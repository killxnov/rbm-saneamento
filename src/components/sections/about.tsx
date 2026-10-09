export function AboutMe() {
  return (
    <section id="sobre" className="flex w-full flex-col gap-6 px-4 py-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Sobre o Profissional</h2>
        <div className="h-1 w-12 rounded bg-blue-600"></div>
      </div>
      
      <div className="flex flex-col gap-6 sm:flex-row">
        {/* Placeholder de Imagem */}
        <div className="aspect-square w-full sm:w-1/3 rounded-2xl bg-slate-200"></div>
        
        <div className="flex flex-1 flex-col justify-center gap-4">
          <p className="text-slate-700 leading-relaxed">
            Com mais de X anos de experiência em serviços de manutenção e obras, 
            meu objetivo é entregar resultados duradouros com limpeza, pontualidade 
            e transparência.
          </p>
          <ul className="flex flex-col gap-2 text-sm font-medium text-slate-800">
            <li>✓ Orçamento sem compromisso</li>
            <li>✓ Ferramentas próprias e modernas</li>
            <li>✓ Garantia no serviço prestado</li>
          </ul>
        </div>
      </div>
    </section>
  );
}