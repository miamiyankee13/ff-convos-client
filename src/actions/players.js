//Import modules
import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';

//Create action types & creators
export const FETCH_PLAYERS_REQUEST = 'FETCH_PLAYERS_REQUEST';
export const fetchPlayersRequest = () => ({
    type: FETCH_PLAYERS_REQUEST
});

export const FETCH_PLAYERS_SUCCESS = 'FETCH_PLAYERS_SUCCESS';
export const fetchPlayersSuccess = data => ({
    type: FETCH_PLAYERS_SUCCESS,
    data
});

export const FETCH_PLAYERS_ERROR = 'FETCH_PLAYERS_ERROR';
export const fetchPlayersError = error => ({
    type: FETCH_PLAYERS_ERROR,
    error
});

export const FETCH_USER_PLAYERS_REQUEST = 'FETCH_USER_PLAYERS_REQUEST';
export const fetchUserPlayersRequest = () => ({
    type: FETCH_USER_PLAYERS_REQUEST
});

export const FETCH_USER_PLAYERS_SUCCESS = 'FETCH_USER_PLAYERS_SUCCESS';
export const fetchUserPlayersSuccess = data => ({
    type: FETCH_USER_PLAYERS_SUCCESS,
    data
});

export const FETCH_USER_PLAYERS_ERROR = 'FETCH_USER_PLAYERS_ERROR';
export const fetchUserPlayersError = error => ({
    type: FETCH_USER_PLAYERS_ERROR,
    error
});

export const FETCH_USER_PLAYERS_BY_POSITION_REQUEST = 'FETCH_USER_PLAYERS_BY_POSITION_REQUEST';
export const fetchUserPlayersByPositionRequest = () => ({
    type: FETCH_USER_PLAYERS_BY_POSITION_REQUEST
});

export const FETCH_USER_PLAYERS_BY_POSITION_SUCCESS = 'FETCH_USER_PLAYERS_BY_POSITION_SUCCESS';
export const fetchUserPlayersByPositionSuccess = data => ({
    type: FETCH_USER_PLAYERS_BY_POSITION_SUCCESS,
    data
});

export const FETCH_USER_PLAYERS_BY_POSITION_ERROR = 'FETCH_USER_PLAYERS_BY_POSITION_ERROR';
export const fetchUserPlayersByPositionError = error => ({
    type: FETCH_USER_PLAYERS_BY_POSITION_ERROR,
    error
});

export const FETCH_CURRENT_PLAYER_REQUEST = 'FETCH_CURRENT_PLAYER_REQUEST';
export const fetchCurrentPlayerRequest = () => ({
    type: FETCH_CURRENT_PLAYER_REQUEST
});

export const FETCH_CURRENT_PLAYER_SUCCESS = 'FETCH_CURRENT_PLAYER_SUCCESS';
export const fetchCurrentPlayerSuccess = data => ({
    type: FETCH_CURRENT_PLAYER_SUCCESS,
    data
});

export const FETCH_CURRENT_PLAYER_ERROR = 'FETCH_CURRENT_PLAYER_ERROR';
export const fetchCurrentPlayerError = error => ({
    type: FETCH_CURRENT_PLAYER_ERROR,
    error
});

export const CLEAR_CURRENT_PLAYER = 'CLEAR_CURRENT_PLAYER';
export const clearCurrentPlayer = () => ({
    type: CLEAR_CURRENT_PLAYER
});

export const ADD_PLAYER_TO_USER_REQUEST = 'ADD_PLAYER_TO_USER_REQUEST';
export const addPlayerToUserRequest = () => ({
    type: ADD_PLAYER_TO_USER_REQUEST
});

export const ADD_PLAYER_TO_USER_SUCCESS = 'ADD_PLAYER_TO_USER_SUCCESS';
export const addPlayerToUserSuccess = () => ({
    type: ADD_PLAYER_TO_USER_SUCCESS
});

export const ADD_PLAYER_TO_USER_ERROR = 'ADD_PLAYER_TO_USER_ERROR';
export const addPlayerToUserError = error => ({
    type: ADD_PLAYER_TO_USER_ERROR,
    error
});

export const REMOVE_PLAYER_FROM_USER_REQUEST = 'REMOVE_PLAYER_FROM_USER_REQUEST';
export const removePlayerFromUserRequest = () => ({
    type: REMOVE_PLAYER_FROM_USER_REQUEST
});

export const REMOVE_PLAYER_FROM_USER_SUCCESS = 'REMOVE_PLAYER_FROM_USER_SUCCESS';
export const removePlayerFromUserSuccess = () => ({
    type: REMOVE_PLAYER_FROM_USER_SUCCESS
});

export const REMOVE_PLAYER_FROM_USER_ERROR = 'REMOVE_PLAYER_FROM_USER_ERROR';
export const removePlayerFromUserError = error => ({
    type: REMOVE_PLAYER_FROM_USER_ERROR,
    error
});

export const ADD_COMMENT_TO_PLAYER_REQUEST = 'ADD_COMMENT_TO_PLAYER_REQUEST';
export const addCommentToPlayerRequest = () => ({
    type: ADD_COMMENT_TO_PLAYER_REQUEST
});

export const ADD_COMMENT_TO_PLAYER_SUCCESS = 'ADD_COMMENT_TO_PLAYER_SUCCESS';
export const addCommentToPlayerSuccess = () => ({
    type: ADD_COMMENT_TO_PLAYER_SUCCESS
});

export const ADD_COMMENT_TO_PLAYER_ERROR = 'ADD_COMMENT_TO_PLAYER_ERROR';
export const addCommentToPlayerError = error => ({
    type: ADD_COMMENT_TO_PLAYER_ERROR,
    error
});

