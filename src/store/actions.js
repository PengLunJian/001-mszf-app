import apis from '../apis';
import * as $ajax from '../ajax';
import * as utils from '../utils';
import * as actionTypes from './actionTypes';

/**
 *
 * @param commit
 * @returns {Promise<any>}
 */
export const ajaxSelectLogin = ({commit}, params) => {
  commit(actionTypes.SELECT_LOGIN_REQUEST);
  return new Promise((resolve, reject) => {
    $ajax.post(apis.selectLogin, params)
      .then((res) => {
        res = res || {};
        const {data, success} = res;
        if (success) {
          commit(actionTypes.SELECT_LOGIN_SUCCESS, data);
        } else {
          commit(actionTypes.SELECT_LOGIN_FAILURE);
        }
        resolve(res);
      })
      .catch((err) => {
        commit(actionTypes.SELECT_LOGIN_FAILURE);
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
export const ajaxSelectHouse = ({commit}, params) => {
  commit(actionTypes.SELECT_ORDER_REQUEST);
  return new Promise((resolve, reject) => {
    $ajax.post(apis.selectOrder, params)
      .then((res) => {
        res = res || {};
        const {data, success} = res;
        if (success) {
          commit(actionTypes.SELECT_ORDER_SUCCESS, data);
        } else {
          commit(actionTypes.SELECT_ORDER_FAILURE);
        }
        resolve(res);
      })
      .catch((err) => {
        commit(actionTypes.SELECT_ORDER_FAILURE);
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
export const ajaxSelectDetail = ({commit}, params) => {
  commit(actionTypes.SELECT_DETAIL_REQUEST);
  return new Promise((resolve, reject) => {
    $ajax.post(apis.selectDetail, params)
      .then((res) => {
        res = res || {};
        const {data, success} = res;
        if (success) {
          commit(actionTypes.SELECT_DETAIL_SUCCESS, data);
        } else {
          commit(actionTypes.SELECT_DETAIL_FAILURE);
        }
        resolve(res);
      })
      .catch((err) => {
        commit(actionTypes.SELECT_DETAIL_FAILURE);
        reject(err);
      });
  });
};
/**
 *
 * @returns {Promise<any>}
 */
const ajaxSelectRecom = () => {
  return $ajax.post(apis.selectRecom);
}
/**
 *
 * @returns {Promise<any>}
 */
const ajaxSelectChart = () => {
  return $ajax.post(apis.selectChart);
}
/**
 *
 * @returns {Promise<any>}
 */
const ajaxSelectTotal = (params) => {
  const date = utils.dateFormat(new Date(), 'yyyy-mm-dd');
  const begindate = params ? params.begindate : date + ' 00:00:00';
  const enddate = params ? params.enddate : date + ' 23:59:59';
  const data = {
    begindate,
    enddate
  };
  return $ajax.post(apis.selectTotal, data);
}
/**
 *
 * @param commit
 * @returns {Promise<any>}
 */
export const ajaxSelectIndex = ({commit}) => {
  commit(actionTypes.SELECT_INDEX_REQUEST);
  return new Promise((resolve, reject) => {
    $ajax.all([
      ajaxSelectTotal(),
      ajaxSelectChart(),
      ajaxSelectRecom()
    ])
      .then((res) => {
        res = res || {};
        const success = res[0].success
          && res[1].success
          && res[2].success;
        if (success) {
          commit(actionTypes.SELECT_INDEX_SUCCESS, res);
        } else {
          commit(actionTypes.SELECT_INDEX_FAILURE);
        }
        resolve(res);
      })
      .catch((err) => {
        commit(actionTypes.SELECT_INDEX_FAILURE);
        reject(err);
      })
  });
}
/**
 *
 * @returns {Promise<any>}
 */
const ajaxSelectTable = (params) => {
  return $ajax.post(apis.selectBill, params);
}
/**
 *
 * @param commit
 * @returns {Promise<any>}
 */
export const ajaxSelectBill = ({commit}, params) => {
  commit(actionTypes.SELECT_BILL_REQUEST);
  return new Promise((resolve, reject) => {
    $ajax.all([
      ajaxSelectTotal(params),
      ajaxSelectTable(params),
    ])
      .then((res) => {
        res = res || {};
        const success = res[0].success && res[1].success;
        if (success) {
          commit(actionTypes.SELECT_BILL_SUCCESS, res);
        } else {
          commit(actionTypes.SELECT_BILL_FAILURE);
        }
        resolve(res);
      })
      .catch((err) => {
        commit(actionTypes.SELECT_BILL_FAILURE);
        reject(err);
      })
  });
}