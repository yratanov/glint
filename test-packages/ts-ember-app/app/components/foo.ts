import Component from '@glint/environment-ember-loose/glimmer-component';

export default class Foo extends Component {
  name = 'FOO';

  obj = { a: 'A', b: 'B', c: 1, 𝚪: '' };

  declare needsCanvas: (el: HTMLCanvasElement) => void;
  declare needsAnyElement: (el: Element) => void;
  declare needsNumber: (value: number) => void;
}

import { BoundModifier, DirectInvokable, EmptyObject } from '@glint/template/-private/integration';
import { EmittableValue } from '@glint/template/-private/dsl';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry {
    Foo: typeof Foo;

    'did-insert': DirectInvokable<{
      (args: EmptyObject, callback: () => void): BoundModifier<Element> & EmittableValue;
      <T extends Element>(args: EmptyObject, callback: (el: T) => void): BoundModifier<T>;
    }>;
  }
}
