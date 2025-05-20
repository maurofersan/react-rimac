export function combineReducers<S, A>(reducers: {
  [K in keyof S]: (state: S[K], action: A) => S[K];
}): (state: S, action: A) => S {
  return (state: S, action: A) => {
    const newState = {} as S;

    for (const key in reducers) {
      newState[key] = reducers[key](state[key], action);
    }

    return newState;
  };
}
