import Validation from 'components/Validation';

test('Should not permit falsy values', () => {
	expect(Validation.required('')).toBeTruthy()
	expect(Validation.required(undefined)).toBeTruthy()
	expect(Validation.required(null)).toBeTruthy()
})

test('Should permit truthy values', () => {
	expect(Validation.required('asdfgh')).toBeFalsy()
	expect(Validation.required(123)).toBeFalsy()
	expect(Validation.required({})).toBeFalsy()
	expect(Validation.required([])).toBeFalsy()
});