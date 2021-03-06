import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
    "API-KEY": "3d3e74ba-244a-493d-82e2-37000cf7c4ef"
}
}) 

export const usersAPI = {
    getUser(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    follow (userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow (userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile (userId: number) {
        return instance.get(`profile/` + userId)

    }

}

export const authAPI = {
    me () {
        return instance.get(`auth/me`)
    }
}