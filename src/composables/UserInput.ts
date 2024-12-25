export function onlyAllowNumber(value: string): boolean {
	return !value || /^\d+$/.test(value);
}
