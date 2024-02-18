// Code Keypad Component Here

function Keypad() {

    function inputEventListener(event) {
        console.log('Entering password...')
    };


    return (
        <div>
            <input
                type="password"
                onChange={inputEventListener}
            />
        </div>
    )
}

export default Keypad;