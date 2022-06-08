import "./Input.css"

const Input = props => (
    <div className="form-component input">
        {props.label === undefined ? null : <label>{props.label}</label>}
        <input 
            placeholder={props.placeholder || ""} 
            name={props.name} 
            type={props.type} 
            value={props.value} 
            onChange={e => props.onChange(e)} 
        />
    </div>
)

export default Input


// Example usage:
// ...
// const [user, setUser] = useState({ username: "", password: "" })
// const handleChange = e => setUser({ ...user, [e.target.name] : e.target.value })
// ...
// <Input label="Enter Username*" name="username" type="text" value={user.username} onChange={e => handleChange(e)} />
// <Input label="Enter Password*" name="password" type="password" value={user.password} onChange={e => handleChange(e)} />
// ...
