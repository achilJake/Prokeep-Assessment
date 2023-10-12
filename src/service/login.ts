const BASE_URL = "https://reqres.in/"
const LOGIN_URL = "api/login"

export const login = async (email: string, password: string) => {
    const userData = {
        email,
        password
    }
    try {
        const response: any = await fetch(`${BASE_URL}${LOGIN_URL}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData),
          });
        const data = await response.json();
        if (data.error) {
            throw data.error
        } else {
            return data
        }
    } catch (error) {
        throw error
    }
}