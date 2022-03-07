export const UPDATE_PROFILE = "UPDATE_DATA`";
const updateProfile=(content) => {
    return({
        type: UPDATE_PROFILE,
        payload: content,
    })
      
}
export default updateProfile;