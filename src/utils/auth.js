const axios = require('axios').default;

getUserInfoFromToken = async (req) => {
    const token = req.headers.authorization.split(' ')[1];
        
    const header = {
        headers: {
            authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.get("https://dev-qm8xf6mi.us.auth0.com/userinfo", header);
    
    return response.data;
}

module.exports = {
    getUserInfoFromToken
}