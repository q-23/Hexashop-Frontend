import styled from 'styled-components';

const Component = (component) => (styles) => {
	return styled[component](styles)
};

export default Component;