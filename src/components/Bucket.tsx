import {CSSProperties, FC, useCallback, useState} from "react";
import {useDrop, XYCoord} from "react-dnd";
import {Box} from "./Box";
import {Image} from "react-bootstrap";
import update from 'immutability-helper'
import baka from 'assets/img/pictogram/baka.png'
import diska from 'assets/img/pictogram/diska.png'
import fika from 'assets/img/pictogram/fika.png'
import måla from 'assets/img/pictogram/måla.png'
import sticka from 'assets/img/pictogram/sticka.png'
import yoga from 'assets/img/pictogram/yoga.png'

const bucketStyle: CSSProperties = {
	width: '100vw',
	height: '120vh',
	position: 'absolute',
}

export interface BucketProps {
	hideSourceOnDrag: boolean
}

export interface BucketState {
	boxes: { [key: string]: { top: number; right: number; source: string } }
}

interface DragItem {
	type: string
	id: string
	top: number
	right: number
}

export const Bucket: FC<BucketProps> = ({hideSourceOnDrag}) => {
	const [boxes, setBoxes] = useState<{
		[key: string]: {
			top: number
			right: number
			source: string
		}
	}>({
		a: {top: 20, right: 16, source: baka},
		b: {top: 130, right: 16, source: diska},
		c: {top: 240, right: 16, source: sticka},
		d: {top: 350, right: 16, source: måla},
	})

	const moveBox = useCallback(
		(id: string, right: number, top: number) => {
			setBoxes(
				update(boxes, {
					[id]: {
						$merge: {right, top},
					},
				}),
			)
		},
		[boxes, setBoxes],
	)

	const [, drop] = useDrop(
		() => ({
			accept: 'PICTOGRAM',
			drop(item: DragItem, monitor) {
				const delta = monitor.getDifferenceFromInitialOffset() as XYCoord
				const right = Math.round(item.right - delta.x)
				const top = Math.round(item.top + delta.y)
				moveBox(item.id, right, top)
				return undefined
			},
		}),
		[moveBox],
	)

	return (
		<div ref={drop} style={bucketStyle}>
			{Object.keys(boxes).map((key) => {
				const {right, top, source} = boxes[key] as { top: number, right: number, source: string }
				return (
					<Box key={key} id={key} right={right} top={top} hideSourceOnDrag={hideSourceOnDrag}>
						<Image width={100} alt="Image" src={source}/>
					</Box>
				)
			})}
		</div>
	)
}
