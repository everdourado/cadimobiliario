import dotenv from "dotenv";
import jwt from 'jsonwebtoken'

dotenv.config();

export const authMiddlewere = (req, res, next) => {
    try {

        //REQUISIÇÃO DO ITEM NO HEARDER AUTHORIZATION
        const { authorization } = req.headers;
        //SE NÃO HOUVER ALGO NO HEADER AUTHORIZATION (Bearer TOKEN)
        if (!authorization) {
            return res.send(401);
        }
        //PEGA ESSA STRING SEPARADA EM DOIS ITENS E TRANSFORMA NO ARRAY PARTS
        const parts = authorization.split(" ")
        //VERIFICA SE O ARRAY TEM DUAS POSIÇÕES, CASO CONTRÁRIO RETORNA 401
        if (parts.length !== 2) {
            return res.send(401);
        }
        //DESESTRUTURA O ARRAY PARA VERIFICAR O SCHEMA, QUE É O "Bearer", E O "TOKEN"
        const [schema, token] = parts;
        //VERIFICA SE O ESQUEMA É DIFERENTE DE "Bearer"
        if (schema !== "Bearer") {
            return res.send(401);
        }
        //VALIDAR O TOKEN GERADO ATRAVÉS DO JWT:

        //VERIFICA SE É UM TOKEN JWT, CHAVE CRIADA QUE SERVE PARA DECODIFICAR: SECRET_JWT, DECODIFICA O TOKEN
        jwt.verify(token, process.env.SECRET_JWT, (error, decoded) => {
           if (error) {
            return res.send(401)
           }

            console.log(decoded)
        })

        next()

    } catch (err) {
        res.status(500).send({ message: err.message })
    }

}