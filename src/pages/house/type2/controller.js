import {mapActions, mapState} from 'vuex';
import * as $ajax from '../../../ajax';

export const states = {
    ...mapState({
        isLoading: state => state.HOUSE.isLoading,
        isSuccess: state => state.HOUSE.isSuccess,
        isFailure: state => state.HOUSE.isFailure,
        isHouse: state => state.HOUSE.isData,
        isCitys: state => state.CITYS.isCity,
        isAreas: state => state.AREAS.isData
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
            case '区域':
                this.btnItems0.activeIndex = activeIndex === index ? -1 : index;
                this.btnItems0.value = activeIndex === index ? null : items[index];
                break;
            case '户型':
                this.btnItems1.activeIndex = activeIndex === index ? -1 : index;
                this.btnItems1.value = activeIndex === index ? null : items[index]['value'];
                break;
            case '装修':
                this.btnItems2.activeIndex = activeIndex === index ? -1 : index;
                this.btnItems2.value = activeIndex === index ? null : items[index]['value'];
                break;
            case '朝向':
                this.btnItems3.activeIndex = activeIndex === index ? -1 : index;
                this.btnItems3.value = activeIndex === index ? null : items[index]['value'];
                break;
            case '楼层':
                this.btnItems4.activeIndex = activeIndex === index ? -1 : index;
                this.btnItems4.value = activeIndex === index ? null : items[index]['value'];
                break;
            case '价格':
                this.maxPrice = '不限';
                this.priceValue = [0, 10000];
                this.btnItems5.activeIndex = activeIndex === index ? -1 : index;
                this.btnItems5.value = activeIndex === index ? null : [items[index]['value']];
                break;
            case '面积':
                this.maxAreas = '不限';
                this.areasValue = [0, 500];
                this.btnItems6.activeIndex = activeIndex === index ? -1 : index;
                this.btnItems6.value = activeIndex === index ? null : [items[index]['value']];
                break;
            case '排序':
                this.btnItems7.activeIndex = activeIndex === index ? -1 : index;
                this.btnItems7.value = activeIndex === index ? null : items[index]['value'];
                this.onHandleSelectHouse();
                break;
        }
    },
    onHandleReset() {
        const {tabIndex} = this;
        switch (tabIndex) {
            case 0:
                this.btnItems0.value = null;
                this.btnItems0.activeIndex = -1;
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
                this.maxAreas = '不限';
                this.areasValue = [0, 500];
                this.maxPrice = '不限';
                this.priceValue = [0, 10000];
                break;
        }
    },
    onHandleConfirm() {
        this.onHandleSelectHouse();
    },
    onHandleSelectHouse() {
        this.pageIndex = 1;
        this.onHandleModalClose();
        this.selectHouseReplace();
        this.exeAjaxSelectHouse();
    },
    onHandleChangePrice(e) {
        let maxLabel = '';
        const {minValue, maxValue} = e;
        const minPrice = parseInt(minValue);
        const maxPrice = parseInt(maxValue);
        if (!minPrice) {
            if (maxPrice >= 1000) {
                maxLabel = '不限';
                this.btnItems6.value = null;
            } else {
                maxLabel = maxPrice + '万元以下';
                this.btnItems6.value = [{minPrice: 0, maxPrice}];
            }
        } else {
            if (maxPrice >= 1000) {
                maxLabel = minPrice + '万元以上';
                this.btnItems6.value = [{minPrice, maxPrice: 100000000}];
            } else {
                maxLabel = minPrice + '-' + maxPrice + '万元';
                this.btnItems6.value = [{minPrice, maxPrice}];
            }
        }
        this.priceValue = [minPrice, maxPrice];
        this.btnItems6.activeIndex = -1;
        this.maxPrice = maxLabel;
    },
    onHandleChangeAreas(e) {
        let maxLabel = '';
        const {minValue, maxValue} = e;
        const minAreas = parseInt(minValue);
        const maxAreas = parseInt(maxValue);
        if (!minAreas) {
            if (maxAreas >= 500) {
                maxLabel = '不限';
                this.btnItems7.value = null;
            } else {
                maxLabel = maxAreas + 'm²以下';
                this.btnItems7.value = [{minArea: 0, maxArea: maxAreas}];
            }
        } else {
            if (maxAreas >= 500) {
                maxLabel = minAreas + 'm²以上';
                this.btnItems7.value = [{minArea: minAreas, maxArea: 100000000}];
            } else {
                maxLabel = minAreas + '-' + maxAreas + 'm²';
                this.btnItems7.value = [{minArea: minAreas, maxArea: maxAreas}];
            }
        }
        this.areasValue = [minAreas, maxAreas];
        this.btnItems7.activeIndex = -1;
        this.maxAreas = maxLabel;
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
        const {pageIndex, pageSize, type, isCitys} = this;
        const city = isCitys.fullname;
        let params = {
            pageIndex,
            pageSize,
            type,
            city
        }
        const areaValue = this.btnItems0.value;
        if (areaValue) {
            const {fullname} = areaValue;
            const area = fullname === '广德市' ? '广德县' : fullname;
            params = {
                ...params,
                area
            };
        }
        const apart = this.btnItems1.value;
        if (apart) {
            params = {
                ...params,
                apart
            };
        }
        const renovation = this.btnItems2.value;
        if (renovation) {
            params = {
                ...params,
                renovation
            };
        }
        const direction = this.btnItems3.value;
        if (direction) {
            params = {
                ...params,
                direction
            };
        }
        const floors = this.btnItems4.value;
        if (floors) {
            params = {
                ...params,
                floors
            };
        }
        const totalPriceScopes = this.btnItems5.value;
        if (totalPriceScopes) {
            params = {
                ...params,
                totalPriceScopes
            };
        }
        const areaScopes = this.btnItems6.value;
        if (areaScopes) {
            params = {
                ...params,
                areaScopes
            };
        }
        const sort = this.btnItems7.value;
        if (sort) {
            params = {
                ...params,
                ...sort
            };
        }
        return params;
    }
};
