import { Request, Response, NextFunction } from 'express';

export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {

    // Buscar as informações do sistema
    const { user_id } = request.params;

    // Encontra a tenant do usuario


    if (user_id != null) {
        return next();
    }

    return response.status(401).json({
        error: 'Acess denied. Only Admins can do this request!'
    });
}