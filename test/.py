#1. რას შვება პრინტი? 
#2. რა არის ცვლადი? 
#3. ახსენი რა არის კომენტარი
#4. ახსენი რა არის debugging
#5. ახსენი რა არის snake_case
#6. ახსენი რა არის input/output
#7. ჩამოწერე და ახსენი ყველა მონაცემთა ტიპი 
#8. რომელი ფუნქციებით შეგვიძლია მონაცემთა ტიპების შეცვლა
#9. ახსენი ყველა ლოგიკური ოპერატორი
#10. ჩამოწერე და ახსენი ყველა control flowს მაგალითი 
#11. ახსენი ლუპები 
#12. ახსენი if/elif/else
#13.გააკეთე თამაში ჯეირანი
#14.გააკეთე კოდის გამოცნობის მინიგეიმი
#15.რა არის თეგი?
#16.რა არის ატრიბუტი? 
#17.ჩამოწერე ყველა ნასწავლი თეგი
#18.შექმენი ვებსაიტი საშაურმეზე.




player1 = input("enter scissors, stone or paper: ")
player2 = input("enter scissors, stone or paper: ")

if player1 == player2:
    print("draw")
elif player1 == "scissors" and player2 == "paper":
    print("player1 won")
elif player1 == "scissors" and player2 == "stone":
    print("player2 won")

elif player1 == "stone" and player2 == "scissors":
    print("player1 won")
elif player1 == "stone" and player2 == "paper":
    print("player2 won")

elif player1 == "paper" and player2 == "scissors":
    print("player2 won")
elif player1 == "paper" and player2 == "stone":
    print("player1 won")




code = 12345
attempt = int(input("enter the code: "))

while attempt != code:
    print("this is incorrect code")
    attempt = int(input("enter the code: "))
print("this code is correct")