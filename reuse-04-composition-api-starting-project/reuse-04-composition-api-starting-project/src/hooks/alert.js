import {ref} from 'vue';
function userAlert(){
    const alertIsVisible = ref(false);

    function showAlert() {
      alertIsVisible.value = true;
    }
    function hideAlert() {
      alertIsVisible.value = false;
    }
    
    return [
      alertIsVisible,
      showAlert,
      hideAlert
    ];
}
export default userAlert;