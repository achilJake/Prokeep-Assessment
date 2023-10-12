import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useToast, ToastProvider } from './toastContext';

test('useToast hook sets state and severity correctly', async () => {
  function TestComponent() {
    const toast = useToast();
    return (
      <div>
        <button onClick={() => toast.showToast('Test Message', 'error')}>Show Error Toast</button>
        <button onClick={() => toast.showToast('Test Message', 'success')}>Show Success Toast</button>
      </div>
    );
  }

  const { getByText, queryByText } = render(
    <ToastProvider>
      <TestComponent />
    </ToastProvider>
  );

  const errorButton = getByText('Show Error Toast');
  fireEvent.click(errorButton);


  await waitFor(() => {
    const toastMessage = queryByText('Test Message');
    expect(toastMessage).toBeInTheDocument();
    expect(toastMessage?.parentNode).toHaveClass('MuiAlert-standardError');
  });

  const successButton = getByText('Show Success Toast');
  fireEvent.click(successButton);

  await waitFor(() => {
    const toastMessage = queryByText('Test Message');
    expect(toastMessage).toBeInTheDocument();
    expect(toastMessage?.parentNode).toHaveClass('MuiAlert-standardSuccess');
  });
});
