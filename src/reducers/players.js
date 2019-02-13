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
    CLEAR_CURRENT_PLAYER,
    ADD_PLAYER_TO_USER_REQUEST,
    ADD_PLAYER_TO_USER_SUCCESS,
    ADD_PLAYER_TO_USER_ERROR,
    REMOVE_PLAYER_FROM_USER_REQUEST,
    REMOVE_PLAYER_FROM_USER_SUCCESS,
    REMOVE_PLAYER_FROM_USER_ERROR,
    ADD_COMMENT_TO_PLAYER_REQUEST,
    ADD_COMMENT_TO_PLAYER_SUCCESS,
    ADD_COMMENT_TO_PLAYER_ERROR,
    REMOVE_COMMENT_FROM_PLAYER_REQUEST,
    REMOVE_COMMENT_FROM_PLAYER_SUCCESS,
    REMOVE_COMMENT_FROM_PLAYER_ERROR,
    CREATE_PLAYER_REQUEST,
    CREATE_PLAYER_SUCCESS,
    CREATE_PLAYER_ERROR,
    EDIT_PLAYER_REQUEST,
    EDIT_PLAYER_SUCCESS,
    EDIT_PLAYER_ERROR
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
                error: action.error.message
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
                error: action.error.message
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
                error: action.error.message
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
                error: action.error.message
            });
        case CLEAR_CURRENT_PLAYER:
            return Object.assign({}, state, {
                currentPlayer: null
            });
        case ADD_PLAYER_TO_USER_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                feedback: null,
                error: null
            });
        case ADD_PLAYER_TO_USER_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                feedback: {success: true, message: 'Player added to user!'}
            });
        case ADD_PLAYER_TO_USER_ERROR:
            return Object.assign({}, state, {
                loading: false, 
                feedback: {success: false, message: action.error.message},
                error: action.error.message
            });
        case REMOVE_PLAYER_FROM_USER_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                feedback: null,
                error: null
            });
        case REMOVE_PLAYER_FROM_USER_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                feedback: {success: true, message: 'Player removed from user!'}
            });
        case REMOVE_PLAYER_FROM_USER_ERROR:
            return Object.assign({}, state, {
                loading: false, 
                feedback: {success: false, message: action.error.message},
                error: action.error.message
            });
        case ADD_COMMENT_TO_PLAYER_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                feedback: null,
                error: null
            });
        case ADD_COMMENT_TO_PLAYER_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                feedback: {success: true, message: 'Comment added to player!'}
            });
        case ADD_COMMENT_TO_PLAYER_ERROR:
            return Object.assign({}, state, {
                loading: false, 
                feedback: {success: false, message: action.error.message},
                error: action.error.message
            });
        case REMOVE_COMMENT_FROM_PLAYER_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                feedback: null,
                error: null
            });
        case REMOVE_COMMENT_FROM_PLAYER_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                feedback: {success: true, message: 'Comment removed from player!'}
            });
        case REMOVE_COMMENT_FROM_PLAYER_ERROR:
            return Object.assign({}, state, {
                loading: false, 
                feedback: {success: false, message: action.error.message},
                error: action.error.message
            });
        case CREATE_PLAYER_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                feedback: null,
                error: null
            });
        case CREATE_PLAYER_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                feedback: {success: true, message: 'Player created!'}
            });
        case CREATE_PLAYER_ERROR: 
            return Object.assign({}, state, {
                loading: false, 
                feedback: {success: false, message: action.error.message},
                error: action.error.message
            });
        case EDIT_PLAYER_REQUEST:
            return Object.assign({}, state, {
                loading: true,
                feedback: null,
                error: null
            });
        case EDIT_PLAYER_SUCCESS:
            return Object.assign({}, state, {
                loading: false,
                feedback: {success: true, message: 'Player edited!'}
            });
        case EDIT_PLAYER_ERROR:
            return Object.assign({}, state, {
                loading: false, 
                feedback: {success: false, message: action.error.message},
                error: action.error.message
            });
        default:
            return state;
    }
}