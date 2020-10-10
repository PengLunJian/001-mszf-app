import {mapActions, mapState} from 'vuex';

export const states = {
  ...mapState({
    isLoading: state => state.USER.isLoading,
    isSuccess: state => state.USER.isSuccess,
    isFailure: state => state.USER.isFailure,
    isUser: state => state.USER.isData
  }),
};

export const actions = {
  onHandleChange(index) {
    console.log(index);
    this.tabIndex = index;
  }
};