const Button = ({children}) => {
    if(!children) return <button>Čudlík nějaký</button>
    return <button>{children}</button>
}

export const greeting = (name) => "Hello " + name

export default Button;