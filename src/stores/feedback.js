import { writable } from "svelte/store";

export function createFeedbackStore(FeedbackState) {
  const { subscribe, set } = writable(FeedbackState.BASE);

  const show = (success) => {
    set(success ? FeedbackState.SUCCESS : FeedbackState.ERROR);
    setTimeout(() => set(FeedbackState.BASE), 2000);
  };

  return { subscribe, show };
}
