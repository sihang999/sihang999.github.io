function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16) | 0,
            v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

function initializeSession() {
    let sessionId = sessionStorage.getItem('session_id');
    if (!sessionId) {
        sessionId = generateUUID(); // 生成新的 session_id
        sessionStorage.setItem('session_id', sessionId); // 存储到 sessionStorage
        // console.log('New session created:', sessionId);
    } else {
        // console.log('Existing session:', sessionId);
    }
}

function clearSession() {
    const sessionId = sessionStorage.getItem('session_id');
    if (sessionId) {
        // console.log('Clearing session ID:', sessionId); // 输出被清除的 session_id
        sessionStorage.removeItem('session_id'); // 删除 session_id
    } else {
        // console.log('No session ID to clear.');
    }
}


// 页面刷新时清除 session_id
window.addEventListener('load', (event) => {
    // 使用 Performance API 检测导航类型
    const navEntries = performance.getEntriesByType('navigation');
    const navType = (navEntries.length > 0 ? navEntries[0].type : 'unknown') || 'unknown';
    // const navType = performance.getEntriesByType('navigation')[0]?.type || 'unknown';
    if (navType === 'reload') {
        // 只有在页面刷新时清除 session_id
        clearSession();
        initializeSession();
        // console.log('load:Session refreshed due to page refresh.');
    } else {
        // 其他未知情况
        initializeSession();
        // console.log('load: other navigation type, no action taken.');
    }
});

export { initializeSession, clearSession };
