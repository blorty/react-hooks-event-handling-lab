// Code EyesOnMe Component Here
function handleBlur(e) {
    console.log(`${e.target.value} Hey! Eyes on me!`);
}

function handleFocus(e) {
    console.log(`${e.target.value} Good!`);
}

function EyesOnMe () {
    return (
        <div>
            <button onBlur={handleBlur} onFocus={handleFocus}                   
                >Eyes on me
            </button>
        </div>
    )
}

export default EyesOnMe