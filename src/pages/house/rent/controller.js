import {mapActions, mapState} from 'vuex';
import * as $ajax from '../../../ajax';

export const states = {
    ...mapState({
        isLoading: state => state.HOUSE.isLoading,
        isSuccess: state => state.HOUSE.isSuccess,
        isFailure: state => state.HOUSE.isFailure,
        isHouse: state => state.HOUSE.isData
    })
};

export const actions = {
    ...mapActions([
        'ajaxSelectHouse',
        'selectHouseReplace'
    ]),
    onHandleModalClose() {
        this.tabIndex = -1;
        this.isScroll = true;
    },
    onHandleChange(index) {
        const {tabIndex} = this;
        this.isScroll = tabIndex === index ? true : false;
        this.tabIndex = tabIndex === index ? -1 : index;
    },
    onHandleBtnItems(item, index) {
        const {type, items, activeIndex} = item;
        switch (type) {
            case '方式':
                this.btnItems1.activeIndex = activeIndex === index ? -1 : index;
                this.btnItems1.value = activeIndex === index ? null : items[index]['value'];
                break;
            case '户型':
                this.btnItems2.activeIndex = activeIndex === index ? -1 : index;
                this.btnItems2.value = activeIndex === index ? null : items[index]['value'];
                break;
            case '装修':
                this.btnItems3.activeIndex = activeIndex === index ? -1 : index;
                this.btnItems3.value = activeIndex === index ? null : items[index]['value'];
                break;
            case '朝向':
                this.btnItems4.activeIndex = activeIndex === index ? -1 : index;
                this.btnItems4.value = activeIndex === index ? null : items[index]['value'];
                break;
            case '楼层':
                this.btnItems5.activeIndex = activeIndex === index ? -1 : index;
                this.btnItems5.value = activeIndex === index ? null : items[index]['value'];
                break;
            case '价格':
                this.btnItems6.activeIndex = activeIndex === index ? -1 : index;
                this.btnItems6.value = activeIndex === index ? null : [items[index]['value']];
                break;
            case '面积':
                this.btnItems7.activeIndex = activeIndex === index ? -1 : index;
                this.btnItems7.value = activeIndex === index ? null : [items[index]['value']];
                break;
            case '排序':
                this.btnItems8.activeIndex = activeIndex === index ? -1 : index;
                this.btnItems8.value = activeIndex === index ? null : items[index]['value'];
                this.onHandleAjaxRequest();
                break;
        }
    },
    onHandleReset() {
        const {tabIndex} = this;
        switch (tabIndex) {
            case 0:
                break;
            case 1:
                this.btnItems1.value = null;
                this.btnItems1.activeIndex = -1;
                this.btnItems2.value = null;
                this.btnItems2.activeIndex = -1;
                this.btnItems3.value = null;
                this.btnItems3.activeIndex = -1;
                this.btnItems4.value = null;
                this.btnItems4.activeIndex = -1;
                this.btnItems5.value = null;
                this.btnItems5.activeIndex = -1;
                this.btnItems6.value = null;
                this.btnItems6.activeIndex = -1;
                this.btnItems7.value = null;
                this.btnItems7.activeIndex = -1;
                break;
        }
    },
    onHandleConfirm() {
        const {tabIndex} = this;
        switch (tabIndex) {
            case 0:
                break;
            case 1:
                this.onHandleAjaxRequest();
                break;
        }
    },
    onHandleAjaxRequest() {
        this.pageIndex = 1;
        this.onHandleModalClose();
        this.selectHouseReplace();
        this.exeAjaxSelectHouse();
    },
    onHandleRangeChange() {
    },
    onHandleScrollToLower() {
        $ajax.abort();
        const {rows, totalCount, pageIndex} = this.isHouse;
        if (rows.length < totalCount) {
            this.pageIndex = pageIndex + 1;
            this.exeAjaxSelectHouse();
        }
    },
    exeAjaxSelectHouse() {
        const params = this.getParams();
        this.ajaxSelectHouse(params)
            .then((res) => {
                res = res || {};
                const {success} = res;
                if (!success) {
                    const {rows} = this.isHouse;
                    if (rows.length) {
                        this.showToast('加载失败，请重试');
                    }
                }
                console.log(res);
            })
            .catch((err) => {
                const {rows} = this.isHouse;
                if (rows.length) {
                    this.showToast('网络异常，请重试');
                }
                console.log(err);
            })
    },
    onRefresh() {
        this.exeAjaxSelectHouse();
    },
    getParams() {
        const {pageIndex, pageSize, type} = this;
        let params = {
            pageIndex,
            pageSize,
            type
        }
        const leaseWay = this.btnItems1.value;
        if (leaseWay) {
            params = {
                ...params,
                leaseWay
            };
        }
        const apart = this.btnItems2.value;
        if (apart) {
            params = {
                ...params,
                apart
            };
        }
        const renovation = this.btnItems3.value;
        if (renovation) {
            params = {
                ...params,
                renovation
            };
        }
        const direction = this.btnItems4.value;
        if (direction) {
            params = {
                ...params,
                direction
            };
        }
        const floors = this.btnItems5.value;
        if (floors) {
            params = {
                ...params,
                floors
            };
        }
        const priceScopes = this.btnItems6.value;
        if (priceScopes) {
            params = {
                ...params,
                priceScopes
            };
        }
        const areaScopes = this.btnItems7.value;
        if (areaScopes) {
            params = {
                ...params,
                areaScopes
            };
        }
        const sort = this.btnItems8.value;
        if (sort) {
            params = {
                ...params,
                ...sort
            };
        }
        return params;
    }
};
