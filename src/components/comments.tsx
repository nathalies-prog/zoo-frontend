import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function FakeComments() {
  const comments = [
    { name: 'Erika Musterfrau', comment: 'Toller Zoo, sehr schön! 😍', avatar: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Kian Lütke', comment: 'Der Zoo hat keine Robben, das stört mich 🦭', avatar: 'https://i.pravatar.cc/150?img=3' },
    { name: 'Gisela Hermann', comment: 'Die Tiere sind super gepflegt und scheinen sich wohl zu fühlen 🐯', avatar: 'https://i.pravatar.cc/150?img=9' },
    { name: 'Max Hippie', comment: 'Schon krass das die Gehege komplett durchgemixt sind🍹', avatar: 'https://i.pravatar.cc/150?img=6' },
    { name: 'Sarah Meier', comment: 'Hier komme ich gerne her.🪴', avatar: 'https://i.pravatar.cc/150?img=20' },
    { name: 'Tobias Wieneke', comment: 'Wo sind die Schweine??🥓', avatar: 'https://i.pravatar.cc/150?img=63' },
  ];

  return (
    <Card className="shadow-lg p-6">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold mb-4">🧑🏼‍🌾Das sagen vergangene Besucher..👩🏼‍🌾</CardTitle>
      </CardHeader>
      <CardContent>
        {comments.map((comment, index) => (
          <div key={index} className="flex items-center mb-4">
            <Avatar>
              <AvatarImage src={comment.avatar} alt={comment.name} />
              <AvatarFallback>{comment.name[0]}</AvatarFallback>
            </Avatar>
            <div className="ml-4">
              <p className="font-semibold">{comment.name}</p>
              <p>{comment.comment}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

