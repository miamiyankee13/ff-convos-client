import playersReducer from '../players';
import {
    fetchPlayersRequest,
    fetchPlayersSuccess,
    fetchPlayersError,
    fetchUserPlayersRequest,
    fetchUserPlayersSuccess,
    fetchUserPlayersError,
    fetchUserPlayersByPositionRequest,
    fetchUserPlayersByPositionSuccess,
    fetchUserPlayersByPositionError,
    fetchCurrentPlayerRequest,
    fetchCurrentPlayerSuccess,
    fetchCurrentPlayerError,
    clearCurrentPlayer,
    addPlayerToUserRequest,
    addPlayerToUserSuccess,
    addPlayerToUserError,
    removePlayerFromUserRequest,
    removePlayerFromUserSuccess,
    removePlayerFromUserError,
    addCommentToPlayerRequest,
    addCommentToPlayerSuccess,
    addCommentToPlayerError,
    removeCommentFromPlayerRequest,
    removeCommentFromPlayerSuccess,
    removeCommentFromPlayerError,
    createPlayerRequest,
    createPlayerSuccess,
    createPlayerError,
    editPlayerRequest,
    editPlayerSuccess,
    editPlayerError
} from '../../actions/players';

describe('playersReducer', function() {
    const initialState = {
        players: [],
        userPlayers: [],
        currentPlayer: null,
        loading: false,
        feedback: null,
        error: null
    };

    const mockData = {
        players: ['Dan Marino', 'Ricky Williams'],
        userPlayers: ['Jason Taylor', 'Zach Thomas'],
        currentPlayer: { name: 'Reshad Jones' },
        error: {
            message: 'There was an error'
        }
    };

    it('Should set the initial state when nothing is passed in', function() {
        const state = playersReducer(undefined, { type: '__UNKNOWN' });
        expect(state).toEqual(initialState);
    });

    it('Should return the current stae on an unknown action', function() {
        const currentState = {};
        const state = playersReducer(currentState, { type: '__UNKNOWN' });
        expect(state).toBe(currentState);
    });

    describe('fetchPlayersRequest', function() {
        it('Should make request', function() {
            const state = playersReducer(initialState, fetchPlayersRequest());
            expect(state).toEqual({
                players: [],
                userPlayers: [],
                currentPlayer: null,
                loading: true,
                feedback: null,
                error: null
            });
        });
    });

    describe('fetchPlayersSuccess', function() {
        it('Should set players', function() {
            const data = {
                players: mockData.players
            }
            const state = playersReducer(initialState, fetchPlayersSuccess(data));
            expect(state).toEqual({
                players: mockData.players,
                userPlayers: [],
                currentPlayer: null,
                loading: false,
                feedback: null,
                error: null
            });
        });
    });

    describe('fetchPlayersError', function() {
        it('Should set error', function() {
            const state = playersReducer(initialState, fetchPlayersError(mockData.error));
            expect(state).toEqual({
                players: [],
                userPlayers: [],
                currentPlayer: null,
                loading: false,
                feedback: null,
                error: mockData.error.message
            });
        });
    });

    describe('fetchUserPlayersRequest', function() {
        it('Should make request', function() {
            const state = playersReducer(initialState, fetchUserPlayersRequest());
            expect(state).toEqual({
                players: [],
                userPlayers: [],
                currentPlayer: null,
                loading: true,
                feedback: null,
                error: null
            });
        });
    });

    describe('fetchUserPlayersSuccess', function() {
        it('Should set userPlayers', function() {
            const data = {
                players: mockData.userPlayers
            }
            const state = playersReducer(initialState, fetchUserPlayersSuccess(data));
            expect(state).toEqual({
                players: [],
                userPlayers: mockData.userPlayers,
                currentPlayer: null,
                loading: false,
                feedback: null,
                error: null
            });
        });
    });

    describe('fetchUserPlayersError', function() {
        it('Should set error', function() {
            const state = playersReducer(initialState, fetchUserPlayersError(mockData.error));
            expect(state).toEqual({
                players: [],
                userPlayers: [],
                currentPlayer: null,
                loading: false,
                feedback: null,
                error: mockData.error.message
            });
        });
    });

    describe('fetchUserPlayersByPositionRequest', function() {
        it('Should make request', function() {
            const state = playersReducer(initialState, fetchUserPlayersByPositionRequest());
            expect(state).toEqual({
                players: [],
                userPlayers: [],
                currentPlayer: null,
                loading: true,
                feedback: null,
                error: null
            });
        });
    });

    describe('fetchUserPlayersByPositionSuccess', function() {
        it('Should set userPlayers', function() {
            const data = {
                players: mockData.userPlayers
            }
            const state = playersReducer(initialState, fetchUserPlayersByPositionSuccess(data));
            expect(state).toEqual({
                players: [],
                userPlayers: mockData.userPlayers,
                currentPlayer: null,
                loading: false,
                feedback: null,
                error: null
            });
        });
    });

    describe('fetchUserPlayersByPositionError', function() {
        it('Should set error', function() {
            const state = playersReducer(initialState, fetchUserPlayersByPositionError(mockData.error));
            expect(state).toEqual({
                players: [],
                userPlayers: [],
                currentPlayer: null,
                loading: false,
                feedback: null,
                error: mockData.error.message
            });
        });
    });

    describe('fetchCurrentPlayerRequest', function() {
        it('Should make request', function() {
            const state = playersReducer(initialState, fetchCurrentPlayerRequest());
            expect(state).toEqual({
                players: [],
                userPlayers: [],
                currentPlayer: null,
                loading: true,
                feedback: null,
                error: null
            });
        });
    });

    describe('fetchCurrentPlayerSuccess', function() {
        it('Should set currentPlayer', function() {
            const state = playersReducer(initialState, fetchCurrentPlayerSuccess(mockData.currentPlayer));
            expect(state).toEqual({
                players: [],
                userPlayers: [],
                currentPlayer: mockData.currentPlayer,
                loading: false,
                feedback: null,
                error: null
            });
        });
    });

    describe('fetchCurrentPlayerError', function() {
        it('Should set error', function() {
            const state = playersReducer(initialState, fetchCurrentPlayerError(mockData.error));
            expect(state).toEqual({
                players: [],
                userPlayers: [],
                currentPlayer: null,
                loading: false,
                feedback: null,
                error: mockData.error.message
            });
        });
    });

    describe('clearCurrentPlayer', function() {
        it('Should reset currentPlayer', function() {
            const currentState = {
                players: [],
                userPlayers: [],
                currentPlayer: mockData.currentPlayer,
                loading: false,
                feedback: null,
                error: null
            }
            const state = playersReducer(currentState, clearCurrentPlayer());
            expect(state).toEqual(initialState);
        });
    });

    describe('addPlayerToUserRequest', function() {
        it('Should make request', function() {
            const state = playersReducer(initialState, addPlayerToUserRequest());
            expect(state).toEqual({
                players: [],
                userPlayers: [],
                currentPlayer: null,
                loading: true,
                feedback: null,
                error: null
            });
        });
    });

    describe('addPlayerToUserSuccess', function() {
        it('Should reset loading', function() {
            const currentState = {
                players: [],
                userPlayers: [],
                currentPlayer: null,
                loading: true,
                feedback: null,
                error: null
            };
            const state = playersReducer(currentState, addPlayerToUserSuccess());
            expect(state).toEqual(initialState);
        });
    });

    describe('addPlayerToUserError', function() {
        it('Should set error', function() {
            const state = playersReducer(initialState, addPlayerToUserError(mockData.error));
            expect(state).toEqual({
                players: [],
                userPlayers: [],
                currentPlayer: null,
                loading: false,
                feedback: null,
                error: mockData.error.message
            });
        });
    });

    describe('removePlayerFromUserRequest', function() {
        it('Should make request', function() {
            const state = playersReducer(initialState, removePlayerFromUserRequest());
            expect(state).toEqual({
                players: [],
                userPlayers: [],
                currentPlayer: null,
                loading: true,
                feedback: null,
                error: null
            });
        });
    });

    describe('removePlayerFromUserSuccess', function() {
        it('Should reset loading', function() {
            const currentState = {
                players: [],
                userPlayers: [],
                currentPlayer: null,
                loading: true,
                feedback: null,
                error: null
            };
            const state = playersReducer(currentState, removePlayerFromUserSuccess());
            expect(state).toEqual(initialState);
        });
    });

    describe('removePlayerFromUserError', function() {
        it('Should set error', function() {
            const state = playersReducer(initialState, removePlayerFromUserError(mockData.error));
            expect(state).toEqual({
                players: [],
                userPlayers: [],
                currentPlayer: null,
                loading: false,
                feedback: null,
                error: mockData.error.message
            });
        });
    });

    describe('addCommentToPlayerRequest', function() {
        it('Should make request', function() {
            const state = playersReducer(initialState, addCommentToPlayerRequest());
            expect(state).toEqual({
                players: [],
                userPlayers: [],
                currentPlayer: null,
                loading: true,
                feedback: null,
                error: null
            });
        });
    });

    describe('addCommentToPlayerSuccess', function() {
        it('Should reset loading', function() {
            const currentState = {
                players: [],
                userPlayers: [],
                currentPlayer: null,
                loading: true,
                feedback: null,
                error: null
            };
            const state = playersReducer(currentState, addCommentToPlayerSuccess());
            expect(state).toEqual(initialState);
        });
    });

    describe('addCommentToPlayerError', function() {
        it('Should set error', function() {
            const state = playersReducer(initialState, addCommentToPlayerError(mockData.error));
            expect(state).toEqual({
                players: [],
                userPlayers: [],
                currentPlayer: null,
                loading: false,
                feedback: null,
                error: mockData.error.message
            });
        });
    });

    describe('removeCommentFromPlayerRequest', function() {
        it('Should make request', function() {
            const state = playersReducer(initialState, removeCommentFromPlayerRequest());
            expect(state).toEqual({
                players: [],
                userPlayers: [],
                currentPlayer: null,
                loading: true,
                feedback: null,
                error: null
            });
        });
    });

    describe('removeCommentFromPlayerSuccess', function() {
        it('Should reset loading', function() {
            const currentState = {
                players: [],
                userPlayers: [],
                currentPlayer: null,
                loading: true,
                feedback: null,
                error: null
            };
            const state = playersReducer(currentState, removeCommentFromPlayerSuccess());
            expect(state).toEqual(initialState);
        });
    });

    describe('removeCommentFromPlayerError', function() {
        it('Should set error', function() {
            const state = playersReducer(initialState, removeCommentFromPlayerError(mockData.error));
            expect(state).toEqual({
                players: [],
                userPlayers: [],
                currentPlayer: null,
                loading: false,
                feedback: null,
                error: mockData.error.message
            });
        });
    });

    describe('createPlayerRequest', function() {
        it('Should make request', function() {
            const state = playersReducer(initialState, createPlayerRequest());
            expect(state).toEqual({
                players: [],
                userPlayers: [],
                currentPlayer: null,
                loading: true,
                feedback: null,
                error: null
            });
        });
    });

    describe('createPlayerSuccess', function() {
        it('Should set feedback', function() {
            const state = playersReducer(initialState, createPlayerSuccess());
            expect(state).toEqual({
                players: [],
                userPlayers: [],
                currentPlayer: null,
                loading: false,
                feedback: { success: true, message: 'Player created!'},
                error: null
            });
        });
    });

    describe('createPlayerError', function() {
        it('Should set error & feedback', function() {
            const state = playersReducer(initialState, createPlayerError(mockData.error));
            expect(state).toEqual({
                players: [],
                userPlayers: [],
                currentPlayer: null,
                loading: false,
                feedback: { success: false, message: mockData.error.message},
                error: mockData.error.message
            });
        });
    });

    describe('editPlayerRequest', function() {
        it('Should make request', function() {
            const state = playersReducer(initialState, editPlayerRequest());
            expect(state).toEqual({
                players: [],
                userPlayers: [],
                currentPlayer: null,
                loading: true,
                feedback: null,
                error: null
            });
        });
    });

    describe('editPlayerSuccess', function() {
        it('Should set feedback', function() {
            const state = playersReducer(initialState, editPlayerSuccess());
            expect(state).toEqual({
                players: [],
                userPlayers: [],
                currentPlayer: null,
                loading: false,
                feedback: { success: true, message: 'Player edited!'},
                error: null
            });
        });
    });

    describe('editPlayerError', function() {
        it('Should set error & feedback', function() {
            const state = playersReducer(initialState, editPlayerError(mockData.error));
            expect(state).toEqual({
                players: [],
                userPlayers: [],
                currentPlayer: null,
                loading: false,
                feedback: { success: false, message: mockData.error.message},
                error: mockData.error.message
            });
        });
    });
});