Winning combinations for the board:

    board:
    a1 a2 a3
    b1 b2 b3
    c1 c2 c3


    horizontal:
        a1->a2->a3
        b1->b2->b3
        c1->c2->c3

    vertical:
        a1->b1->c1
        a2->b2->c2
        a3->b3->c3

    diagonal:
        a1->b2->c3
        a3->b2->c1

    else if(nine elements on board but no winning combination):
        tie


Accessing a tile:

Option 1:
    Access the "tr" tag first, then access the "td"
        document.querySelectorAll("#board tr")[1].getElementsByTagName("td")[0].getElementsByTagName("...")
    Also have to change the for loop body

Option 2: 
    Just loop through indicies 0 to 8.