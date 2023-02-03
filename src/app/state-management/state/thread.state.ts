// import { getQuestions } from "../actions/questions.action";
// import { IQuestionResponse } from "../models/response.interface";
// import { DiscussionsService } from "../services/discussions.service";
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from "rxjs";
import { Injectable } from "@angular/core";
import { IThreads } from 'src/app/models/thread.interface';
import { DiscussionsService } from 'src/app/services/thread.service';
import { getThreads } from '../actions/thread.actions';
export class DiscussionStateModel {
    threads : IThreads[] = [];
}

@State<DiscussionStateModel>({
    name: 'Questions',
    defaults: {
        threads: [],
    }
})
@Injectable()
export class DiscussionState {
    constructor(public discussionService: DiscussionsService) {

    }

    @Selector()
    static getThreadList(state: DiscussionStateModel) {
        console.log("STATE ", state)
        return state.threads;
    }

    @Action(getThreads)
    public getQuestions(ctx : StateContext<DiscussionStateModel>) {
        // return this.discussionService.fetchThreads().pipe(tap((result: IThreads[]) => {
        //     console.log("RESULT ", result)
        //     const state = ctx.getState();
        //     ctx.setState({
        //         threads: result
        //     })
        // }))
    }
}