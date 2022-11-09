// YourComponent.stories.js|jsx

import Teste from "./Teste";

//👇 This default export determines where your story goes in the story list
export default {

  title: 'Meu Componente',
  component: Teste,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Teste {...args} />;

export const FirstStory = {
  args: {
    label: '',
    value: 10,
  },
};