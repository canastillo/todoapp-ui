import axios from "axios";

const checkIfDataIsTheSame = (prevData, newData) => {
    if(Object.keys(prevData).length === Object.keys(newData).length) {
        return Object.keys(prevData).every(
            key => newData.hasOwnProperty(key)
                && newData[key] === prevData[key]);
    }

    return false;
}

export const submitTodoHandler = (prevData, newData, isEditing) => {
    if (newData.name === undefined || newData.priority === undefined)  {
      alert("Please fill out all obligatory fields");
    } else if (isEditing && checkIfDataIsTheSame(prevData, newData)) {
      alert("The To Do's data remains the same");
    }
    else {
        return trySendTodo(newData, isEditing);
    }

    return false;
}

const trySendTodo = async (newData, isEditing) => {
    let res;

    try {
        if(isEditing) {
            res = await axios.put(`${import.meta.env.VITE_API_URL}/todos`, newData);
        } else  {
            res = await axios.post(`${import.meta.env.VITE_API_URL}/todos`, newData);
        }
        return res.data;
    } catch(error){
        alert("To Do could not be created. Please, try again later.")
    }

    return false;
}