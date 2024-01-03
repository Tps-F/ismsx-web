interface Work {
  date: string;
}

export const sortByDate = (a: Work, b: Work) => {
	return new Date(b.date).getTime() - new Date(a.date).getTime();
};
