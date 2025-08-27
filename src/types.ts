export enum EViews {
    LOGIN = "LOGIN",
    SIGNUP = "SIGNUP",
    DASHBOARD = "DASHBOARD"
}

export interface IUserResponse {
    data : {
        users : IUser[]
    }
}

export interface IUser {
    firstName: string,
    lastName: string,
    email: string,
    password: string
}