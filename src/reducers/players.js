import {
    FETCH_PLAYERS_REQUEST,
    FETCH_PLAYERS_SUCCESS,
    FETCH_PLAYERS_ERROR,
    FETCH_USER_PLAYERS_REQUEST,
    FETCH_USER_PLAYERS_SUCCESS,
    FETCH_USER_PLAYERS_ERROR,
    FETCH_USER_PLAYERS_BY_POSITION_REQUEST,
    FETCH_USER_PLAYERS_BY_POSITION_SUCCESS,
    FETCH_USER_PLAYERS_BY_POSITION_ERROR,
    FETCH_CURRENT_PLAYER_REQUEST,
    FETCH_CURRENT_PLAYER_SUCCESS,
    FETCH_CURRENT_PLAYER_ERROR,
    CLEAR_CURRENT_PLAYER
} from '../actions/players';

const initialState = {
    players: [],
    userPlayers: [],
    currentPlayer: null,
    loading: false,
    feedback: null,
    error: null
};

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_PLAYERS_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                feedback: null,
                error: null
            });
        case FETCH_PLAYERS_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                feedback: {success: true, message: 'Players fetched!'},
                players: action.data.players
            });
        case FETCH_PLAYERS_ERROR:
            return Object.assign({}, state, {
                loading: false,
                feedback: {success: false, message: action.error.message},
                error: action.error
            });
        case FETCH_USER_PLAYERS_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                feedback: null,
                error: null
            });
        case FETCH_USER_PLAYERS_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                feedback: {success: true, message: 'User players fetched!'},
                userPlayers: action.data.players
            });
        case FETCH_USER_PLAYERS_ERROR:
            return Object.assign({}, state, {
                loading: false, 
                feedback: {success: false, message: action.error.message},
                error: action.error
            });
        case FETCH_USER_PLAYERS_BY_POSITION_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                feedback: null,
                error: null
            });
        case FETCH_USER_PLAYERS_BY_POSITION_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                feedback: {success: true, message: 'User players fetched by position!'},
                userPlayers: action.data.players
            });
        case FETCH_USER_PLAYERS_BY_POSITION_ERROR:
            return Object.assign({}, state, {
                loading: false, 
                feedback: {success: false, message: action.error.message},
                error: action.error
            });
        case FETCH_CURRENT_PLAYER_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                feedback: null,
                error: null
            });
        case FETCH_CURRENT_PLAYER_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                feedback: {success: true, message: 'Player fetched!'},
                currentPlayer: action.data
            });
        case FETCH_CURRENT_PLAYER_ERROR:
            return Object.assign({}, state, {
                loading: false, 
                feedback: {success: false, message: action.error.message},
                error: action.error
            });
        case CLEAR_CURRENT_PLAYER:
            return Object.assign({}, state, {
                currentPlayer: null
            });

        default:
            return state;
    }
}