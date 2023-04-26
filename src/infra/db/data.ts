interface IClientModel{
    id: number; 
    name: string;
    email: string;
    bank: string;
    balance: number;
}

export const clients: Array<IClientModel> = [
    {
        id: 1,
        name: "scooth",
        email: "scooth@hotmai.com",
        bank: "Scooth S.A",
        balance:1000
    }
]