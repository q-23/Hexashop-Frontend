import React from "react";

import { Input } from "./QuantityInput.style";
import Button from "components/_Shared/Button";
import Icon from "components/_Shared/Icon";

const QuantityInput = input => {
	return (
		<div>
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
		</div>
	)
};

export default QuantityInput;