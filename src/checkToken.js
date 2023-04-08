
import axios from "axios"
export default async function checkToken(token){
    const result = await axios.post('http://localhost:3000/auth', {}, {
        headers: {
            'x-access-token': `${token}`
        }
    })
    return result.data.validToken
}