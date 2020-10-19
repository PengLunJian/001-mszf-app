import apis from '../apis';
import * as $ajax from '../ajax';
import * as utils from '../utils';
import * as actionTypes from './actionTypes';

/**
 *
 * @param commit
 * @param params
 * @returns {Promise<any>}
 */
export const ajaxSelectHouse = ({commit}, params) => {
    commit(actionTypes.SELECT_HOUSE_REQUEST);
    return new Promise((resolve, reject) => {
        $ajax.post(apis.selectHouse, params)
            .then((res) => {
                res = res || {};
                const {data, success} = res;
                if (success) {
                    commit(actionTypes.SELECT_HOUSE_SUCCESS, data);
                } else {
                    commit(actionTypes.SELECT_HOUSE_FAILURE);
                }
                resolve(res);
            })
            .catch((err) => {
                commit(actionTypes.SELECT_HOUSE_FAILURE);
                reject(err);
            });
    });
};
/**
 *
 * @param commit
 * @param params
 * @returns {Promise<any>}
 */
export const ajaxSelectIndex = ({commit}, params) => {
    commit(actionTypes.SELECT_INDEX_REQUEST);
    return new Promise((resolve, reject) => {
        $ajax.post(apis.selectIndex, params)
            .then((res) => {
                res = res || {};
                const {data, success} = res;
                if (success) {
                    commit(actionTypes.SELECT_INDEX_SUCCESS, data);
                } else {
                    commit(actionTypes.SELECT_INDEX_FAILURE);
                }
                resolve(res);
            })
            .catch((err) => {
                commit(actionTypes.SELECT_INDEX_FAILURE);
                reject(err);
            });
    });
};
/**
 *
 * @param commit
 */
export const selectHouseReplace = ({commit}) => {
    commit(actionTypes.SELECT_HOUSE_REPLACE);
}