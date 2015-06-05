# == Schema Information
#
# Table name: cards
#
#  id          :integer          not null, primary key
#  title       :string(255)      not null
#  list_id     :integer          not null
#  description :text
#  done        :done
#  ord         :float            default(0.0)
#  created_at  :datetime
#  updated_at  :datetime
#

class Card < ActiveRecord::Base
  belongs_to :list
  has_many :card_assignments, dependent: :destroy

  default_scope { order(:ord) }
end
