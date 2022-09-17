export const defineColorOfStatus = (status) => {
	if (status === 'waiting') return 'lightblue';
	if (status === 'ended') return 'lightgray';
	if (status === 'confirmed') return 'green';
}