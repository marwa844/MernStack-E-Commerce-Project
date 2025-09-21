interface RegisterParams {
    fullName: string;
    email: string;
    phone: string;
    password: string;
}
export declare const register: ({ fullName, email, phone, password, }: RegisterParams) => Promise<{
    data: string;
    statusCode: number;
}>;
interface LoginParams {
    email: string;
    password: string;
}
export declare const login: ({ email, password }: LoginParams) => Promise<{
    data: string;
    statusCode: number;
}>;
interface ResetPassword {
    email: string;
    newpassword: string;
}
export declare const restPassword: ({ email, newpassword }: ResetPassword) => Promise<{
    data: string;
    statusCode: number;
}>;
export {};
//# sourceMappingURL=userservices.d.ts.map