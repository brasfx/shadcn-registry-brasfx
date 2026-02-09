import type { Meta, StoryObj } from '@storybook/react';
import { MyButton } from '@/registry/new-york/ui/my-button/my-button'; // ajusta o path pro teu

const meta: Meta<typeof MyButton> = {
  title: 'Meu UI/MyButton', // agrupa no sidebar
  component: MyButton,
  tags: ['autodocs'], // gera docs automático
  parameters: {
    // Configurações de layout
    layout: 'centered', // centraliza o componente
    controls: {
      // adiciona controles de configuração
      sort: 'requiredFirst', // ordena os controles de acordo com a ordem das propriedades
      expanded: true, // exibe todos os controles
    },
  },
  argTypes: {
    // Configurações de estilo
    variant: {
      options: ['default', 'outline', 'destructive'],
      control: {
        type: 'radio',
        labels: {
          default: 'default',
          outline: 'outline',
          destructive: 'destructive',
        },
      },
      table: {
        type: { summary: 'radio' },
        defaultValue: { summary: 'default' },
      },
    },
    onClick: {
      action: 'clicked',
    },
    children: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MyButton>;

export const Default: Story = {
  args: {
    children: 'Botão Padrão',
    variant: 'default',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Botão Outline',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Botão Destrutivo',
  },
};
