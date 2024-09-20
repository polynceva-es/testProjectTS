import './Card.css';
import { useAppSelector } from '../../store/store';
import { CardType } from '../../store/cardSlice';


//export const Card: FC<{card: CardType}> = ({card}) => {
export const Card = ({card}: {card: CardType}) => {
    //find card.id in cards...
    // const isLiked = useAppSelector(state => state.cards)
    const isLiked = true;
    const buttonLikeClassName = `card__button-like ${isLiked ? 'card__button-like_liked' : ''}`
return (
    <article className='card'>
        <img src={card.avatar} alt="photo" className='card__avatar'/>
          <h1>{card.first_name}</h1>
          <p>{card.last_name}</p>
          <p>{card.email}</p>
          <button className={buttonLikeClassName} onClick={()=> console.log(`is liked ${card.first_name}`)}/>
          <button className='card__button-delete' onClick={()=> console.log(`is deleted ${card.first_name}`)}/>
    </article>
)
}