"use client";

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para capturar UTMs, salvar num CRM simples (se houver) 
    // e redirecionar para a API do WhatsApp com mensagem pré-formatada.
    alert("Redirecionando para WhatsApp...");
  };

  return (
    <section id="contato" className="w-full px-4 py-8">
      <div className="rounded-3xl bg-blue-900 p-6 sm:p-10 shadow-2xl">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-white">Solicite um Orçamento</h2>
          <p className="mt-2 text-sm text-blue-200">
            Preencha os dados abaixo e fale diretamente comigo no WhatsApp.
          </p>
        </div>

        {/* Formulário focado em conversão X1 */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm font-medium text-blue-100">Nome Completo</label>
            <input 
              id="name"
              type="text" 
              required
              placeholder="Como prefere ser chamado?" 
              className="rounded-xl border-none bg-white/10 px-4 py-3 text-white placeholder-blue-300 outline-none ring-2 ring-transparent transition-all focus:bg-white/20 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="service" className="text-sm font-medium text-blue-100">Qual é o serviço?</label>
            <textarea 
              id="service"
              required
              rows={3}
              placeholder="Descreva brevemente o que você precisa..." 
              className="resize-none rounded-xl border-none bg-white/10 px-4 py-3 text-white placeholder-blue-300 outline-none ring-2 ring-transparent transition-all focus:bg-white/20 focus:ring-blue-400"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="mt-4 w-full rounded-xl bg-green-500 px-4 py-4 font-bold text-white shadow-lg transition-transform hover:-translate-y-1 hover:bg-green-600 active:translate-y-0 flex items-center justify-center gap-2"
          >
            {/* Ícone de WhatsApp (Pode usar react-icons) */}
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.711.927 3.142.929 3.178 0 5.767-2.587 5.769-5.766 0-3.181-2.588-5.771-5.762-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.125-.341-.156-.761-.34-1.181-.59-1.274-.756-2.147-2.082-2.213-2.172-.065-.09-.526-.702-.526-1.34.001-.637.33-1.233.456-1.383.125-.152.273-.189.363-.189.091 0 .182.001.261.005.084.004.195-.03.3.224.111.272.383.938.418 1.011.034.073.056.158.012.247-.044.089-.067.144-.133.223-.067.078-.142.169-.199.231-.064.067-.132.139-.059.266.073.127.324.538.695.871.482.433.882.569 1.009.631.127.063.203.054.279-.033.076-.088.328-.383.415-.515.088-.132.176-.11.293-.066.117.045.74.348.868.411.127.063.212.095.243.149.031.054.031.314-.113.719z" />
            </svg>
            Falar pelo WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}