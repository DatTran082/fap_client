import constancConfig from "constanconfig/constanconfig"

const userAPI = {
    getProfile: async function () {
        const uri = "Students"
        const res = await fetch(constancConfig.BaseUrl + uri);
        return res.json();
    },
    getTimeTable: function () {
        // fetchClient(constancConfig.BaseUrl + "",{})
    } 
}

export default userAPI