export const alertStatusJson = (type=true, message=null, data=null) => {
    return {
        type: type,
        message: message,
        data: data, 
    };
};