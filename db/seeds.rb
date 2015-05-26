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

c7 = l2.cards.create(title: 'Colombia')
c8 = l2.cards.create(title: 'Peru')
c9 = l2.cards.create(title: 'Argentina')

i1 = c1.items.create(done: true, title: 'Berlin')
i2 = c1.items.create(done: false, title: 'Hamburg')
i3 = c1.items.create(done: false, title: 'Leipzig')

b1.members = [u2]
b1.save!
