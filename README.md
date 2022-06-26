# Folder Templates #

If you're bored of typing the same boilerplate stuff every time !!
this is a Visual studio code extension for using folder templates.
___

## Use ##

+ Right click in the file explorer and select **Create new Folder with Template**.
+ Run **Create new Folder with Template** using the command palette **(Ctrl+Shift+P)**.

___

## Settings ##

File > preference > settings

In User Settings go to Extensions > Folder Templates

### disableTemplate ###

You can enable/disable a template with the **disableTemplate** property in the extension setting.
If **disableTemplate** is *true*, then the corresponding template will no longer appear in the list of available templates.

### nammingConvention ###

you can add a convention namming with the **nammingConvention** property.
By default **nammingConvention** is equal to *'noNC'* (no namming convention).
You can modify *'noNC'* with: *'camelCase'*, *'pascalCase'* or *'snakeCase'*".
___

## Templates Availables ##

+ [Context](#context)

+ [ComponentStory](#ds-component)

+ [Functional Component](#functionnal-component)

+ [Component](#rec-component)

+ [Function](#rec-function)

+ [Page](#rec-pages)

+ [Page With ReactQuery](#rec-pages-with-reactquery)

+ [useMutation Hooks](#usemutation-hooks)

+ [useQuery Hooks](#usequery-hooks)

+ [Machine xstate](#machine-xstate)

+ [Action xstate](#action-xstate)

+ [Guard xstate](#guard-xstate)
___

## Context ##

### Structure ###

```
[Name]
|--[Name]Provider.tsx
|--use[Name].ts
|--index.ts
```

### Details ###

+ [Name]Provider.tsx

```typescript
import * as React from "react";

export interface [FCName]ContextProps { }

export const [FCName] = React.createContext<[FCName]ContextProps>({});

const [FCName]Provider: React.FC<[FCName]ContextProps> = ({ children }) => {
  return <[FCName].Provider value={{}}>{children}</[FCName].Provider>;
};

export default [FCName]Provider;

```

+ use[Name].ts

```typescript
import * as React from "react";
import { [FCName] } from "./[FCName]Provider";

const use[FCName]Context = () => {
  const context = React.useContext([FCName]);

  // Uncomment if your context doesn't have reasonable defaults
  //   if (context === undefined) {
  //     throw new Error(
  //       "use[FCName]Context must be used within a [FCName]Provider"
  //     );
  //   }

  return context;
};

export default use[FCName]Context;
```

+ index.ts

```typescript
export { default } from "./[FCName]Provider";
export { default as use[FCName] } from "./use[FCName]";
export * from "./[FCName]Provider";
```

___

## DS Component ##

### Structure ###

```
[Name]
|--[Name].spec.tsx
|--[Name].stories.tsx
|--[Name].tsx
|--index.ts
```

### Details ###

+ [Name].spec.tsx

```typescript
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import [FCName], { [FCName]Props } from './[FCName]';

describe('<[FCName] />', () => {
    it('should render', () => {
        const { container }  = render(<[FCName] />);
        expect(container).toBeInTheDocument();
    });
});
```

+ [Name].stories.tsx

```typescript
import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import [FCName], { [FCName]Props } from './[FCName]';

export default {
    title: "/[FCName]",
    component: [FCName],
} as Meta;

const Template: Story<[FCName]Props> = (args) => {
    return <[FCName] {...args} />;
};

export const Default = Template.bind({});
```

+ [Name].tsx

```typescript
import * as React from 'react';

export interface [FCName]Props {}

const [FCName]: React.FC<[FCName]Props> = ({}) => {
    return <div>[FCName]</div>
};
export default [FCName];
```

+ index.ts

```typescript
export { default } from "./[FCName]";
export * from './[FCName]';
```

___

## Functionnal Component ##

### Structure ###

```
[Name]
|--[Name].spec.tsx
|--[Name].tsx
|--index.ts
```

### Details ###

+ [Name].spec.tsx

```typescript
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { [FCName] } from './[FCName]';

describe('<[FCName] />', () => {
    it('should render [FCName]', () => {
        const { container } = render(<[FCName] />);
        expect(container).toBeInTheDocument();
    });
});
```

+ [Name].tsx

```typescript
import * as React from 'react';
import { makeStyles } from '@talentsoft/design-system';

const useStyles = makeStyles((theme) => ({
    root: {}
}));

export interface [FCName]Props {}

export const [FCName]: React.FC<[FCName]Props> = ({}) => {
    const classes = useStyles();
    return <div className={classes.root}>[FCName]</div>;
};

export default [FCName];
```

+ index.ts

```typescript
export { default } from "./[FCName]";
export * from "./[FCName]";
```

___

## REC Component ##

### Structure ###

```
[Name]
|--__spec__
|   |--[Name].spec.tsx
|--[Name].tsx
```

### Details ###

+ [Name].spec.tsx

```typescript
import * as React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { [FCName] } from '../[FCName]';

describe('[FCName]', () => {
    afterEach(() => {
        cleanup();
    });
    it('should render [FCName]', () => {
        // Given

        // When
        const { container } = render(<[FCName] />);

        //Then
        expect(container).toBeInTheDocument();
    });
});
```

+ [Name].tsx

```typescript
import * as React from 'react';

export interface [FCName]Props {

}

export const [FCName]: React.FC<[FCName]Props> = () => {
    return (
        <div>

        </div>
    );
};

export default [FCName];

[FCName].displayName = '[FCName]';
```

## REC Function ##

### Structure ###

```
[Name]
|--[Name].spec.ts
|--[Name].ts
```

### Details ###

+ [Name].spec.ts

```typescript
import { [FCName] } from "./[FCName]";

describe('[FCName]', () => {
    it('should ', () => {
        
    });
});
```

+ [Name].ts

```typescript
export const [FCName] = () => {

};

export default [FCName];
```

___

## REC Pages ##

### Structure ###

```
[Name]
|--__mocks__
|--__spec__
|  |--[Name]Context.spec.tsx
|  |--[Name]Page.spec.tsx
|--services
|  |--__spec__
|  |  |--index.spec.ts
|  |--index.ts
|--store
|  |--__spec__
|  |  |--action.spec.ts
|  |  |--reducer.spec.ts
|  |--action-types.ts
|  |--action.ts
|  |--index.ts
|  |--initialState.ts
|  |--reducer.ts
|--styles
|  |--index.ts
|--types
|  |--index.ts
|--utils
|  |--__spec__
|  |  |--index.spec.ts
|  |--index.ts
|--[Name]Context.tsx
|--[Name]Page.tsx
|--index.ts
```

### Details ###

+ spec/[Name]Context.spec.tsx

```typescript
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { initialState } from '../store/initialState';
import { use[FCName]Dispatch, use[FCName]State, [FCName]Provider } from '../[FCName]Context';
import { [FCName]StateType } from '../types';

jest.mock('../store');
jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: jest.fn(),
}));

describe('[FCName]Context', () => {
    it('should return context when use[FCName]State is called', () => {
        // Given
        jest.spyOn(React, 'useContext').mockReturnValue(initialState);

        // When
        const context = use[FCName]State();

        // Then
        expect(context).toEqual({});

    });
});
```

+ spec/[Name]Page.spec.tsx

```typescript
 
import * as React from 'react';
import { render } from 'react-dom';
import { renderToDOM, [FCName]Page } from '../[FCName]Page';

jest.mock('react-dom', () => ({
    render: jest.fn(),
}));
jest.mock('../[FCName]Context.tsx');


describe('[FCName]Page', () => {
    it('should set the initialState', () => {
        
    });
});
```

+ services/spec/index.spec.ts

```typescript
import * as Fetch from '../../../../utils';

jest.mock('../../../../utils', () => ({
    Get: jest.fn(() => Promise.resolve({
        json: () => { }
    })),
    Post: jest.fn((url, data) => Promise.resolve({
        json: () => { }
    })),
}));

describe('[FCName]Service', () => {
    it('should ', () => {
        // Given

        // When

        // Then

    });
});
```

+ store/spec/reducer.spec.ts

```typescript
import * as React from 'react';
import { initialState } from '../initialState';
import { reducer } from '../reducer';

describe('[FCName] reducer', () => {
    it('should return initialState', () => {
        expect(initialState).toEqual({});
    });
});
```

+ store/ action-types.ts

```typescript
export const SAMPLE = '[FCName]/SAMPLE'
```

+ store/action.ts

```typescript
import * as ActionTypes from './action-types';
import { DispatchType } from '../types';

export const GetSample = (dispatch: DispatchType) => dispatch({
    type: ActionTypes.SAMPLE
});
```

+ store/index.ts

```typescript
export { reducer } from './reducer';
export { initialState } from './initialState';
```

+ store/initialState.ts

```typescript
import { [FCName]StateType } from '../types';

export const initialState: [FCName]StateType = {}
```

+ store/reducer.ts

```typescript
import * as ActionTypes from './action-types';
import { [FCName]StateType } from '../types';

export const reducer = (state: [FCName]StateType, action: ActionType ): [FCName]StateType => {
    switch (action.type) {
        default:
            return state;
    }
};
```

+ styles/index.ts

```typescript
import { makeStyles } from '@talentsoft/design-system/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        
    }
}));
```

+ types/index.ts

```typescript
export interface I[FCName]Model extends IBackOfficePageModel {
    
}

type Sample = {
    type: '[FCName]/SAMPLE'
};

export type ActionType = (
    Sample
);

export type DispatchType = (action: ActionType) => void;

export interface [FCName]StateType {

};

export type [FCName]ProviderType = { children: React.ReactNode, initialState: [FCName]StateType };
```

+ utils/spec/index.spec.ts

```typescript
describe('Name of the group', () => {
    it('should ', () => {
        // Given

        // When

        // Then
    });
});
```

+ [Name]Context.tsx

```typescript
import * as React from 'react';
import { reducer } from './store/reducer';
import { DispatchType, [FCName]ProviderType, [FCName]StateType } from './types';

const [FCName]Context = React.createContext<[FCName]StateType | undefined>(undefined);
const [FCName]DispatchContext = React.createContext<DispatchType | undefined>(undefined);

const [FCName]Provider = ({ initialState, children}: [FCName]ProviderType) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return (
        <[FCName]Context.Provider value={state}>
            <[FCName]DispatchContext.Provider value={dispatch}>
                {children}
            </[FCName]DispatchContext.Provider>
        </[FCName]Context.Provider>
    );
};

const use[FCName]State = () => {
    const context = React.useContext([FCName]Context);

    if (context === undefined) {
        throw new Error('use[FCName]State must be used within a [FCName]Provider');
    }

    return context;
};

const use[FCName]Dispatch = () => {
    const context = React.useContext([FCName]DispatchContext);

    if (context === undefined) {
        throw new Error('use[FCName]Dispatch must be used within a [FCName]Provider');
    }

    return context;
};

export { [FCName]Provider, use[FCName]State, use[FCName]Dispatch };
```

+ [Name]Page.tsx

```typescript
import * as React from 'react';
import { render } from 'react-dom';
import PageBase from '../page-base';
import { RecruitingThemeProvider } from '../../assets/Theme/recruiting-theme';
import { [FCName]Provider } from './VacancyCreationContext';
import { I[FCName]Model, [FCName]StateType } from './types';
import { initialState } from './store';

export class [FCName]Page extends PageBase {
    initialState: [FCName]StateType;

    constructor(model: I[FCName]Model) {
        super('[FCName]');
        this.initialState = {
            ...initialState,
            breadcrumbs: model.NavigationContext.Breadcrumbs.map(b => ({
                label: b.Label,
                link: b.Link
            })),
            currentCulture: model.CurrentCulture,
            pageTitle: model.PageTitle,
            themeColor: model.ThemeColor,
        };
    };
    
    run(htmlElement: HTMLElement) {
        const Component = () => (
                <RecruitingThemeProvider
                    productionPrefix="rec[FCName]"
                    currentCulture={this.initialState.currentCulture}
                >
                    <[FCName]Provider initialState={this.initialState}>
                       // YOUR COMPONENT 
                    </[FCName]Provider>
                </RecruitingThemeProvider>
        );
        
        renderToDOM(Component, htmlElement);
    }
}

export const renderToDOM = (Component: React.FunctionComponent, root: HTMLElement | null): void => {
    if (root !== null) {
        render(<Component />, root);
    }
};
```

+ index.ts

```typescript
export { [FCName]Page } from './[FCName]Page';
```

___

## REC Pages With ReactQuery ##

### Structure ###

```
[Name]
|--__mocks__
|--__spec__
|  |--[Name]Context.spec.tsx
|  |--[Name]Page.spec.tsx
|--hooks
|  |--hooks-types.ts
|  |--index.ts
|--services
|  |--__spec__
|  |  |--index.spec.ts
|  |--index.ts
|--store
|  |--__spec__
|  |  |--action.spec.ts
|  |  |--reducer.spec.ts
|  |--action-types.ts
|  |--action.ts
|  |--index.ts
|  |--initialState.ts
|  |--reducer.ts
|--styles
|  |--index.ts
|--types
|  |--index.ts
|--utils
|  |--__spec__
|  |  |--index.spec.ts
|  |--index.ts
|--[Name]Context.tsx
|--[Name]Page.tsx
|--index.ts
```

### Details ###

+ spec/[Name]Context.spec.tsx

```typescript
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { initialState } from '../store/initialState';
import { use[FCName]Dispatch, use[FCName]State, [FCName]Provider } from '../[FCName]Context';
import { [FCName]StateType } from '../types';

jest.mock('../store');
jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: jest.fn(),
}));

describe('[FCName]Context', () => {
    it('should return context when use[FCName]State is called', () => {
        // Given
        jest.spyOn(React, 'useContext').mockReturnValue(initialState);

        // When
        const context = use[FCName]State();

        // Then
        expect(context).toEqual({});

    });
});
```

+ spec/[Name]Page.spec.tsx

```typescript
import * as React from 'react';
import { render } from 'react-dom';
import { renderToDOM, [FCName]Page } from '../[FCName]Page';

jest.mock('react-dom', () => ({
    render: jest.fn(),
}));
jest.mock('../[FCName]Context.tsx');


describe('[FCName]Page', () => {
    it('should set the initialState', () => {
        
    });
});
```

+ spec/[Name]Page.spec.tsx

```typescript
import * as React from 'react';
import { render } from 'react-dom';
import { renderToDOM, [FCName]Page } from '../[FCName]Page';

jest.mock('react-dom', () => ({
    render: jest.fn(),
}));
jest.mock('../[FCName]Context.tsx');


describe('[FCName]Page', () => {
    it('should set the initialState', () => {
        
    });
});
```

+ services/spec/index.spec.ts

```typescript
import * as Fetch from '../../../../utils';

jest.mock('../../../../utils', () => ({
    Get: jest.fn(() => Promise.resolve({
        json: () => { }
    })),
    Post: jest.fn((url, data) => Promise.resolve({
        json: () => { }
    })),
}));

describe('[FCName]Service', () => {
    it('should ', () => {
        // Given

        // When

        // Then

    });
});
```

+ store/spec/reducer.spec.ts

```typescript
import * as React from 'react';
import { initialState } from '../initialState';
import { reducer } from '../reducer';

describe('[FCName] reducer', () => {
    it('should return initialState', () => {
        expect(initialState).toEqual({});
    });
});
```

+ store/ action-types.ts

```typescript
export const SAMPLE = '[FCName]/SAMPLE'
```

+ store/action.ts

```typescript
import * as ActionTypes from './action-types';
import { DispatchType } from '../types';

export const GetSample = (dispatch: DispatchType) => dispatch({
    type: ActionTypes.SAMPLE
});
```

+ store/index.ts

```typescript
export { reducer } from './reducer';
export { initialState } from './initialState';
```

+ store/initialState.ts

```typescript
import { [FCName]StateType } from '../types';

export const initialState: [FCName]StateType = {}
```

+ store/reducer.ts

```typescript
import * as ActionTypes from './action-types';
import { [FCName]StateType } from '../types';

export const reducer = (state: [FCName]StateType, action: ActionType ): [FCName]StateType => {
    switch (action.type) {
        default:
            return state;
    }
};
```

+ styles/index.ts

```typescript
import { makeStyles } from '@talentsoft/design-system/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        
    }
}));
```

+ types/index.ts

```typescript
export interface I[FCName]Model extends IBackOfficePageModel {
    
}

type Sample = {
    type: '[FCName]/SAMPLE'
};

export type ActionType = (
    Sample
);

export type DispatchType = (action: ActionType) => void;

export interface [FCName]StateType {

};

export type [FCName]ProviderType = { children: React.ReactNode, initialState: [FCName]StateType };
```

+ utils/spec/index.spec.ts

```typescript
describe('Name of the group', () => {
    it('should ', () => {
        // Given

        // When

        // Then
    });
});
```

+ --[Name]Context.tsx

```typescript
import * as React from 'react';
import { reducer } from './store/reducer';
import { DispatchType, [FCName]ProviderType, [FCName]StateType } from './types';

const [FCName]Context = React.createContext<[FCName]StateType | undefined>(undefined);
const [FCName]DispatchContext = React.createContext<DispatchType | undefined>(undefined);

const [FCName]Provider = ({ initialState, children}: [FCName]ProviderType) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return (
        <[FCName]Context.Provider value={state}>
            <[FCName]DispatchContext.Provider value={dispatch}>
                {children}
            </[FCName]DispatchContext.Provider>
        </[FCName]Context.Provider>
    );
};

const use[FCName]State = () => {
    const context = React.useContext([FCName]Context);

    if (context === undefined) {
        throw new Error('use[FCName]State must be used within a [FCName]Provider');
    }

    return context;
};

const use[FCName]Dispatch = () => {
    const context = React.useContext([FCName]DispatchContext);

    if (context === undefined) {
        throw new Error('use[FCName]Dispatch must be used within a [FCName]Provider');
    }

    return context;
};

export { [FCName]Provider, use[FCName]State, use[FCName]Dispatch };
```

+ --[Name]Page.tsx

```typescript
import * as React from 'react';
import { render } from 'react-dom';
import PageBase from '../page-base';
import { RecruitingThemeProvider } from '../../assets/Theme/recruiting-theme';
import { [FCName]Provider } from './VacancyCreationContext';
import { I[FCName]Model, [FCName]StateType } from './types';
import { initialState } from './store';

export class [FCName]Page extends PageBase {
    initialState: [FCName]StateType;

    constructor(model: I[FCName]Model) {
        super('[FCName]');
        this.initialState = {
            ...initialState,
            breadcrumbs: model.NavigationContext.Breadcrumbs.map(b => ({
                label: b.Label,
                link: b.Link
            })),
            currentCulture: model.CurrentCulture,
            pageTitle: model.PageTitle,
            themeColor: model.ThemeColor,
        };
    };
    
    run(htmlElement: HTMLElement) {
        const Component = () => (
                <RecruitingThemeProvider
                    productionPrefix="rec[FCName]"
                    currentCulture={this.initialState.currentCulture}
                >
                    <[FCName]Provider initialState={this.initialState}>
                       // YOUR COMPONENT 
                    </[FCName]Provider>
                </RecruitingThemeProvider>
        );
        
        renderToDOM(Component, htmlElement);
    }
}

export const renderToDOM = (Component: React.FunctionComponent, root: HTMLElement | null): void => {
    if (root !== null) {
        render(<Component />, root);
    }
};


```

+ index.ts

```typescript
export { [FCName]Page } from './[FCName]Page';
```

___

## useMutation Hooks ##

### Structure ###

```
[Name]
|--[Name].spec.tsx
|--[Name].tsx
|--index.tsx
```

### Details ###

+ --[Name].spec.tsx

```typescript
import * as React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { MutationCache, QueryCache, QueryClient, QueryClientProvider  } from 'react-query';

const renderWithClient = (client: QueryClient, ui: React.ReactElement) => {
    const { rerender, ...result } = render(
        <QueryClientProvider client={client}>{ui}</QueryClientProvider>
    );
    return {
        ...result,
        rerender: (rerenderUi: React.ReactElement) =>
            rerender(
                <QueryClientProvider client={client}>
                    {rerenderUi}
                </QueryClientProvider>
            ),
    };
};

describe('[FCName]', () => {
    const queryCache = new QueryCache();
    const mutationCache = new MutationCache();
    const queryClient = new QueryClient({ queryCache, mutationCache });

    it('should ', async () => {
        function Page() {
            
            const { mutate, data = { label: ''} } = [FCName]();
      
            return (
                <div>
                    <h1 data-testid="title">{data['label']}</h1>
                    <button onClick={() => mutate()}>mutate</button>
                </div>
            );
        }
        const { getByTestId, getByText } = renderWithClient(queryClient, <Page />);

        expect(getByTestId('title').textContent).toBe('');
        fireEvent.click(getByText('mutate'));

        await waitFor(() => getByTestId('title'));

        expect(getByTestId('title').textContent).toBe();
    });
});
```

+ --[Name].tsx

```typescript
import { useMutation } from 'react-query';

const [FCName] = () => useMutation(() => {
  // return fetch("/api/data") as json
  return "Hello";
}, {
    onMutate: variables => {
        // A mutation is about to happen!
    
        // Optionally return a context containing data to use when for example rolling back
      },
      onError: (error, variables, context) => {
        // An error happened!
        console.log(`rolling back optimistic update with id ${context}`)
      },
      onSuccess: (data, variables, context) => {
        // Boom baby!
      },
      onSettled: (data, error, variables, context) => {
        // Error or success... doesn't matter!
      },
});

export default [FCName];
```

+ --index.tsx

```typescript
 export { default } from './[FCName]';
```

___

## useQuery Hooks ##

### Structure ###

```
[Name]
|--[Name].spec.tsx
|--[Name].tsx
|--index.tsx
```

### Details ###

+ --[Name].spec.tsx

```typescript
import { QueryClient, QueryClientProvider } from 'react-query';
import { renderHook } from '@testing-library/react-hooks';
import { [FCName] } from './[FCName]';

const queryClient = new QueryClient();
const wrapper = ({ children }) => (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
);

describe('[FCName]', () => {
    it('should ', async () => {        
        const { result, waitFor } = renderHook(() => [FCName](), { wrapper });

        await waitFor(() => result.current.isSuccess);
        
        expect(result.current.data).toEqual("Hello");
    });
});
```

+ --[Name].tsx

```typescript
import { useQuery } from 'react-query';

const [FCName] = () => {
    return useQuery("queryHooks", () => {
        // return fetch("/api/data") as json
        return "Hello";
    });
};

export default [FCName];
```

+ --index.tsx

```typescript
export { default } from './[FCName]';
```
___

## Machine XState ##

### Structure ###

```
[Name]
|--[Name].spec.tsx
|--[Name].tsx
|--index.tsx
```

### Details ###

+ --[Name].spec.tsx

```typescript
import { QueryClient, QueryClientProvider } from 'react-query';
import { renderHook } from '@testing-library/react-hooks';
import { [FCName] } from './[FCName]';

const queryClient = new QueryClient();
const wrapper = ({ children }) => (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
);

describe('[FCName]', () => {
    it('should ', async () => {        
        const { result, waitFor } = renderHook(() => [FCName](), { wrapper });

        await waitFor(() => result.current.isSuccess);
        
        expect(result.current.data).toEqual("Hello");
    });
});
```

+ --[Name].tsx

```typescript
import { useQuery } from 'react-query';

const [FCName] = () => {
    return useQuery("queryHooks", () => {
        // return fetch("/api/data") as json
        return "Hello";
    });
};

export default [FCName];
```

+ --index.tsx

```typescript
export { default } from './[FCName]';
```