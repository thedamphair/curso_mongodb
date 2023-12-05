import { Db } from 'mongodb';
import { findMovies } from '../data/hands-on-1';

export async function execHandsOn(db: Db): Promise<any> {
    try {
        const moviesRes = await findMovies(db);
        return moviesRes;
    } catch (error) {
        throw new Error(`Sorry ${error}`);
    }
}