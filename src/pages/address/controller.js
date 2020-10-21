import {mapActions, mapState} from 'vuex';

export const states = {
    ...mapState({
        isLoading: state => state.CITYS.isLoading,
        isSuccess: state => state.CITYS.isSuccess,
        isFailure: state => state.CITYS.isFailure,
        isData: state => state.CITYS.isData,
        isCity: state => state.CITYS.isCity
    })
};

export const actions = {
    ...mapActions([
        'ajaxSelectCitys',
        'selectCitysReplace'
    ]),
    onHandleBtnItem(item) {
        if (item.id !== this.isCity.id) {
            this.selectCitysReplace(item);
        }
        this.navigateBack(1);
    },
    exeAjaxSelectCitys() {
        this.ajaxSelectCitys()
            .then((res) => {
                res = res || {};
                console.log(res);
            })
            .catch((err) => {
                this.showToast('网络异常，请重试');
                console.log(err);
            })
    },
    onRefresh() {
        this.exeAjaxSelectCitys();
    }
};
