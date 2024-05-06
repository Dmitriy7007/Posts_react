export function pickFromSyntheticEvent<T extends HTMLElement>() {
	return <K extends keyof T>(
			key: K // key это checked или value, т.е. ключи в HTMLInputElement
		) =>
		<E extends (t: T[K]) => void>(
			fn: E //Е в данном случае функция которая принимает в качестве аргумента значение checked или value. В текущем случае props.onChange(аргумент)
		) =>
		(e: React.SyntheticEvent<T>) =>
			fn(e.currentTarget[key])
}

export const getValue = pickFromSyntheticEvent<HTMLInputElement>()('value')

export const getChecked = pickFromSyntheticEvent<HTMLInputElement>()('checked')
