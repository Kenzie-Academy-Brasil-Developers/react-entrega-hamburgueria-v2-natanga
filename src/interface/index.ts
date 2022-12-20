import React from "react";
import { UseFormRegister } from "react-hook-form";

export interface IPerson {
    email: string;
    password: string;
}

export interface Iregister extends IPerson {
    name: string;
    passwordConfirm:string;
}

export interface bodyLogin {
    email: string;
    password: string;
}
export interface Itoken {
    accessToken: string;
}
export interface IIdUser {
    email: string;
    name: string;
    id: number;
}

export interface IIputProps {
    id: string;
    label: string;
    type: string;
    placeholder: string;
    register: UseFormRegister<any>;
}
export interface IProvider {
    children: React.ReactNode
}

export interface IAuthContextValue {
    user: boolean;
    login: (bodyLogin: bodyLogin) => void;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}
export interface Iiten {
    id: number,
    name: string,
    category: string,
    price: number,
    img?: string,
  }