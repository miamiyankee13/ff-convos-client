import { API_BASE_URL } from '../../config';
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
    EDIT_PLAYER_ERROR,
    fetchPlayers,
    fetchPlayersRequest,
    fetchPlayersSuccess,
    fetchPlayersError,
    fetchUserPlayers,
    fetchUserPlayersRequest,
    fetchUserPlayersSuccess,
    fetchUserPlayersError,
    fetchUserPlayersByPosition,
    fetchUserPlayersByPositionRequest,
    fetchUserPlayersByPositionSuccess,
    fetchUserPlayersByPositionError,
    fetchCurrentPlayer,
    fetchCurrentPlayerRequest,
    fetchCurrentPlayerSuccess,
    fetchCurrentPlayerError,
    clearCurrentPlayer,
    addPlayerToUser,
    addPlayerToUserRequest,
    addPlayerToUserSuccess,
    addPlayerToUserError,
    removePlayerFromUser,
    removePlayerFromUserRequest,
    removePlayerFromUserSuccess,
    removePlayerFromUserError,
    addCommentToPlayer,
    addCommentToPlayerRequest,
    addCommentToPlayerSuccess,
    addCommentToPlayerError,
    removeCommentFromPlayer,
    removeCommentFromPlayerRequest,
    removeCommentFromPlayerSuccess,
    removeCommentFromPlayerError,
    createPlayer,
    createPlayerRequest,
    createPlayerSuccess,
    createPlayerError,
    editPlayer,
    editPlayerRequest,
    editPlayerSuccess,
    editPlayerError
} from '../players';

describe('fetchPlayersRequest', function() {
    it('Should return the action', function() {
        const action = fetchPlayersRequest();
        expect(action.type).toEqual(FETCH_PLAYERS_REQUEST);
    });
});

describe('fetchPlayersSuccess', function() {
    it('Should return the action', function() {
        const players = ['Dan Marino', 'Ricky Williams']
        const action = fetchPlayersSuccess(players);
        expect(action.type).toEqual(FETCH_PLAYERS_SUCCESS);
        expect(action.data).toEqual(players);
    });
});

