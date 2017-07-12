// Type definitions for preact 8.2
// Project: https://github.com/developit/preact
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class Component {
    constructor(props: any, context: any);

    forceUpdate(callback: any): void;

    render(): void;

    setState(state: any, callback: any): void;

}

export const options: {
};

export function cloneElement(vnode: any, props: any, ...args: any[]): any;

export function createElement(nodeName: any, attributes: any, ...args: any[]): any;

export function h(nodeName: any, attributes: any, ...args: any[]): any;

export function render(vnode: any, parent: any, merge: any): any;

export function rerender(): void;

export namespace Component {
    namespace prototype {
        function forceUpdate(callback: any): void;

        function render(): void;

        function setState(state: any, callback: any): void;

        namespace forceUpdate {
            const prototype: {
            };

        }

        namespace render {
            const prototype: {
            };

        }

        namespace setState {
            const prototype: {
            };

        }

    }

}

export namespace cloneElement {
    const prototype: {
    };

}

export namespace createElement {
    const prototype: {
    };

}

export namespace h {
    const prototype: {
    };

}

export namespace render {
    const prototype: {
    };

}

export namespace rerender {
    const prototype: {
    };

}

