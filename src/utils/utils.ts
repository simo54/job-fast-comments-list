export const transformBody = (body: string, size?: number) => {
	// Declare a standard size
	if (!size) size = 64;
	const bodyWithDots = `${body.substring(0, size)}...`;
	return bodyWithDots;
};
