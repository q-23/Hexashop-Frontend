export const MOCK_PRODUCTS_DATA = (function (count) {
	const mockArrayAccumulator = [];
	for (let i = 1; i <= count; i++) {
		mockArrayAccumulator.push({
			product_name: `Product ${i}`,
			price: i,
			image_thumbnail: `teststring${i}`,
			_id: `testid${i}`
		})
	}
	return mockArrayAccumulator;
}(10))