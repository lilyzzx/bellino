u1 = User.create(email: 'a@a.com', password: 'password')
u2 = User.create(email: 'b@b.com', password: 'password')

b1 = u1.boards.create(title: 'Cities')
b2 = u1.boards.create(title: 'Cities')

l1 = b1.lists.create(title: 'South America')
l2 = b1.lists.create(title: 'Asia')
l3 = b1.lists.create(title: 'Europe')

c1 = l3.cards.create(title: 'Germany')
c2 = l3.cards.create(title: 'Russia')
c3 = l3.cards.create(title: 'Spain')

c4 = l2.cards.create(title: 'Thailand')
c5 = l2.cards.create(title: 'Korea')
c6 = l2.cards.create(title: 'China')

c7 = l1.cards.create(title: 'Colombia')
c8 = l1.cards.create(title: 'Peru')
c9 = l1.cards.create(title: 'Argentina')
c10 = l1.cards.create(title: 'Jupiter', description: 'is a planet silly, not a country')

b1.members = [u2]
b1.save!
