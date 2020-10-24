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
        'ajaxSelectAreas',
        'ajaxSelectIndex',
        'selectCitysReplace'
    ]),
    onHandleBtnItem(item) {
        if (item.id !== this.isCity.id) {
            this.selectCitysReplace(item);
            this.exeAjaxSelectAreas();
            this.exeAjaxSelectIndex();
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
    exeAjaxSelectAreas() {
        const {id} = this.isCity;
        this.ajaxSelectAreas(id)
            .then((res) => {
                res = res || {};
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    },
    exeAjaxSelectIndex() {
        const params = this.getParams();
        this.ajaxSelectIndex(params)
            .then((res) => {
                res = res || {};
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    },
    onRefresh() {
        this.exeAjaxSelectCitys();
    },
    getParams() {
        const {pageIndex, pageSize, isCity} = this;
        const {fullname} = isCity;
        const params = {
            pageIndex,
            pageSize,
            city: fullname
        };
        return params;
    }
};
