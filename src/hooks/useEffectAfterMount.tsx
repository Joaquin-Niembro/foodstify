import {useEffect, useRef} from 'react';

export function useEffectAfterMount(effect: () => void, deps: any) {
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    if (effect) effect();
  }, deps);
}
