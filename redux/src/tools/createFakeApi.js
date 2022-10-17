const createFakeApi = () => {
    let id = 0;
    const createNote = () => new Promise(resolve => setTimeout(() => {
        id++
        resolve({
            id
        })
    },1000))
    return {
        createNote
    }
}

export const api = createFakeApi();
