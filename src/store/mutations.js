import * as utils from '../utils';

/**
 *
 * @param state
 * @constructor
 */
export const SELECT_HOUSE_REQUEST = (state) => {
    state.HOUSE.isLoading = true;
    state.HOUSE.isSuccess = false;
    state.HOUSE.isFailure = false;
};
/**
 *
 * @param state
 * @param data
 * @constructor
 */
export const SELECT_HOUSE_SUCCESS = (state, data) => {
    state.HOUSE.isLoading = false;
    state.HOUSE.isSuccess = true;
    state.HOUSE.isFailure = false;
    const oldRows = state.HOUSE.isData.rows;
    const newRows = data.rows || [];
    const rows = oldRows.concat(newRows);
    state.HOUSE.isData = {...data, rows};
};
/**
 *
 * @param state
 * @constructor
 */
export const SELECT_HOUSE_FAILURE = (state) => {
    state.HOUSE.isLoading = false;
    state.HOUSE.isSuccess = false;
    state.HOUSE.isFailure = true;
};

export const SELECT_HOUSE_REPLACE = (state) => {
    state.HOUSE.isLoading = false;
    state.HOUSE.isSuccess = false;
    state.HOUSE.isFailure = false;
    state.HOUSE.isData = {
        rows: [],
        pageIndex: 1,
        totalCount: 0
    };
};