import '../styles/Cats.css';
export function MyImg(props) {
    console.log(props)
  return (
    <div className='cat-item'>
        <div className='cat-image'>
            <img src={props.url} alt="Opis obrazka" />
        </div>
        
    </div>
  );
}
