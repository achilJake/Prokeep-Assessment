import { login } from "./login";

describe('login function', () => {
    let mockFetch: jest.Mock;

    beforeEach(() => {
        mockFetch = jest.fn();
        global.fetch = mockFetch as any;
    });

    it('should return data when login is successful', async () => {
        const mockSuccessResponse = { token: '123456' };
        mockFetch.mockResolvedValueOnce({
            json: jest.fn().mockResolvedValueOnce(mockSuccessResponse),
        } as any);

        const result = await login('test@email.com', 'password123');

        expect(result).toEqual(mockSuccessResponse);
        expect(mockFetch).toHaveBeenCalledWith('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: 'test@email.com', password: 'password123' })
        });
    });

    it('should throw an error when login fails', async () => {
        const mockErrorResponse = { error: 'Invalid login credentials' };
        
        mockFetch.mockResolvedValueOnce({
            error: 'Mock fetch failure',
            json: jest.fn().mockResolvedValueOnce(mockErrorResponse),
            status: 400,
        } as any);
    
        await expect(login('wrong@email.com', 'wrongpassword')).rejects.toEqual(mockErrorResponse.error);
    });
});
