import apis from '../apis';
import * as $ajax from '../ajax';
import * as $config from '../config';
import QQMapWX from 'wx-qqmap-jssdk';
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
};
/**
 *
 * @param commit
 * @param params
 * @returns {Promise<any>}
 */
export const ajaxSelectCitys = ({commit}) => {
    return new Promise((resolve, reject) => {
        commit(actionTypes.SELECT_CITYS_REQUEST);
        const qqmapsdk = new QQMapWX({
            key: $config.DEFAULT_MAPKEY
        });
        qqmapsdk.getCityList({
            success: (res) => {
                res = res || {};
                const {status} = res;
                if (!status) {
                    commit(actionTypes.SELECT_CITYS_SUCCESS, res);
                } else {
                    commit(actionTypes.SELECT_CITYS_FAILURE);
                }
                resolve(res);
            },
            fail: (err) => {
                commit(actionTypes.SELECT_CITYS_FAILURE);
                reject(err);
            }
        });
    });
};
/**
 *
 * @param commit
 * @param params
 * @returns {Promise<any>}
 */
export const ajaxSelectAreas = ({commit}, params) => {
    return new Promise((resolve, reject) => {
        commit(actionTypes.SELECT_AREAS_REQUEST);
        const qqmapsdk = new QQMapWX({
            key: $config.DEFAULT_MAPKEY
        });
        qqmapsdk.getDistrictByCityId({
            id: params,
            success: (res) => {
                res = res || {};
                const {status} = res;
                if (!status) {
                    commit(actionTypes.SELECT_AREAS_SUCCESS, res);
                } else {
                    commit(actionTypes.SELECT_AREAS_FAILURE);
                }
                resolve(res);
            },
            fail: (err) => {
                commit(actionTypes.SELECT_AREAS_FAILURE);
                reject(err);
            }
        });
    });
};
/**
 *
 * @param commit
 * @param data
 */
export const selectCitysReplace = ({commit}, data) => {
    commit(actionTypes.SELECT_CITYS_REPLACE, data);
};