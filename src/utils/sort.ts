interface Work {
	date: string;
	pin: boolean
}

export const sortByDate = (a: Work, b: Work) => {
	return new Date(b.date).getTime() - new Date(a.date).getTime();
};

export const sortByPin = (a: Work, b: Work) => {
	return (a.pin === b.pin) ? 0 : a.pin ? -1 : 1
}
