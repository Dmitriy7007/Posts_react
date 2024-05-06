import React from 'react'
import { pickFromSyntheticEvent } from './utils/react/pickFromSyntheticEvent'
import { preventDefault } from './utils/react/preventDefault'
import { stopPropagation } from './utils/react/stopPropagation'

interface InputProps {
	onChange: (value: string) => void
	value: string
}

interface CheckboxProps {
	onChange: (value: boolean) => void
	value: boolean
}

function compose<U>(...fns: Function[]) {
	return (initialValue: any): U =>
		fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue)
}

function pipe<U>(...fns: Function[]) {
	return (initialValue: any): U =>
		fns.reduce((previousValue, fn) => fn(previousValue), initialValue)
}

function pick<K extends string>(prop: K) {
	return <O extends Record<K, any>>(obj: O) => obj[prop]
}

function isEqual<T>(left: T) {
	return <E extends T>(right: E) => left === right
}

const some = pick('value')({ value: 1 })

const comments = [
	{ id: 22, text: 'one' },
	{ id: 44, text: 'two' },
]
// const filteredComments = comments.filter(({ id }) => id !== 22)

function cond(b: boolean) {
	return !b
}

const createFilterBy = (prop: string) => (id: number) =>
	pipe(pick(prop), isEqual(id), cond)
const filterWithId = createFilterBy('id')
const filterWithValue = createFilterBy('value')
const filterWithId22 = createFilterBy('id')(22)

const filteredComments = comments.filter(filterWithId(22))

const getValueNumber = pipe<number>(
	pick('currentTarget'),
	pick('value'),
	parseInt
)

function Input({ value, onChange }: InputProps) {
	return (
		<input
			value={value}
			// onChange={preventDefault(stopPropagation(getValue(onChange)))}
			onChange={compose(onChange, getValue, stopPropagation, preventDefault)}
		/>
	)
}

function Checkbox({ onChange, value }: CheckboxProps) {
	return (
		<div>
			<input type='checkbox' checked={value} onChange={getChecked(onChange)} />
		</div>
	)
}

export const getValue = pickFromSyntheticEvent<HTMLInputElement>()('value')

export const getChecked = pickFromSyntheticEvent<HTMLInputElement>()('checked')

function NotStandardLink(props: any) {
	return <a onClick={preventDefault(stopPropagation(props.onClick))}>Hello</a>
}
