import src from "assets/Pictogram.png";
import React from "react";
import {Col, Container, Row, Image} from "react-bootstrap";
import empty from 'assets/img/empty.png'
import 'assets/calendar.scss'
import {Link} from "react-router-dom";
import calendarDay from "../pages/CalendarDay";

export default function CalendarMonthView() {
	return (
		<table>
			<caption>Juni 2023</caption>
			<colgroup>
				<col span={5}/>
				<col span={5} className={"weekend"}/>
			</colgroup>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
				<td>1</td>
				<td>2</td>
				<td>3</td>
			</tr>
			<tr>
				<td>4</td>
				<td>5</td>
				<td>6</td>
				<td><Link to={"../calendarDay"}>7</Link></td>
				<td>8</td>
				<td>9</td>
				<td>10</td>
			</tr>
			<tr>
				<td>11</td>
				<td>12</td>
				<td>13</td>
				<td>14</td>
				<td>15</td>
				<td>16</td>
				<td>17</td>
			</tr>
			<tr>
				<td>18</td>
				<td>19</td>
				<td>20</td>
				<td>21</td>
				<td>22</td>
				<td>23</td>
				<td>24</td>
			</tr>
			<tr>
				<td>25</td>
				<td>26</td>
				<td>27</td>
				<td>28</td>
				<td>29</td>
				<td>30</td>
				<td></td>
			</tr>
		</table>
	)
}
