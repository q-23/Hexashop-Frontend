import { mapImageThumbnails} from "helperFunctions/mapImageUrls";

import { MOCK_PRODUCTS_DATA } from "./mapImageUrls.mock.data";

import React from 'react';

describe('[IMAGE URLS HELPER FUNCTION]', () => {
	test('should properly map thumbnail urls', () => {
		mapImageThumbnails(MOCK_PRODUCTS_DATA).forEach((el, idx) => expect(el.image_thumbnail).toBe(`${process.env.REACT_APP_API_URL}/image/${`teststring${idx + 1}`}`))
	});
})

