import { EmailValidator, MinLengthValidator } from "@angular/forms"

export interface BlogPost{
    id:number,
    photo:string,
    title:string,
    subtitle:string,
    text:string,
    date:Date
}

export interface MyBlogPost{
    id:number,
    photo:File,
    mainText: String,
    mainTitle: string,
    mainSubtitle: string,
    date:Date

}

export interface LoginData{
    email:string,
    password:string
}

export interface RegisterData{
    name: string,
    email:string,
    password: string
}

export interface NewPost{
    author: string,
    mainTitle: string,
    mainSubtitle: string,
    photo: File,
    mainText: String,
}
export interface ParagraphsList{
    paragraph: {
        title: string,
        text: string
    },
}

export interface TestPost{
    someText: String,
    image: File
}