export const REMOVE_COMMENT_FROM_PLAYER_REQUEST = 'REMOVE_COMMENT_FROM_PLAYER_REQUEST';
export const removeCommentFromPlayerRequest = () => ({
    type: REMOVE_COMMENT_FROM_PLAYER_REQUEST
});

export const REMOVE_COMMENT_FROM_PLAYER_SUCCESS = 'REMOVE_COMMENT_FROM_PLAYER_SUCCESS';
export const removeCommentFromPlayerSuccess = () => ({
    type: REMOVE_COMMENT_FROM_PLAYER_SUCCESS
});

export const REMOVE_COMMENT_FROM_PLAYER_ERROR = 'REMOVE_COMMENT_FROM_PLAYER_ERROR';
export const removeCommentFromPlayerError = error => ({
    type: REMOVE_COMMENT_FROM_PLAYER_ERROR,
    error
});

export const CREATE_PLAYER_REQUEST = 'CREATE_PLAYER_REQUEST';
export const createPlayerRequest = () => ({
    type: CREATE_PLAYER_REQUEST
});

export const CREATE_PLAYER_SUCCESS = 'CREATE_PLAYER_SUCCESS';
export const createPlayerSuccess = () => ({
    type: CREATE_PLAYER_SUCCESS
});

export const CREATE_PLAYER_ERROR = 'CREATE_PLAYER_ERROR';
export const createPlayerError = error => ({
    type: CREATE_PLAYER_ERROR,
    error
});

export const EDIT_PLAYER_REQUEST = 'EDIT_PLAYER_REQUEST';
export const editPlayerRequest = () => ({
    type: EDIT_PLAYER_REQUEST
});

export const EDIT_PLAYER_SUCCESS = 'EDIT_PLAYER_SUCCESS';
export const editPlayerSuccess = () => ({
    type: EDIT_PLAYER_SUCCESS
});

export const EDIT_PLAYER_ERROR = 'EDIT_PLAYER_ERROR';
export const editPlayerError = error => ({
    type: EDIT_PLAYER_ERROR,
    error
});

//GET players fetch request
export const fetchPlayers = () => (dispatch) => {
    dispatch(fetchPlayersRequest());
    return fetch(`${API_BASE_URL}/api/players`, {
        method: 'GET'
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(res => dispatch(fetchPlayersSuccess(res)))
        .catch(err => dispatch(fetchPlayersError(err)));
}

//GET user players fetch request
export const fetchUserPlayers = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(fetchUserPlayersRequest());
    return fetch(`${API_BASE_URL}/api/users/players`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(res => dispatch(fetchUserPlayersSuccess(res)))
        .catch(err => dispatch(fetchUserPlayersError(err)));
}

//GET user players by position fetch request
export const fetchUserPlayersByPosition = (position) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(fetchUserPlayersByPositionRequest());
    return fetch(`${API_BASE_URL}/api/users/players/${position}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(res => dispatch(fetchUserPlayersByPositionSuccess(res)))
        .catch(err => dispatch(fetchUserPlayersByPositionError(err)));
}

//GET current player fetch request
export const fetchCurrentPlayer = (id) => (dispatch) => {
    dispatch(fetchCurrentPlayerRequest());
    return fetch(`${API_BASE_URL}/api/players/${id}`, {
        method: 'GET'
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(res => dispatch(fetchCurrentPlayerSuccess(res)))
        .catch(err => dispatch(fetchCurrentPlayerError(err)));
}

//PUT player to user fetch request
export const addPlayerToUser = (id) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(addPlayerToUserRequest());
    return fetch(`${API_BASE_URL}/api/users/players/${id}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(() => dispatch(addPlayerToUserSuccess())) 
        .catch(err => dispatch(addPlayerToUserError(err)));
}

//DELETE player from user fetch request
export const removePlayerFromUser = (id) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(removePlayerFromUserRequest());
    return fetch(`${API_BASE_URL}/api/users/players/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(() => dispatch(removePlayerFromUserSuccess())) 
        .catch(err => dispatch(removePlayerFromUserError(err)));
}

//POST comment to player fetch request
export const addCommentToPlayer = (id, content, author) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(addCommentToPlayerRequest());
    return fetch(`${API_BASE_URL}/api/players/${id}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            comment: {
                content,
                author
            }
        })
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(() => dispatch(addCommentToPlayerSuccess()))
        .catch(err => dispatch(addCommentToPlayerError(err))); 
}

//DELETE comment from player fetch request
export const removeCommentFromPlayer = (id, commentId) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(removeCommentFromPlayerRequest());
    return fetch(`${API_BASE_URL}/api/players/${id}/${commentId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(() => dispatch(removeCommentFromPlayerSuccess()))
        .catch(err => dispatch(removeCommentFromPlayerError(err)));
}

//POST new player fetch request
export const createPlayer = (name, position, number, team) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(createPlayerRequest());
    return fetch(`${API_BASE_URL}/api/players`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            name,
            position,
            number,
            team
        })
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(() => dispatch(createPlayerSuccess()))
        .catch(err => dispatch(createPlayerError(err)));
}

//PUT existing player fetch request
export const editPlayer = (id, name, position, number, team) => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(editPlayerRequest());
    return fetch(`${API_BASE_URL}/api/players/${id}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${authToken}`,
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            _id: id,
            name,
            position,
            number,
            team
        })
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(() => dispatch(editPlayerSuccess()))
        .catch(err => dispatch(editPlayerError(err)));
}