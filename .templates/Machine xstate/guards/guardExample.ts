import { ConditionPredicate } from "xstate";
import { [FCName]Context, [FCName]Event } from "../types";

export const guardExample: ConditionPredicate<[FCName]Context, [FCName]Event> = (context: [FCName]Context) => context.a > context.b;