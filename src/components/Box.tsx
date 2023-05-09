import {CSSProperties, FC, ReactNode } from "react"
import { useDrag } from "react-dnd"

const boxStyle: CSSProperties = {
	position: 'absolute',
	backgroundColor: 'white',
	cursor: 'pointer',
}

export interface BoxProps {
	id: any,
	right: number,
	top: number,
	hideSourceOnDrag?: boolean,
	children?: ReactNode
}

export const Box: FC<BoxProps> = ({id, right, top, hideSourceOnDrag, children}) => {
	const [{isDragging}, drag] = useDrag(
		() => ({
			type: 'PICTOGRAM',
			item: {id, right, top},
			collect: (monitor) => ({
				isDragging: monitor.isDragging(),
			})
		}),
		[id, right, top],
	)
	if (isDragging && hideSourceOnDrag) {
		return <div ref={drag}/>
	}
	return (
		<div className="box" ref={drag} style={{...boxStyle, right, top}} data-testid="box">
			{children}
		</div>
	)
}
