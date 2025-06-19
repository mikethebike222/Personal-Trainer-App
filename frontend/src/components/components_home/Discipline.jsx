// Discipline displays a bold motivational statement at the top of the page.

const Discipline = () => {

    const disciplineStyle = {
        color: 'Black',
        fontSize: 'clamp(40px, 9vw, 75px)',
        padding: '5px',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontFamily: 'Impact, sans-serif',
      }

    return (
        <div>
            <h2 style ={disciplineStyle}>
                Discipline is Built Here.
            </h2>
        </div>
    )
}
export default Discipline