describe('fetchPlayersError', function() {
    it('Should return the action', function() {
        const error = 'Bad request';
        const action = fetchPlayersError(error);
        expect(action.type).toEqual(FETCH_PLAYERS_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('fetchUserPlayersRequest', function() {
    it('Should return the action', function() {
        const action = fetchUserPlayersRequest();
        expect(action.type).toEqual(FETCH_USER_PLAYERS_REQUEST);
    });
});

describe('fetchUserPlayersSuccess', function() {
    it('Should return the action', function() {
        const players = ['Dan Marino', 'Ricky Williams']
        const action = fetchUserPlayersSuccess(players);
        expect(action.type).toEqual(FETCH_USER_PLAYERS_SUCCESS);
        expect(action.data).toEqual(players);
    });
});

describe('fetchUserPlayersError', function() {
    it('Should return the action', function() {
        const error = 'Bad request';
        const action = fetchUserPlayersError(error);
        expect(action.type).toEqual(FETCH_USER_PLAYERS_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('fetchUserPlayersByPositionRequest', function() {
    it('Should return the action', function() {
        const action = fetchUserPlayersByPositionRequest();
        expect(action.type).toEqual(FETCH_USER_PLAYERS_BY_POSITION_REQUEST);
    });
});

describe('fetchUserPlayersByPositionSuccess', function() {
    it('Should return the action', function() {
        const players = ['Dan Marino', 'Ricky Williams']
        const action = fetchUserPlayersByPositionSuccess(players);
        expect(action.type).toEqual(FETCH_USER_PLAYERS_BY_POSITION_SUCCESS);
        expect(action.data).toEqual(players);
    });
});

describe('fetchUserPlayersByPositionError', function() {
    it('Should return the action', function() {
        const error = 'Bad request';
        const action = fetchUserPlayersByPositionError(error);
        expect(action.type).toEqual(FETCH_USER_PLAYERS_BY_POSITION_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('fetchCurrentPlayerRequest', function() {
    it('Should return the action', function() {
        const action = fetchCurrentPlayerRequest();
        expect(action.type).toEqual(FETCH_CURRENT_PLAYER_REQUEST);
    });
});

describe('fetchCurrentPlayerSuccess', function() {
    it('Should return the action', function() {
        const player = { name: 'Dan Marino' }
        const action = fetchCurrentPlayerSuccess(player);
        expect(action.type).toEqual(FETCH_CURRENT_PLAYER_SUCCESS);
        expect(action.data).toEqual(player)
    });
});

describe('fetchCurrentPlayerError', function() {
    it('Should return the action', function() {
        const error = 'Bad request';
        const action = fetchCurrentPlayerError(error);
        expect(action.type).toEqual(FETCH_CURRENT_PLAYER_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('clearCurrentPlayer', function() {
    it('Should return the action', function() {
        const action = clearCurrentPlayer();
        expect(action.type).toEqual(CLEAR_CURRENT_PLAYER);
    });
});

describe('addPlayerToUserRequest', function() {
    it('Should return the action', function() {
        const action = addPlayerToUserRequest();
        expect(action.type).toEqual(ADD_PLAYER_TO_USER_REQUEST);
    });
});

describe('addPlayerToUserSuccess', function() {
    it('Should return the action', function() {
        const action = addPlayerToUserSuccess();
        expect(action.type).toEqual(ADD_PLAYER_TO_USER_SUCCESS);
    });
});

describe('addPlayerToUserError', function() {
    it('Should return the action', function() {
        const error = 'Bad request';
        const action = addPlayerToUserError(error);
        expect(action.type).toEqual(ADD_PLAYER_TO_USER_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('removePlayerFromUserRequest', function() {
    it('Should return the action', function() {
        const action = removePlayerFromUserRequest();
        expect(action.type).toEqual(REMOVE_PLAYER_FROM_USER_REQUEST);
    });
});

describe('removePlayerFromUserSuccess', function() {
    it('Should return the action', function() {
        const action = removePlayerFromUserSuccess();
        expect(action.type).toEqual(REMOVE_PLAYER_FROM_USER_SUCCESS);
    });
});

describe('removePlayerFromUserError', function() {
    it('Should return the action', function() {
        const error = 'Bad request';
        const action = removePlayerFromUserError(error);
        expect(action.type).toEqual(REMOVE_PLAYER_FROM_USER_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('addCommentToPlayerRequest', function() {
    it('Should return the action', function() {
        const action = addCommentToPlayerRequest();
        expect(action.type).toEqual(ADD_COMMENT_TO_PLAYER_REQUEST);
    });
});

describe('addCommentToPlayerSuccess', function() {
    it('Should return the action', function() {
        const action = addCommentToPlayerSuccess();
        expect(action.type).toEqual(ADD_COMMENT_TO_PLAYER_SUCCESS);
    });
});

describe('addCommentToPlayerError', function() {
    it('Should return the action', function() {
        const error = 'Bad request'
        const action = addCommentToPlayerError(error);
        expect(action.type).toEqual(ADD_COMMENT_TO_PLAYER_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('removeCommentFromPlayerRequest', function() {
    it('Should return the action', function() {
        const action = removeCommentFromPlayerRequest();
        expect(action.type).toEqual(REMOVE_COMMENT_FROM_PLAYER_REQUEST);
    });
});

describe('removeCommentFromPlayerSuccess', function() {
    it('Should return the action', function() {
        const action = removeCommentFromPlayerSuccess();
        expect(action.type).toEqual(REMOVE_COMMENT_FROM_PLAYER_SUCCESS);
    });
});

describe('removeCommentFromPlayerError', function() {
    it('Should return the action', function() {
        const error = 'Bad request'
        const action = removeCommentFromPlayerError(error);
        expect(action.type).toEqual(REMOVE_COMMENT_FROM_PLAYER_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('createPlayerRequest', function() {
    it('Should return the action', function() {
        const action = createPlayerRequest();
        expect(action.type).toEqual(CREATE_PLAYER_REQUEST);
    });
});

describe('createPlayerSuccess', function() {
    it('Should return the action', function() {
        const action = createPlayerSuccess();
        expect(action.type).toEqual(CREATE_PLAYER_SUCCESS);
    });
});

describe('createPlayerError', function() {
    it('Should return the action', function() {
        const error = 'Bad request'
        const action = createPlayerError(error);
        expect(action.type).toEqual(CREATE_PLAYER_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('editPlayerRequest', function() {
    it('Should return the action', function() {
        const action = editPlayerRequest();
        expect(action.type).toEqual(EDIT_PLAYER_REQUEST);
    });
});

describe('editPlayerSuccess', function() {
    it('Should return the action', function() {
        const action = editPlayerSuccess();
        expect(action.type).toEqual(EDIT_PLAYER_SUCCESS);
    });
});

describe('editPlayerError', function() {
    it('Should return the action', function() {
        const error = 'Bad request'
        const action = editPlayerError(error);
        expect(action.type).toEqual(EDIT_PLAYER_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('Async actions', function() {

    describe('fetchPlayers', function() {
        it('Should dispatch request & success actions', function() {
            const data = {
                players: []
            }

            global.fetch = jest.fn().mockImplementation(() =>
                Promise.resolve({
                    ok: true,
                    json() {
                        return data;
                    }
                })
            );

            const dispatch = jest.fn();

            return fetchPlayers()(dispatch).then(function() {
                expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/players`, {
                    method: 'GET'
                });
                expect(dispatch).toHaveBeenCalledWith(fetchPlayersRequest());
                expect(dispatch).toHaveBeenCalledWith(fetchPlayersSuccess(data));
            });
        });
    });

    describe('fetchUserPlayers', function() {
        it('Should dispatch request & success actions', function() {
            const data = {
                players: []
            }

            global.fetch = jest.fn().mockImplementation(() => 
                Promise.resolve({
                    ok: true,
                    json() {
                        return data;
                    }
                })
            );

            const dispatch = jest.fn()
            const getState = () => ({ auth: { authToken: 'adajeh1312'}} );
            const authToken = getState().auth.authToken;

            return fetchUserPlayers()(dispatch, getState).then(function() {
                expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/users/players`, {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${authToken}`
                        }
                    });
                expect(dispatch).toHaveBeenCalledWith(fetchUserPlayersRequest());
                expect(dispatch).toHaveBeenCalledWith(fetchUserPlayersSuccess(data));
            });
        });
    });

    describe('fetchUserPlayersByPosition', function() {
        it('Should dispatch request & success actions', function() {
            const data = {
                players: []
            }

            global.fetch = jest.fn().mockImplementation(() => 
                Promise.resolve({
                    ok: true,
                    json() {
                        return data;
                    }
                })
            );

            const dispatch = jest.fn()
            const getState = () => ({ auth: { authToken: 'adajeh1312'}} );
            const authToken = getState().auth.authToken;
            const position = 'QB'

            return fetchUserPlayersByPosition(position)(dispatch, getState).then(function() {
                expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/users/players/${position}`, {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${authToken}`
                        }
                    });
                expect(dispatch).toHaveBeenCalledWith(fetchUserPlayersByPositionRequest());
                expect(dispatch).toHaveBeenCalledWith(fetchUserPlayersByPositionSuccess(data));
            });
        });
    });

    describe('fetchCurrentPlayer', function() {
        it('Should dispatch request & success actions', function() {
            const data = {
                player: {}
            }

            global.fetch = jest.fn().mockImplementation(() => 
                Promise.resolve({
                    ok: true,
                    json() {
                        return data;
                    }
                })
            );

            const dispatch = jest.fn();
            const id = '2414325251'
            return fetchCurrentPlayer(id)(dispatch).then(function() {
                expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/players/${id}`, {
                    method: 'GET'
                });
                expect(dispatch).toHaveBeenCalledWith(fetchCurrentPlayerRequest());
                expect(dispatch).toHaveBeenCalledWith(fetchCurrentPlayerSuccess(data)); 
            });
        });
    });

    describe('addPlayerToUser', function() {
        it('Should dispatch request & success actions', function() {
            const data = {
                message: ''
            }

            global.fetch = jest.fn().mockImplementation(() => 
                Promise.resolve({
                    ok: true,
                    json() {
                        return data;
                    }
                })
            );

            const dispatch = jest.fn()
            const getState = () => ({ auth: { authToken: 'adajeh1312'}} );
            const authToken = getState().auth.authToken;
            const id = '2414325251';

            return addPlayerToUser(id)(dispatch, getState).then(function() {
                expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/users/players/${id}`, {
                    method: 'PUT',
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    }
                });
                expect(dispatch).toHaveBeenCalledWith(addPlayerToUserRequest());
                expect(dispatch).toHaveBeenCalledWith(addPlayerToUserSuccess());
            });
        });
    });

    describe('removePlayerFromUser', function() {
        it('Should dispatch request & success actions', function() {
            const data = {
                message: ''
            }

            global.fetch = jest.fn().mockImplementation(() => 
                Promise.resolve({
                    ok: true,
                    json() {
                        return data;
                    }
                })
            );

            const dispatch = jest.fn()
            const getState = () => ({ auth: { authToken: 'adajeh1312'}} );
            const authToken = getState().auth.authToken;
            const id = '2414325251';

            return removePlayerFromUser(id)(dispatch, getState).then(function() {
                expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/users/players/${id}`, {
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    }
                });
                expect(dispatch).toHaveBeenCalledWith(removePlayerFromUserRequest());
                expect(dispatch).toHaveBeenCalledWith(removePlayerFromUserSuccess());
            });
        });
    });

    describe('addCommentToPlayer', function() {
        it('Should dispatch request & success actions', function() {
            const data = {
                message: ''
            }
            
            global.fetch = jest.fn().mockImplementation(() => 
                Promise.resolve({
                    ok: true,
                    json() {
                        return data;
                    }
                })
            );

            const dispatch = jest.fn()
            const getState = () => ({ auth: { authToken: 'adajeh1312'}} );
            const authToken = getState().auth.authToken;
            const id = '2414325251';
            const content = 'content';
            const author = 'author';

            return addCommentToPlayer(id, content, author)(dispatch, getState).then(function() {
                expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/players/${id}`, {
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
                });
                expect(dispatch).toHaveBeenCalledWith(addCommentToPlayerRequest());
                expect(dispatch).toHaveBeenCalledWith(addCommentToPlayerSuccess());
            });
        });
    });

    describe('removeCommentFromPlayer', function() {
        it('Should dispatch request & success actions', function() {
            const data = {
                message: ''
            }
            
            global.fetch = jest.fn().mockImplementation(() => 
                Promise.resolve({
                    ok: true,
                    json() {
                        return data;
                    }
                })
            );

            const dispatch = jest.fn()
            const getState = () => ({ auth: { authToken: 'adajeh1312'}} );
            const authToken = getState().auth.authToken;
            const id = '2414325251';
            const commentId = '679284924'

            return removeCommentFromPlayer(id, commentId)(dispatch, getState).then(function() {
                expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/players/${id}/${commentId}`, {
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    }
                });
                expect(dispatch).toHaveBeenCalledWith(removeCommentFromPlayerRequest());
                expect(dispatch).toHaveBeenCalledWith(removeCommentFromPlayerSuccess());
            });
        });
    });

    describe('createPlayer', function() {
        it('Should dispatch request & success actions', function() {
            const data = {
                player: {}
            }

            global.fetch = jest.fn().mockImplementation(() => 
                Promise.resolve({
                    ok: true,
                    json() {
                        return data;
                    }
                })
            );

            const dispatch = jest.fn()
            const getState = () => ({ auth: { authToken: 'adajeh1312'}} );
            const authToken = getState().auth.authToken;
            const name = 'Dan Marino';
            const position = 'QB';
            const number = '13';
            const team = 'Dolphins';
            
            return createPlayer(name, position, number, team)(dispatch, getState).then(function() {
                expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/players`, {
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
                });
                expect(dispatch).toHaveBeenCalledWith(createPlayerRequest());
                expect(dispatch).toHaveBeenCalledWith(createPlayerSuccess());
            });
        });
    });

    describe('editPlayer', function() {
        it('Should dispatch request & success actions', function() {
            const data = {
                player: {}
            }

            global.fetch = jest.fn().mockImplementation(() => 
                Promise.resolve({
                    ok: true,
                    json() {
                        return data;
                    }
                })
            );

            const dispatch = jest.fn()
            const getState = () => ({ auth: { authToken: 'adajeh1312'}} );
            const authToken = getState().auth.authToken;
            const id = '456372832'
            const name = 'Dan Marino';
            const position = 'QB';
            const number = '13';
            const team = 'Dolphins';
            
            return editPlayer(id, name, position, number, team)(dispatch, getState).then(function() {
                expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/api/players/${id}`, {
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
                });
                expect(dispatch).toHaveBeenCalledWith(editPlayerRequest());
                expect(dispatch).toHaveBeenCalledWith(editPlayerSuccess());
            });
        });
    });
});