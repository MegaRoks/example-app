export type ActionHandlerType<S, A> = Record<string, (state: S, action: A) => S>;
