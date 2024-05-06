export function pipe<U>(...fns: Function[]) {
	return (initialValue: any): U =>
		fns.reduce((previousValue, fn) => fn(previousValue), initialValue)
}
