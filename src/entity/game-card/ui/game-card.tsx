import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export type TGame = {
    start_time: string;
    date: string;
    game_kind: {
      id: string;
      name: string;
    };
    id: string;
    address: string;
    cost: number;
    registration_records: {
      user_id: string;
      referrals_amount: number;
      nickname: string;
      telegram_id: number;
    }[];
    deletedAt: string | null;
};

export const GameCard = (props: {game: TGame}) => {
  const totalPlayersNumber =
    props.game.registration_records.length +
    props.game.registration_records.reduce(function (sum, currentSum) {
      return sum + currentSum.referrals_amount;
    }, 0);

  const handleClick = () => {
    //confirm modal open, success modal open, button changes status and color if player is on game
    //if player not login redirect to login page
  };

  return (
    <Card>
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
                background-color: #E2818A;
                border: 1px solid #E2818A;
              box-shadow: 2px 2px 2px black;

              .btn-check {
                background-color: #E2818A;
                border: 1px solid #E2818A;
              box-shadow: 2px 2px 2px black;
          }

          .btn:checked {
                background-color: #E2818A;
                border: 1px solid #E2818A;
              box-shadow: 2px 2px 2px black;
          }

              .btn-check:checked+.btn, .btn.active, .btn.show, .btn:first-child:active, :not(.btn-check)+.btn:active {
                background-color: #E2818A;
                border: 1px solid #E2818A;
              box-shadow: 2px 2px 2px black;
          `}
      </style>
      <Card.Header>{props.game.game_kind.name}</Card.Header>
      <Card.Body>
        <Card.Title>{`${props.game.date} в ${props.game.start_time}`}</Card.Title>
        <Card.Text>{props.game.address}</Card.Text>
        <Card.Text>{`Число участников: ${totalPlayersNumber} из 10`}</Card.Text>
        <Card.Text>{`Стоимость: ${props.game.cost} рублей`}</Card.Text>
        <Button variant='primary' onClick={handleClick}>
          Записаться
        </Button>
      </Card.Body>
    </Card>
  );
};
