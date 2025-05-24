const Header = () => {
    const headerStyle = {
        color: 'lightgray',
        background: 'black',
        fontSize: 'clamp(28px, 6vw, 30px)',
        padding: '5px',
        textAlign: 'center',
        textTransform: 'uppercase',
      }

    return (
        <div>
            <header style={headerStyle}>
                Jacob Oestreicher Hypertrophy Coaching
            </header>
        </div>
    )
}
export default Header