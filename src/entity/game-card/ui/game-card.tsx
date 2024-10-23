import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { TGame } from '../../../shared/types/types';
import { date } from '../../../shared/model/date-convert';
import { CardPlayerAvatar } from '../../../entity/card-player-avatar/ui';

type TGameCardProps = {
  game: TGame;
};

export const GameCard = ({ game }: TGameCardProps) => {
  const totalPlayersNumber =
    game.registration_records.length +
    game.registration_records.reduce(function (sum, currentSum) {
      return sum + currentSum.referrals_amount;
    }, 0);

  const handleClick = () => {
    //confirm modal open, success modal open, button changes status and color if player is on game
    //if player not login redirect to login page
  };

  return (
    <>
      <style type='text/css'>
        {`
          .card-title {
            font-size: 1rem;
          }
          .card-text {
            font-size: 0.75rem;
            margin: 0 0 5px;
          }
            .card-body {
              padding: 8px;
            }
          .btn {
            background-color: #FC411E;
            border: 1px solid #FC411E;
            color: #fff;
          }
            
          .btn:hover {
                background-color: #FC411E;
                border: 1px solid #FC411E;
              box-shadow: 2px 2px 2px black;
          }
              .btn:active {
                background-color: #FC411E;
                border: 1px solid #FC411E;
              box-shadow: 2px 2px 2px black;
              transform: scale(1.05);
        }

          .btn:checked {
                background-color: #FC411E;
                border: 1px solid #FC411E;
              box-shadow: 2px 2px 2px black;
              transform: scale(1.05);
          }

              .btn-check:checked+.btn, .btn.active, .btn.show, .btn:first-child:active, :not(.btn-check)+.btn:active {
                background-color: #FC411E;
                border: 1px solid #FC411E;
              box-shadow: 2px 2px 2px black;
              transform: scale(1.05);
            }
              
           .card-img-top {
              max-height: 250px;
              object-fit: cover;
              object-position: center;
           }
              
            .rounded-circle {
              height: 50px;
              width: 50px;
              object-fit: cover;
              object-position: center;
              margin: 10px 0; 
            }
          `}
      </style>
      <Card>
        <Card.Img
          variant='top'
          src='https://imageio.forbes.com/specials-images/imageserve/109687331/0x0.jpg?format=jpg&amp;height=491&amp;width=655&amp;fit=bounds'
        />
        <Card.Body>
          <Card.Title>{`${date(game.start_time).onlyDate} в ${date(game.start_time).time}`}</Card.Title>
          <Card.Text>{game.address}</Card.Text>
          <Card.Text>{`Число участников: ${totalPlayersNumber}`}</Card.Text>
          <Card.Text>{`Стоимость: ${game.cost} рублей`}</Card.Text>
          <div>
            <Image
              src='https://napresne.moscow/wp-content/uploads/sites/7/2021/10/guinea-pig-g2dbcb2c20_1920-768x510.jpg'
              roundedCircle
            />
          </div>
          <article>
            <CardPlayerAvatar />
          </article>
          <Button variant='primary' onClick={handleClick}>
            Записаться
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};
