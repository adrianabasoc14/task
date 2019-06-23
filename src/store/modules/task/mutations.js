export default {
    setData: (state, data) => {
        state.data = data;
        state.loadingData = false;
    },
    delete: (state) => {
        state.data.pop();
    }
}