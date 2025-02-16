export async function apiRequest(url = '', optionsObj = null, errMsg = null) {
    try {
        const response = await fetch(url, optionsObj);
        if (!response.ok) throw Error('Please reload app');

    } catch (err) {
        errMsg = err.message;
    } finally {
        return errMsg;
    }
}