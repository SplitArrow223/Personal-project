import axios from 'axios';

const initialState = {
	rounds: [],
  courses: [] 
}

const GET_COURSES = 'GET_COURSES';
const GET_ROUNDS = 'GET_ROUNDS';
const ADD_ROUND = 'ADD_ROUND';
const EDIT_ROUND = 'EDIT_ROUND';
const REMOVE_ROUND = 'REMOVE_ROUND';

export function getAllRounds() {
	let data = axios.get('/courses/rounds').then(res => res.data)
	return {
		type: GET_ROUNDS,
		payload: data
	}
}
export function getAllCourses() {
	let data = axios.get('/courses').then(res => res.data)
	return {
		type: GET_COURSES,
		payload: data
	}
}

export function addRound(course_id, score, round_date) {
	let card = axios.post('/courses/rounds',{course_id, score, round_date}).then(res => res.data)
	console.log(card)
	return {
		type: ADD_ROUND,
		payload: card
	}
}
export function editRound(id, score, round_date) {
	let data = axios.put(`/courses/rounds/${id}`,{score, round_date}).then(res => res.data)
	return {
		type: EDIT_ROUND,
		payload: data
	}
}

export const removeRound = (id) => {
	let data = axios.delete(`/courses/rounds/${id}`).then(res => res.data)
	return {
		type: REMOVE_ROUND,
		payload: data
	}
}

export default function(state = initialState, action) {
	let {payload} = action;
	switch (action.type) {
		case GET_ROUNDS + '_FULFILLED':
			return Object.assign({}, state, {rounds: payload});
		case GET_COURSES + '_FULFILLED':
			return Object.assign({}, state, {courses: payload});
		case ADD_ROUND + '_FULFILLED':
		  return Object.assign({}, state, {rounds: payload});
		case EDIT_ROUND + '_FULFILLED':
		  return Object.assign({}, state, {rounds: payload});
		case REMOVE_ROUND + '_FULFILLED':
		  return Object.assign({}, state, {rounds: payload});
		default:
			return state;
	}
}