import { Image } from "src/app/shared/models/shared";

export interface Header {
    img: Image;
    name: string;
    created: string;
}

export interface Hero {
    img: Image;
    description: string;
}

export interface Main {
    title: string;
    img: Image;
    text: string;
}

export interface Gallery {
    title: string;
    imageGallery: Image[]
}
