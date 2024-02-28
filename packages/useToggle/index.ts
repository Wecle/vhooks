import { ref, computed, Ref } from 'vue'

export interface Actions<T> {
  setLeft: () => void;
  setRight: () => void;
  set: (value: T) => void;
  toggle: () => void;
}

function useToggle<T = boolean>(): [Ref<T>, Actions<T>]

function useToggle<T>(defaultValue: T): [Ref<T>, Actions<T>]

function useToggle<T, U>(defaultValue: T, reverseValue: U): [Ref<T | U>, Actions<T | U>]

function useToggle<D, R>(defaultValue: D = false as unknown as D, reverseValue?: R) {
  const state = ref(defaultValue) as Ref<D | R>

  const actions = computed(() => {
    const reverseValueOrigin = (reverseValue ?? !state.value) as D | R

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