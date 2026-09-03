function eventExample() {
    function tampilkanPesan() {
        alert('Button berhasil diklik!');
    }
    return (
        <div>
            <h2>Belajar Event</h2>
            <button onClick={tampilkanPesan}>Login</button>
            </div>
    );
}
export default eventExample;