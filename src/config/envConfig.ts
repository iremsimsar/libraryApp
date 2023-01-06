import dotenv from 'dotenv';
dotenv.config();

export default class EnvConfig {
    
    public static get port(): number {
        return Number(process.env.PORT) || 3000;
    }

}