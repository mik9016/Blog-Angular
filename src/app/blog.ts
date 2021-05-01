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
    photo:string,
    paragraphs: Array<ParagraphsList>,
    mainTitle: string,
    mainSubtitle: string,
    date:Date

}

export interface LoginData{
    login:string,
    password:string
}

export interface RegisterData{
    name: string,
    email:string,
    password: string
}

export interface NewPost{
    mainTitle: string,
    mainSubtitle: string,
    photo: string,
    paragraphs: Array<ParagraphsList>,
}
export interface ParagraphsList{
    paragraph: {
        title: string,
        text: string
    },
}