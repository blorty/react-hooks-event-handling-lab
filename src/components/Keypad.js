// Code Keypad Component Here
function handleChange (e) {
    console.log(`${e.target.value}`)
}

function Keypad (){
    return (
        <div>
            <input
                type="password"
                onChange={handleChange}
                placeholder="Entering password..."
            />
        </div>
    )
}

export default Keypad;