export type Maybe<T> = T | null;

export type AsyncResult = unknown;
export type AsyncError = unknown;
export type AsyncReturn<R, E> = [Maybe<R>, Maybe<E>];
export type AsyncFn = Promise<AsyncResult>;
