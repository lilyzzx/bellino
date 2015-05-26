# write some jbuilder to return some json about a board
# it should include the board
#  - its lists
#    - the cards for each list

json.title @board.title
json.user_id @board.user_id
json.created_at @board.created_at
json.updated_at @board.updated_at
json.members @board.members
json.lists @board.lists do |list|
  json.title list.title
  json.ord list.ord
  json.id list.id
  json.cards list.cards do |card|
    json.title card.title
    json.description card.description
    json.ord card.ord
    json.id card.id
    json.assigned_users card.card_assignments do |card_assignment|
      json.user_id card_assignment.user_id
      json.id card_assignment.id
    end
    json.items card.items do |item|
      json.title item.title
      json.done item.done
      json.id item.id
    end
  end
end
