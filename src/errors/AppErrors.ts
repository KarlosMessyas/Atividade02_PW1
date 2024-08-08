export class AppError extends Error {
    public readonly statusCode: number;

    constructor(message: string, statusCode = 400) {
        super(message);  // Chama o construtor da classe Error
        this.statusCode = statusCode;
        this.name = "AppError"; // Define o nome do erro como "AppError"
    }
}
