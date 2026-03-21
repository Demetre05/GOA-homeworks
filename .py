# def candles(candles_number, make_new):
#     remaining = candles_number - make_new * (candles_number // make_new) # 1
#     while remaining != 0: # 1 != 0
#         candles_number += candles_number // make_new # 7
#         remaining += candles_number - make_new * (candles_number // make_new) # 2
#         if remaining >= make_new: # 2 >= 2
#             candles_number += remaining // make_new
#             remaining = 0
#     return candles_number + 1


# print(candles(5, 2))



# def candles(candles_number, make_new): # (5, 2)
#     remaining = candles_number - make_new * (candles_number // make_new) # 1
#     while remaining != 0: # 1 != 0
#         candles_number += candles_number // make_new # 7
#         remaining += candles_number - make_new * (candles_number // make_new) # 2
#         if remaining = make_new: # 2 >= 2
#             candles_number += 1
#             remaining = 0
#         elif remaining > make_new:
#             candles_number += remaining // make_new
#             remaining - 
#     return candles_number

#------------------------------------------------------------------------------------------------------------------------------------

