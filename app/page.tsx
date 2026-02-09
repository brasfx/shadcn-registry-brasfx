import * as React from 'react';
import { OpenInV0Button } from '@/components/open-in-v0-button';
import { MyButton } from '@/registry/new-york/ui/my-button/my-button';

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Custom Registry</h1>
        <p className="text-muted-foreground">
          A custom registry for distributing code using shadcn.
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-112.5 relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              Meu primeiro botão
            </h2>
            <OpenInV0Button name="my-button" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-100 relative">
            <MyButton variant="outline">Hello World</MyButton>
          </div>
        </div>
      </main>
    </div>
  );
}
