import "./Main.css";

export default function Card2({img,para}){
    return (
        <>

        <div className="Card2">
            <img src={img} alt="img" />
            <a href="#" className="link">{para}</a>
        </div>
        </>
    )
}