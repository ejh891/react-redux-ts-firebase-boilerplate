class UserInterfaceUtil {
    // trick the browser into thinking something asyc is happening so that it will refresh
    static async letUserInterfaceUpdate() {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }
}

export default UserInterfaceUtil;
