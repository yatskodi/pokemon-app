import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { routeTree } from '../routeTree.gen';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { Provider } from 'react-redux';
import { store } from './store';

const router = createRouter({
  routeTree,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </StrictMode>
  );
}
