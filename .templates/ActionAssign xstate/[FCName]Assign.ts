import { ActionTypes, AssignAction } from "xstate";

export const [FCName]Assignment = (context: Context, event: Event): Partial<Context> => {
    return {
        elapsed: 
    };
}

export const [FCName]Assign : AssignAction<Context, Event> = {
    type: ActionTypes.Assign,
    assignment: [FCName]Assignment
}