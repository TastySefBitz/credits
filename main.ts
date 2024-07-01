let times = 0
forever(function () {
    times += 1
    scene.setBackgroundColor(7)
    credits.clear_credits()
    credits.append("Hello world")
    credits.append("These are some credits!!!")
    credits.empty_line()
    credits.append("You can clear the credits then append text to it.")
    credits.empty_line()
    credits.append("you can make it possible for credits to be sped up with A")
    credits.empty_line()
    credits.append("Try pressing A")
    credits.empty_line()
    credits.append("You can also make it skipable with B")
    for (let index = 0; index < 4; index++) {
        credits.empty_line()
    }
    credits.append("Created by technonux")
    credits.append("Thank you for checking out this extention!")
    credits.empty_line()
    credits.append("I plan to add more features in the future such as image support and newline escape sequence \"\\n\"")
    credits.empty_line()
    credits.append("Played credits " + times + " times")
    credits.start_credits(18, true, true)
    game.splash("Done")
})
