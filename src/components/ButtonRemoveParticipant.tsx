import React from 'react'
import {Button} from 'react-bootstrap'
import ModalConfirmRemoveParticipant from './ModalConfirmRemoveParticipant'

export default function ButtonRemoveParticipant(props: any) {
	const [modalShow, setModalShow] = React.useState(false);
	const name = "Ta bort deltagare"

	return (<>
		<ModalConfirmRemoveParticipant show={modalShow} onHide={() => setModalShow(false)}/>
		<Button variant="outline-danger" onClick={() => setModalShow(true)}>{name}</Button>
	</>)
}
