puts "🌱 Seeding..."
# Make 10 users
10.times do
  secret = "password"
  User.create(email: Faker::Internet.unique.email, password: secret, password_confirmation: secret)
end

20.times do
  book = Book.create(
    title: Faker::Book.title,
    genre: Faker::Book.genre,
    image_url: Faker::LoremFlickr.image(size: "307x473", search_terms: ['books']),
    author: Faker::Book.author,
    description: Faker::Lorem.paragraph(random_sentences_to_add: 4)
  )
  
  # create between 1 and 5 reviews for each book
  rand(1..5).times do
    # get a random user for every review
    # https://stackoverflow.com/a/25577054
    user = User.order('RANDOM()').first

    Review.create(
      rating: rand(1..5),
      comment: Faker::Lorem.sentence,
      book_id: book.id,
      user_id: user.id
    )

    Favorite.create(
      book_id: book.id,
      user_id: user.id
    )
  end
end

puts "✅ Done seeding!"
