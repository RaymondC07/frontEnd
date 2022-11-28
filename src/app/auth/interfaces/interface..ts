export interface AuthResponse {

    validado: boolean;
    login?: boolean;
    id?: string;
    nombre?: string;
    patio?: string;
    jToken?: string;
    mensaje?: string;
    errors?: Password;


}

interface Password {
    value: string;
    msg: string;
    param: string;
    location: string;
}

export interface Usuario {
    id: string;
    nombre: string;

}

export interface RegistroUsuario {
    creado?: string;
    mensaje?: string;
    nombre?: string;
    id?: string;
    jToken?: string;
}

export interface User{
    nombre?: string;
    patio?: string;
    email?: string;
    password?: string;
}

export interface Car {
    id_zonal?: string;
    placa?: string;
    modelo?: number;
    tipo?: string;
}