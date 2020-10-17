import {mapActions, mapState} from 'vuex';

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
        'ajaxSelectHouse'
    ]),
    onHandleClose() {
        this.tabIndex = -1;
        this.isScroll = true;
    },
    onHandleChange(index) {
        const {tabIndex} = this;
        this.isScroll = tabIndex === index ? true : false;
        this.tabIndex = tabIndex === index ? -1 : index;
    },
    onHandleBtnItems(item, index) {
        const {type, activeIndex} = item;
        switch (type) {
            case '方式':
                this.btnItems1.activeIndex = activeIndex === index ? -1 : index;
                break;
            case '户型':
                this.btnItems2.activeIndex = activeIndex === index ? -1 : index;
                break;
            case '装修':
                this.btnItems3.activeIndex = activeIndex === index ? -1 : index;
                break;
            case '朝向':
                this.btnItems4.activeIndex = activeIndex === index ? -1 : index;
                break;
            case '楼层':
                this.btnItems5.activeIndex = activeIndex === index ? -1 : index;
                break;
            case '价格':
                this.btnItems6.activeIndex = activeIndex === index ? -1 : index;
                break;
            case '面积':
                this.btnItems7.activeIndex = activeIndex === index ? -1 : index;
                break;
            case '排序':
                this.btnItems8.activeIndex = activeIndex === index ? -1 : index;
                break;
        }
    },
    onHandleReset() {
        const {tabIndex} = this;
        switch (tabIndex) {
            case 0:
                break;
            case 1:
                this.btnItems1.activeIndex = -1;
                this.btnItems2.activeIndex = -1;
                this.btnItems3.activeIndex = -1;
                this.btnItems4.activeIndex = -1;
                this.btnItems5.activeIndex = -1;
                this.btnItems6.activeIndex = -1;
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
                break;
        }
    }
};
