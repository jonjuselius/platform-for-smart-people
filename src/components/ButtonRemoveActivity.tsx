import React from 'react'
import {Button} from 'react-bootstrap'
import ModalConfirmRemoveActivity from 'components/ModalConfirmRemoveActivity'

export default function ButtonRemoveActivity(props: any) {
	const [modalShow, setModalShow] = React.useState(false);
	const name = "Ta bort aktivitet"

	return (<>
		<Button variant="outline-danger" onClick={() => setModalShow(true)}>{name}</Button>
		<ModalConfirmRemoveActivity show={modalShow} onHide={() => setModalShow(false)}/>
	</>)
}
