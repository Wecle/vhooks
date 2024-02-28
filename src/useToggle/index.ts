import { ref, computed } from 'vue'

export interface Actions<T> {
  setLeft: () => void;
  setRight: () => void;
  set: (value: T) => void;
  toggle: () => void;
}

function useToggle<D, R>(defaultValue: D = false as unknown as D, reverseValue?: R) {
  const state = ref<D | R>(defaultValue)

  const actions = computed(() => {
    const reverseValueOrigin = (reverseValue === undefined ? !state.value : reverseValue) as D | R

    const toggle = () => state.value = (state.value === defaultValue ? reverseValueOrigin : defaultValue)
    const set = (value: D | R) => state.value = value
    const setLeft = () => state.value = defaultValue
    const setRight = () => state.value = reverseValueOrigin

    return {
      toggle,
      set,
      setLeft,
      setRight,
    }
  })

  return [state, actions.value]
}

export default useToggle