# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ramsay = Chef.create(name: "Gordon Ramsay")
ray = Chef.create(name: "Rachael Ray")
Recipe.create(name: "Beef Wellington", cook_time:120, serving:4, like_counter: 0, video_url:"https://youtu.be/Cyskqnp1j64", chef:ramsay)
Recipe.create(name: "Jerk Chicken",  cook_time:100, serving:4, like_counter: 0, video_url:"https://youtu.be/4GIH3JYb6no", chef:ramsay)
Recipe.create(name: "Pumpkin Vodka Cream Pasta with Spinach or Kale", cook_time:30, serving:6, like_counter:5, video_url:"https://youtu.be/QuJP-2LniXs", chef:ray)
Recipe.create(name: "Lemon-Blueberry Ricotta Cheesecake", cook_time:60, serving:6, like_counter:0, video_url:"https://youtu.be/BypnBzYChoQ", chef:ray)
