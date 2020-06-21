import React from "react";

import { Input, InputWrapper } from "./QuantityInput.style";
import Button from "components/_Shared/Button";
import Icon from "components/_Shared/Icon";

const QuantityInput = input => {
	return (
		<InputWrapper>
			<Button quantity_button onClick={() => {
				if (input.value > 1)
					input.onChange(input.value -1)
			}}
			type={'button'}
			>
				<Icon className={'fa fa-minus'}/>
			</Button>
				<Input
					name={'quantity'}
					min={1}
					{...input}
				/>
			<Button quantity_button type={'button'} onClick={() => input.onChange(input.value + 1)}>
				<Icon className={'fa fa-plus'}/>
			</Button>
		</InputWrapper>
	)
};

export default QuantityInput;