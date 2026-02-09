import * as React from 'react';
import { OpenInV0Button } from '@/components/open-in-v0-button';
import { MyButton } from '@/registry/new-york/ui/my-button/my-button';

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">
          DLR shadcn custom UI
        </h1>
        <p className="text-muted-foreground">
          Biblioteca privada de componentes React baseada em shadcn/ui, pensada
          para reutilizar UI entre projetos e evoluir como um design system.
        </p>

        <div className="flex flex-wrap items-center gap-3 mt-2">
          <a
            href="https://storybook.dlrdev.com.br"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Abrir Storybook
          </a>

          <p className="text-xs text-muted-foreground">
            Veja exemplos, estados e documentação de todos os componentes
            diretamente no Storybook.
          </p>
        </div>
      </header>

      <main className="flex flex-col flex-1 gap-8">
        <section className="flex flex-col gap-4 border rounded-lg p-4 min-h-112.5 relative">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 sm:pl-3">
              <h2 className="text-sm font-medium">Meu primeiro botão</h2>
              <p className="text-xs text-muted-foreground">
                Componente de botão customizado exportado pelo registry e
                documentado no Storybook.
              </p>
            </div>
            <OpenInV0Button name="my-button" className="w-fit" />
          </div>

          <div className="flex items-center justify-center min-h-100 relative">
            <MyButton variant="outline">Hello World</MyButton>
          </div>
        </section>
      </main>
    </div>
  );
}
