export const Increment = (nr) => {
    return{
        type:"Increment",
        payload:nr
    }
} 
export const Decrement = () => {
    return {
        type : "Decrement"
    }
} 
export const Login = () => {
    return {
        type:"Login"
    }
}