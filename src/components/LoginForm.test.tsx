import { render, fireEvent, waitFor } from '@testing-library/react';
import { login } from '../service/login';
import { useToast } from '../hook/toastContext';
import LoginForm from './LoginForm';

jest.mock('../service/login', () => ({
  login: jest.fn()
}));

const mockLogin = login as jest.MockedFunction<typeof login>;
jest.mock('../hook/toastContext', () => ({
  useToast: jest.fn()
}));
const mockUseToast = useToast as jest.MockedFunction<typeof useToast>;


describe('LoginForm', () => {
  
  beforeEach(() => {
    mockUseToast.mockReturnValue({
      showToast: jest.fn()
    });
  });

  it('should validate email address and show error', () => {
    const { getByLabelText, getByText } = render(<LoginForm />);
    
    const emailInput = getByLabelText(/email/i);
    
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    
    expect(getByText('Invalid email address')).toBeInTheDocument();
  });

  it('should handle login success', async () => {
    const mockSuccessData = { token: 'test-token' };
    mockLogin.mockResolvedValue(mockSuccessData);
    const showToast = jest.fn();

    mockUseToast.mockReturnValue({
      showToast
    });

    const { getByLabelText, getByRole } = render(<LoginForm />);
    const emailInput = getByLabelText(/email/i);
    const passwordInput = getByLabelText(/password/i);
    const loginButton = getByRole('button', { name: /login/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(showToast).toHaveBeenCalledWith('Congratulations! Login successful.', 'success');
      expect(emailInput).toHaveValue('');
      expect(passwordInput).toHaveValue('');
    });
  });

  it('should handle login failure', async () => {
    const mockError = 'Login failed';
    mockLogin.mockRejectedValue(mockError);
    const showToast = jest.fn();

    mockUseToast.mockReturnValue({
      showToast
    });

    const { getByLabelText, getByRole } = render(<LoginForm />);
    const emailInput = getByLabelText(/email/i);
    const passwordInput = getByLabelText(/password/i);
    const loginButton = getByRole('button', { name: /login/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(showToast).toHaveBeenCalledWith('Login failed', 'error');
    });
  });
});
