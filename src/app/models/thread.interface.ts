export interface IThreads {
    pic: string;
    title: string;
    description: string;
    ans_count: number;
    vote_count: number;
    view_count: number;
    category:string;
    tags: ITags[];
    created_at: string;
    created_by:string;
    threadID:number;
}

export interface ITags {
    title: string
}