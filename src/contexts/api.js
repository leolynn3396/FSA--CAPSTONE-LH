export const BASE_URL = 'https://fakestoreapi.com/products';

export const register = async (firstname, lastname, email, password) => {
    try {
        const response = await fetch(`${BASE_URL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstname,
                lastname,
                email,
                password,
            }),
        });
        const result = await response.json();
        console.log(result);
        return (result);
    } catch (err) {
        console.error(err);
    }
};

export const login = async (email, password) => {
    try {
        const response = await fetch(`${BASE_URL}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        const result = await response.json();
        return result;
    } catch (err) {
        console.error(err);
    }
};

// export const me = () => {
//     try {

//     } catch (err) {
//         console.error(err)
//     }
// }


// export async function fetchSingleProduct(id) {
//     try {
//       const response = await fetch(`${BASE_URL}/products${id}`);
//       const result = await response.json();
//       return result;
//     } catch (error) {
//       console.error(error);
//     }
//   }