import React, {createContext, useContext, useEffect, useState} from 'react'
import Activity, {diska, empty} from '../components/Activity'
import {Button, Col, Container, Form, Row} from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import FilePicker from '../components/FilePicker'
import SettingsActivity from '../components/SettingsActivity'
import {personas} from '../components/Persona'

function Timeslot(props: any) {
	const [activity, setActivity] = useState(props.activity)
	const [modalTitle, setModalTitle] = useState('')
	const [showModal, setShowModal] = useState(false)
	const closeModal = () => {
		setShowModal(false)
	}

	const toggleContent = () => {
		if (activity === empty) {
			setActivity(diska)
		} else {
			setActivity(empty)
		}
	}

	const addActivity = () => {
		setShowModal(true)
		setModalTitle('Lägg till aktivitet')
	}

	const editActivity = () => {
		setShowModal(true)
		setModalTitle('Redigera aktivitet')
	}

	const handleClick = () => {
		if (activity === empty) {
			addActivity()
		} else {
			editActivity()
		}
	}

	return (
		<>
			<div onClick={handleClick} style={{cursor: 'pointer'}}>
				<Activity activity={activity} size={100} roundedCircle={true}/>
			</div>
			{/*<Button onClick={toggleContent}>Toggle</Button>*/}
			{/*<Button onClick={addActivity}>Add activity</Button>*/}
			{/*<Button onClick={editActivity}>Edit activity</Button>*/}

			<Modal show={showModal} onHide={closeModal} size="lg">
				<Modal.Header closeButton>
					<Modal.Title>{modalTitle}</Modal.Title>
				</Modal.Header>
				<Modal.Body>

					<Form>
						<Form.Group className="mb-3 d-flex flex-row gap-3">
							<Form.Group>
								<FilePicker element={<Activity activity={activity} size={100} roundedCircle={true}/>}
								            size={100} roundedCircle={true}/>
							</Form.Group>
							<Form.Group className="w-100">
								<Form.Control as="textarea" rows={4} placeholder={'Beskrivning av aktiviteten'}
								              value={activity.description} style={{resize: 'none'}}/>
							</Form.Group>
						</Form.Group>

						<SettingsActivity/>

						<Form.Group className="mb-3">
							<Form.Label>Deltagare:</Form.Label>
							<select className="form-select" multiple>
								{personas.map(persona => (
									<option>{persona.name}</option>
								))}
							</select>
						</Form.Group>
					</Form>

				</Modal.Body>
				<Modal.Footer>
					<Button onClick={closeModal} variant={'secondary'}>Stäng</Button>
					<Button onClick={closeModal}>{modalTitle}</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}

function DayColumn(props: any) {
	const weekday = props.weekday
	const date = props.datefunction(useContext(DateContext))
	let timeslot9 = <Timeslot activity={diska}/>
	let timeslot10 = <Timeslot activity={empty}/>
	let timeslot11 = <Timeslot activity={empty}/>
	let timeslot12 = <Timeslot activity={diska}/>
	let timeslot13 = <Timeslot activity={empty}/>
	let timeslot14 = <Timeslot activity={diska}/>

	return (
		<Col className={'bg-light'}>
			<Row className={'bg-light'}>
				<Col className={'bg-light'}>
					{weekday}<br/>{date.toLocaleDateString()}
				</Col>
			</Row>
			<Row className={'bg-light'}>
				<Col className={'bg-light'}>
					{timeslot9}
				</Col>
			</Row>
			<Row className={'bg-light'}>
				<Col className={'bg-light'}>
					{timeslot10}
				</Col>
			</Row>
			<Row className={'bg-light'}>
				<Col className={'bg-light'}>
					{timeslot11}
				</Col>
			</Row>
			<Row className={'bg-light'}>
				<Col className={'bg-light'}>
					{timeslot12}
				</Col>
			</Row>
			<Row className={'bg-light'}>
				<Col className={'bg-light'}>
					{timeslot13}
				</Col>
			</Row>
			<Row className={'bg-light'}>
				<Col className={'bg-light'}>
					{timeslot14}
				</Col>
			</Row>
		</Col>
	)
}

export const calendar = new Map([
	['2023-05-15', [diska, empty, diska, diska, empty, empty]],
	['2023-05-16', [diska, diska, empty, diska, diska, empty]],
	['2023-05-17', [diska, empty, empty, empty, empty, empty]],
	['2023-05-18', [empty, empty, diska, empty, empty, empty]],
	['2023-05-19', [empty, diska, empty, diska, diska, empty]],
])
const today: Date = new Date()
const DateContext = createContext(today)

function CalendarTimeslots() {
	const [date, setDate] = useState(today)
	const [mondayActivities, setMondayActivities] = useState([empty, empty, empty, empty, empty, empty])

	const decreaseDate = () => {
		const yesterday = new Date(date)
		yesterday.setDate(yesterday.getDate() - 1)
		setDate(yesterday)
	}
	const increaseDate = () => {
		const tomorrow = new Date(date)
		tomorrow.setDate(tomorrow.getDate() + 1)
		setDate(tomorrow)
	}
	const decreaseMonth = () => {
		const lastMonth = new Date(date)
		lastMonth.setMonth(lastMonth.getMonth() - 1)
		setDate(lastMonth)
	}
	const increaseMonth = () => {
		const nextMonth = new Date(date)
		nextMonth.setMonth(nextMonth.getMonth() + 1)
		setDate(nextMonth)
	}
	const decreaseWeek = () => {
		const lastWeek = new Date(date)
		lastWeek.setDate(lastWeek.getDate() - 7)
		setDate(lastWeek)
	}
	const increaseWeek = () => {
		const nextWeek = new Date(date)
		nextWeek.setDate(nextWeek.getDate() + 7)
		setDate(nextWeek)
	}
	const firstDayOfWeek = (date: Date, firstDayOfWeekIndex: number = 1) => {
		const dayOfWeek = date.getDay(),
			firstDayOfWeek = new Date(date),
			diff = dayOfWeek >= firstDayOfWeekIndex ?
				dayOfWeek - firstDayOfWeekIndex :
				6 - dayOfWeek
		firstDayOfWeek.setDate(date.getDate() - diff)
		firstDayOfWeek.setHours(0, 0, 0, 0)
		return firstDayOfWeek
	}
	const monday = (date: Date) => firstDayOfWeek(date)
	const tuesday = (date: Date) => {
		const monday = firstDayOfWeek(date)
		const tuesday = new Date(monday)
		tuesday.setDate(monday.getDate() + 1)
		return tuesday
	}
	const wednesday = (date: Date) => {
		const monday = firstDayOfWeek(date)
		const wednesday = new Date(monday)
		wednesday.setDate(monday.getDate() + 2)
		return wednesday
	}
	const thursday = (date: Date) => {
		const monday = firstDayOfWeek(date)
		const thursday = new Date(monday)
		thursday.setDate(monday.getDate() + 3)
		return thursday
	}
	const friday = (date: Date) => {
		const monday = firstDayOfWeek(date)
		const friday = new Date(monday)
		friday.setDate(monday.getDate() + 4)
		return friday
	}

	function weekNumber(date: any) {
		var oneJan: any = new Date(date.getFullYear(),0,1);
		var numberOfDays = Math.floor((date - oneJan) / (24 * 60 * 60 * 1000));
		var result = Math.ceil(( date.getDay() + numberOfDays) / 7);
		return result;
	}

	return (
		<DateContext.Provider value={date}>
			<div className={"d-flex flex-row gap-3 justify-content-center"}>
				<Button onClick={decreaseWeek} variant={"outline-primary"}>Föregående vecka</Button>
				{/*<h1>{date.toLocaleDateString()}</h1>*/}
				<h1>Vecka {weekNumber(date)}</h1>
				<Button onClick={increaseWeek} variant={"outline-primary"}>Nästa vecka</Button>
			</div>

			<Row>
				<DayColumn weekday="Monday" datefunction={monday}/>
				<DayColumn weekday="Tuesday" datefunction={tuesday}/>
				<DayColumn weekday="Wednesday" datefunction={wednesday}/>
				<DayColumn weekday="Thursday" datefunction={thursday}/>
				<DayColumn weekday="Friday" datefunction={friday}/>
			</Row>
		</DateContext.Provider>

	)
}

export default CalendarTimeslots
