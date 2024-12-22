import type { AsyncError, AsyncResult, AsyncReturn } from "@/types";

export async function postSignup<R = AsyncResult, E = AsyncError>(
  data: unknown,
): Promise<AsyncReturn<R, E>> {
  try {
    const res = await fetch(`/player/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data,
      }),
    });

    if (res.status !== 200) throw new Error(await res.text());
    const json = await res.json();

    return [json as R, null];
  } catch (e) {
    return [null, e as E | null];
  }
}

export async function postValidate<R = AsyncResult, E = AsyncError>(
  data: unknown,
): Promise<AsyncReturn<R, E>> {
  try {
    const res = await fetch(`/player/login/validate`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data,
      }),
    });

    if (res.status !== 200) throw new Error(await res.text());
    const json = await res.json();

    return [json as R, null];
  } catch (e) {
    return [null, e as E | null];
  }
}
