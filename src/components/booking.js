const Booking = () => {
    return (
        <div className="booking">
            <h1 className="book_Header">Book your table</h1>
            <div className="howManyPeople bookSection">
                <div className="Book_heading">For how many people ?</div>
                <input type="number" />
            </div>
            <div className="date bookSection">
                <div className="Book_heading">Choose Your Date
                </div>
                <input type="date" name="" id="" />
            </div>
            <div className="time bookSection">
                <div className="Book_heading">
                    Choose Your Time</div>
                <input type="time" />
            </div>

            <div onClick={()=>{
                document.getElementById('bookMsg').style.display='block'
                setTimeout(()=>{
                    document.getElementById('bookMsg').style.display='none'
                },5000)
                
            }} className="bookBtn">RESERVE TABLE</div>
            <br />
            <div id="bookMsg" className="bookMsg">Your table has been reserved.</div>
        </div>
    )
}
export default Booking