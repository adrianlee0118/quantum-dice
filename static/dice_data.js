var diceRolls = [21, 0, 0, 3, 5, 19, 25, 29, 1, 0, 4, 13, 23, 15, 19, 26, 27, 15, 29, 4, 9, 3, 9, 8, 14, 15, 25, 23, 5, 14, 
    15, 2, 26, 11, 9, 14, 0, 3, 3, 3, 5, 17, 7, 12, 10, 19, 20, 20, 23, 1, 20, 21, 28, 28, 11, 10, 30, 5, 24, 0, 22, 25, 15, 
    0, 10, 24, 9, 20, 24, 11, 3, 2, 23, 25, 2, 4, 29, 21, 17, 8, 9, 23, 20, 11, 15, 31, 17, 27, 19, 15, 5, 10, 4, 17, 25, 0, 
    12, 9, 3, 20, 2, 10, 21, 23, 25, 31, 1, 26, 23, 5, 9, 25, 12, 21, 10, 31, 5, 3, 1, 1, 20, 0, 25, 31, 4, 7, 21, 23, 23, 10,
    0, 0, 0, 23, 7, 15, 5, 19, 9, 10, 4, 18, 9, 12, 2, 0, 2, 28, 2, 8, 29, 23, 26, 12, 12, 27, 25, 25, 8, 5, 15, 18, 3, 17, 7, 
    21, 2, 23, 6, 4, 0, 16, 11, 16, 15, 21, 0, 15, 20, 27, 30, 0, 10, 9, 26, 0, 2, 5, 2, 28, 31, 25, 23, 25, 28, 15, 9, 13, 31, 
    0, 12, 5, 20, 13, 13, 13, 22, 7, 13, 4, 17, 0, 3, 10, 6, 9, 19, 19, 7, 3, 22, 5, 31, 6, 27, 29, 29, 12, 9, 10, 4, 12, 7, 9, 
    1, 0, 16, 29, 2, 13, 7, 28, 29, 23, 15, 15, 7, 26, 11, 4, 3, 28, 25, 7, 24, 7, 16, 27, 3, 2, 25, 26, 26, 26, 11, 29, 19, 
    20, 2, 12, 0, 9, 7, 12, 11, 9, 16, 24, 9, 24, 18, 2, 7, 23, 31, 15, 25, 26, 6, 0, 13, 26, 18, 31, 14, 2, 12, 8, 17, 19, 
    20, 11, 19, 10, 15, 11, 14, 7, 25, 31, 21, 29, 16, 8, 19, 31, 19, 30, 16, 0, 12, 8, 28, 9, 18, 14, 25, 28, 12, 28, 3, 16, 
    20, 22, 12, 25, 12, 5, 4, 24, 13, 13, 26, 30, 28, 28, 7, 27, 9, 17, 7, 4, 11, 31, 1, 11, 1, 21, 1, 2, 16, 31, 8, 17, 8, 
    24, 31, 11, 21, 4, 31, 31, 5, 27, 10, 22, 17, 19, 25, 13, 3, 15, 31, 4, 11, 27, 25, 31, 1, 11, 21, 13, 28, 28, 26, 10, 17, 
    9, 7, 3, 26, 17, 19, 16, 24, 12, 9, 3, 15, 8, 21, 15, 28, 20, 25, 8, 14, 7, 15, 1, 31, 11, 24, 11, 6, 11, 31, 9, 26, 11, 
    1, 19, 7, 2, 17, 26, 25, 19, 14, 20, 19, 17, 21, 9, 29, 6, 12, 3, 10, 11, 31, 27, 15, 3, 10, 19, 27, 7, 4, 31, 0, 19, 3, 
    28, 5, 24, 13, 31, 31, 2, 18, 31, 1, 15, 4, 27, 11, 24, 31, 18, 15, 18, 20, 8, 22, 25, 16, 10, 30, 9, 11, 31, 7, 8, 24, 
    19, 14, 11, 14, 9, 25, 26, 29, 18, 16, 31, 4, 13, 30, 29, 16, 19, 3, 19, 10, 10, 3, 9, 15, 20, 3, 23, 12, 8, 5, 17, 20, 
    3, 27, 9, 17, 5, 11, 30, 9, 9, 13, 29, 1, 22, 6, 7, 20, 20, 16, 1, 14, 15, 6, 26, 23, 6, 21, 21, 4, 24, 9, 27, 1, 29, 5, 
    22, 21, 29, 15, 13, 7, 2, 28, 12, 27, 30, 27, 19, 0, 8, 14, 8, 12, 7, 4, 30, 11, 9, 24, 28, 29, 19, 14, 5, 30, 9, 26, 5, 
    24, 0, 3, 26, 28, 16, 25, 13, 30, 27, 31, 1, 21, 21, 9, 1, 11, 25, 5, 7, 14, 27, 9, 18, 17, 14, 8, 15, 5, 3, 0, 1, 5, 11, 
    26, 0, 4, 13, 2, 14, 25, 28, 8, 19, 2, 12, 18, 19, 29, 1, 6, 14, 31, 13, 31, 16, 12, 30, 17, 17, 17, 4, 5, 3, 27, 27, 14, 
    22, 16, 18, 6, 7, 3, 27, 30, 0, 7, 24, 5, 1, 15, 20, 24, 17, 15, 30, 10, 4, 7, 16, 15, 23, 11, 19, 25, 15, 4, 9, 22, 24, 
    3, 23, 19, 19, 5, 7, 12, 11, 18, 8, 9, 8, 8, 31, 13, 31, 0, 7, 9, 25, 31, 10, 13, 24, 13, 26, 17, 27, 9, 31, 21, 16, 16, 
    26, 22, 16, 31, 21, 25, 18, 19, 30, 31, 1, 10, 30, 21, 13, 22, 0, 8, 17, 7, 9, 28, 8, 20, 11, 21, 9, 2, 16, 9, 12, 6, 12, 
    31, 8, 27, 0, 8, 1, 0, 18, 31, 14, 15, 4, 31, 5, 28, 22, 19, 18, 18, 10, 6, 19, 8, 25, 20, 15, 16, 2, 5, 26, 9, 24, 19, 
    11, 2, 27, 5, 14, 3, 1, 11, 2, 13, 1, 2, 11, 14, 19, 31, 1, 31, 19, 17, 27, 31, 9, 9, 21, 8, 11, 26, 8, 2, 31, 8, 0, 23, 
    27, 5, 13, 6, 9, 7, 16, 12, 13, 28, 30, 7, 22, 9, 14, 16, 1, 7, 26, 0, 14, 1, 1, 18, 1, 20, 20, 12, 19, 3, 12, 12, 23, 31, 
    14, 31, 20, 10, 1, 27, 24, 9, 11, 4, 3, 0, 5, 1, 3, 0, 12, 25, 1, 9, 24, 3, 1, 13, 25, 16, 25, 26, 11, 21, 22, 24, 13, 21,
    13, 13, 1, 6, 1, 23, 3, 1, 0, 14, 5, 18, 10, 13, 8, 18, 5, 28, 30, 12, 1, 16, 18, 7, 12, 18, 29, 8, 13, 3, 29, 23, 15, 1, 
    31, 24, 23, 0, 14, 7, 5, 7, 26, 8, 22, 1, 10, 1, 30, 22, 23, 16, 16, 1, 7, 18, 12, 18, 14, 1, 3, 0, 18, 20, 11, 16, 7, 1, 
    19, 21, 29, 11, 8, 1, 18, 10, 26, 5, 11, 30, 10, 26, 8, 23, 12, 5, 21, 21, 4, 6, 24, 31, 11, 3, 21, 20, 3, 16, 25, 19, 1, 
    31, 22, 7, 14, 7, 14, 16, 17, 7, 16, 7, 27, 8, 29, 20, 19, 7, 0, 12, 10, 13, 15, 11, 2, 28, 3, 15, 19, 14, 3, 0, 21, 12, 
    7, 11, 6, 30, 6, 26, 1, 25, 15, 20, 17, 9, 0, 20, 2, 17, 10, 20, 12, 9, 3, 28, 6, 11, 27, 30, 1, 18, 15, 1, 14, 31, 11, 
    31, 21, 31, 12, 3, 20, 9, 7, 22, 17, 13, 6, 15, 25, 24, 1, 13, 24, 27, 1, 4, 7, 20, 25, 15, 19, 12, 17, 21, 14, 21, 28,
    0, 17, 26, 25, 3, 0, 4, 7, 28, 29, 10, 11, 18, 2, 9, 18, 23, 29, 31, 9, 26, 28, 16, 15, 26, 1, 26, 6, 22, 9, 18, 5, 0, 7, 
    10, 20, 16, 7, 6, 10, 2, 31, 8, 24, 12, 22, 3, 28, 15, 30, 19, 12, 17, 30, 8, 19, 9, 23, 27, 26, 3, 19, 19, 12, 5, 11, 18, 
    6, 16, 24, 15, 15, 2, 2, 23, 13, 19, 21, 26, 13, 5, 1, 26, 9, 13, 4, 6, 12, 19, 19, 31, 19, 21, 9, 12, 0, 15, 8, 17, 21, 
    22, 20, 9, 7, 17, 9, 17, 31, 2, 10, 24, 24, 4, 19, 28, 20, 21, 2, 1, 0, 13, 29, 11, 14, 21, 13, 29, 16, 10, 20, 4, 8, 0, 
    15, 4, 8, 29, 26, 28, 8, 14, 7, 5, 31, 2, 24, 0, 14, 25, 22, 19, 25, 29, 4, 3, 13, 12, 20, 14, 22, 4, 1, 7, 28, 2, 14, 27, 
    14, 20, 17, 7, 19, 13, 12, 31, 0, 1, 21, 10, 28, 29, 28, 9, 11, 24, 15, 23, 2, 1, 6, 22, 12, 19, 10, 27, 16, 13, 16, 23, 
    14, 30, 10, 0, 25, 2, 4, 5, 1, 25, 0, 2, 7, 10, 29, 21, 11, 16, 7, 21, 17, 19, 11, 11, 26, 25, 27, 21, 1, 1, 0, 2, 8, 6, 
    0, 23, 5, 1, 8, 21, 5, 19, 5, 24, 30, 21, 31, 23, 0, 1, 19, 16, 24, 1, 13, 23, 17, 30, 13, 1, 10, 13, 8, 17, 17, 12, 19, 
    30, 27, 21, 27, 29, 15, 30, 10, 28, 29, 7, 30, 22, 24, 26, 17, 26, 30, 9, 1, 18, 29, 0, 21, 31, 0, 18, 10, 25, 24, 9, 15, 
    2, 29, 24, 30, 22, 23, 20, 10, 6, 30, 5, 16, 5, 16, 12, 8, 27, 11, 8, 20, 13, 11, 9, 21, 5, 17, 3, 9, 11, 12, 17, 7, 19, 
    31, 7, 12, 26, 18, 31, 11, 3, 15, 9, 8, 29, 16, 13, 0, 24, 22, 6, 27, 5, 20, 28, 19, 29, 10, 8, 22, 20, 20, 10, 4, 9, 5, 
    1, 22, 31, 15, 27, 0, 18, 8, 24, 27, 20, 19, 8, 28, 2, 3, 8, 1, 13, 7, 23, 6, 14, 23, 11, 26, 28, 19, 9, 19, 25, 22, 0, 
    6, 15, 27, 2, 14, 3, 14, 30, 18, 27, 30, 12, 11, 0, 31, 18, 24, 11, 12, 30, 15, 8, 9, 13, 16, 8, 13, 9, 7, 12, 27, 27, 
    13, 3, 24, 7, 17, 19, 15, 13, 9, 17, 22, 5, 4, 15, 24, 17, 18, 24, 31, 18, 16, 2, 19, 17, 20, 3, 7, 21, 15, 17, 15, 30, 
    24, 15, 2, 18, 26, 17, 7, 25, 13, 25, 10, 0, 3, 9, 1, 31, 29, 30, 28, 31, 9, 19, 5, 2, 19, 26, 31, 8, 7, 8, 21, 1, 11, 8, 
    30, 13, 16, 7, 22, 4, 7, 22, 2, 14, 0, 11, 19, 3, 4, 16, 7, 23, 29, 26, 3, 17, 1, 27, 8, 10, 5, 16, 29, 7, 0, 3, 2, 31, 
    13, 21, 19, 11, 27, 9, 11, 0, 19, 4, 2, 30, 28, 0, 31, 13, 29, 20, 21, 27, 28, 30, 18, 2, 28, 27, 4, 10, 8, 5, 16, 16, 20, 
    0, 0, 19, 5, 19, 7, 5, 0, 11, 28, 17, 27, 21, 31, 20, 26, 14, 22, 11, 23, 22, 0, 25, 7, 30, 4, 7, 29, 16, 29, 29, 25, 8, 
    19, 14, 16, 29, 12, 26, 8, 4, 20, 21, 15, 2, 0, 14, 25, 14, 9, 30, 1, 29, 4, 13, 17, 9, 16, 27, 9, 22, 7, 4, 26, 13, 0, 
    17, 25, 1, 21, 27, 17, 3, 13, 15, 0, 30, 15, 16, 13, 3, 6, 3, 25, 4, 19, 0, 19, 24, 8, 26, 2, 1, 18, 9, 23, 5, 24, 30, 15, 
    1, 24, 20, 1, 7, 25, 11, 25, 12, 30, 0, 3, 9, 8, 13, 17, 0, 14, 22, 24, 15, 8, 19, 12, 8, 8, 25, 22, 23, 27, 2, 27, 5, 7, 
    0, 10, 7, 22, 12, 27, 8, 11, 30, 10, 31, 2, 13, 25, 4, 17, 7, 26, 6, 7, 13, 20, 0, 3, 28, 30, 27, 5, 20, 1, 14, 23, 31, 1, 
    31, 19, 3, 1, 3, 11, 1, 8, 3, 31, 5, 13, 27, 4, 28, 3, 2, 27, 10, 26, 21, 4, 16, 25, 6, 4, 2, 22, 2, 6, 6, 9, 19, 13, 13, 
    13, 16, 3, 13, 3, 25, 3, 31, 9, 15, 21, 16, 11, 5, 11, 9, 19, 9, 14, 28, 12, 14, 26, 27, 5, 21, 24, 16, 21, 28, 8, 11, 16, 
    16, 29, 16, 20, 11, 27, 18, 0, 20, 10, 2, 25, 27, 22, 22, 21, 11, 30, 27, 3, 19, 24, 16, 9, 11, 30, 10, 16, 13, 15, 22, 
    26, 2, 4, 29, 2, 29, 30, 24, 5, 15, 3, 2, 29, 23, 23, 18, 20, 1, 7, 29, 17, 9, 13, 22, 9, 20, 13, 9, 4, 20, 8, 11, 25, 19, 
    12, 7, 3, 29, 11, 17, 18, 27, 1, 3, 22, 24, 20, 13, 29, 15, 2, 4, 17, 27, 14, 4, 17, 7, 4, 0, 29, 5, 29, 0, 22, 11, 5, 1, 
    9, 0, 13, 27, 29, 19, 24, 11, 7, 4, 23, 20, 3, 14, 3, 15, 18, 2, 19, 29, 9, 27, 4, 3, 18, 16, 7, 11, 28, 14, 22, 27, 17, 
    13, 3, 13, 27, 8, 24, 22, 31, 2, 25, 4, 0, 28, 25, 14, 5, 30, 11, 14, 20, 11, 9, 19, 13, 25, 1, 12, 12, 5, 1, 8, 23, 3, 7, 
    13, 16, 0, 18, 9, 8, 19, 30, 14, 15, 27, 20, 15, 12, 9, 26, 20, 23, 29, 15, 12, 3, 9, 11, 7, 3, 25, 11, 3, 4, 21, 18, 17, 
    11, 15, 12, 28, 27, 19, 17, 19, 28, 8, 0, 6, 18, 1, 3, 28, 0, 2, 30, 23, 29, 29, 31, 11, 21, 14, 1, 25, 3, 28, 20, 25, 11, 
    2, 3, 26, 15, 28, 3, 21, 9, 24, 28, 1, 2, 25, 20, 12, 11, 14, 6, 19, 4, 19, 26, 19, 18, 0, 25, 29, 2, 27, 3, 9, 21, 7, 9, 
    28, 3, 26, 11, 7, 12, 13, 29, 2, 3, 8, 26, 29, 5, 27, 1, 4, 30, 2, 7, 6, 8, 4, 28, 0, 28, 17, 15, 27, 26, 1, 12, 18, 29, 
    3, 24, 21, 0, 7, 1, 14, 0, 22, 8, 28, 5, 2, 20, 31, 11, 1, 9, 4, 7, 5, 7, 16, 9, 3, 19, 9, 29, 0, 2, 16, 6, 19, 12, 1, 5, 
    3, 19, 4, 11, 12, 7, 9, 24, 16, 23, 18, 16, 4, 5, 1, 20, 26, 7, 13, 23, 12, 4, 25, 31, 11, 10, 27, 8, 27, 19, 1, 7, 26, 7, 
    3, 28, 13, 10, 29, 24, 23, 29, 23, 1, 11, 3, 17, 19, 17, 30, 5, 27, 8, 27, 20, 28, 24, 9, 22, 21, 0, 23, 31, 18, 27, 13, 
    21, 14, 3, 6, 15, 17, 9, 26, 12, 24, 13, 5, 27, 26, 27, 1, 29, 3, 20, 17, 20, 2, 25, 7, 18, 25, 25, 7, 27, 6, 19, 30, 6, 
    7, 10, 8, 12, 19, 21, 17, 0, 11, 25, 9, 18, 1, 22, 11, 27, 3, 23, 14, 7, 13, 21, 31, 3, 15, 13, 25, 3, 11, 5, 9, 29, 8, 
    12, 27, 30, 9, 14, 1, 22, 15, 15, 17, 8, 15, 9, 25, 2, 28, 28, 29, 15, 11, 8, 8, 13, 4, 24, 11, 8, 12, 30, 3, 14, 13, 0, 
    0, 0, 26, 19, 15, 13, 29, 24, 22, 23, 29, 2, 15, 15, 8, 10, 8, 11, 26, 8, 21, 1, 29, 26, 13, 18, 8, 29, 23, 12, 22, 13, 
    7, 27, 10, 26, 14, 0, 17, 15, 0, 29, 7, 8, 7, 13, 31, 7, 14, 19, 17, 11, 29, 29, 4, 13, 8, 7, 10, 25, 25, 17, 16, 10, 11, 
    26, 26, 26, 0, 5, 26, 10, 29, 30, 14, 1, 24, 9, 8, 16, 24, 9, 11, 19, 15, 8, 23, 18, 22, 9, 8, 31, 3, 27, 13, 23, 31, 10, 
    0, 18, 31, 18, 1, 4, 28, 19, 25, 5, 27, 8, 21, 15, 9, 16, 15, 10, 17, 11, 10, 0, 5, 11, 20, 29, 22, 20, 28, 2, 29, 20, 
    23, 13, 24, 31, 1, 10, 6, 30, 18, 1, 18, 10, 10, 3, 19, 9, 3, 9, 31, 22, 7, 6, 9, 3, 3, 14, 27, 4, 2, 9, 21, 28, 11, 13, 
    3, 29, 23, 3, 17, 29, 21, 20, 5, 13, 25, 23, 28, 11, 11, 14, 25, 25, 9, 17, 18, 11, 29, 15, 31, 13, 2, 11, 15, 25, 11, 0, 
    31, 23, 9, 29, 0, 9, 9, 24, 29, 0, 4, 21, 14, 11, 5, 15, 30, 7, 9, 1, 16, 9, 29, 13, 10, 2, 19, 8, 14, 31, 16, 20, 3, 1, 
    16, 7, 15, 12, 11, 31, 14, 28, 19, 3, 28, 5, 1, 24, 4, 7, 8, 7, 29, 2, 19, 25, 0, 18, 26, 0, 28, 13, 7, 17, 28, 14, 31, 
    5, 24, 31, 11, 18, 12, 28, 0, 29, 4, 17, 26, 29, 4, 30, 15, 8, 5, 25, 5, 13, 10, 21, 12, 3, 21, 17, 9, 0, 0, 29, 8, 25, 
    12, 4, 6, 23, 23, 22, 7, 6, 27, 0, 8, 17, 29, 0, 21, 11, 5, 8, 1, 29, 19, 1, 12, 15, 19, 10, 24, 29, 8, 27, 4, 20, 7, 12, 
    0, 16, 15, 7, 17, 16, 29, 10, 24, 19, 3, 17, 5, 16, 8, 17, 24, 16, 23, 24, 14, 7, 9, 28, 4, 25, 5, 31, 7, 14, 27, 20, 0, 
    5, 0, 31, 0, 18, 31, 11, 21, 26, 17, 5, 5, 15, 21, 12, 1, 31, 2, 0, 9, 24, 17, 9, 11, 27, 7, 29, 20, 0, 25, 19, 6, 11, 26, 
    15, 29, 18, 2, 15, 7, 25, 18, 5, 28, 31, 17, 24, 11, 10, 10, 24, 8, 30, 30, 20, 8, 25, 15, 1, 9, 10, 7, 9, 0, 6, 13, 9, 
    10, 15, 4, 17, 17, 3, 3, 23, 0, 7, 29, 19, 5, 10, 10, 3, 17, 0, 5, 26, 14, 21, 10, 15, 15, 22, 16, 8, 23, 2, 23, 8, 13, 9, 
    10, 23, 0, 23, 24, 19, 15, 4, 19, 31, 9, 26, 14, 23, 17, 18, 19, 30, 6, 17, 1, 21, 12, 9, 27, 22, 6, 3, 24, 0, 14, 14, 26, 
    27, 1, 2, 20, 31, 26, 29, 15, 15, 26, 31, 13, 11, 2, 0, 23, 19, 0, 29, 0, 28, 3, 6, 26, 0, 29, 5, 27, 9, 11, 22, 26, 24, 
    8, 26, 10, 28, 5, 31, 14, 8, 9, 23, 23, 8, 3, 5, 18, 3, 8, 30, 10, 1, 12, 18, 26, 27, 13, 15, 0, 20, 0, 25, 20, 21, 9, 20, 
    24, 23, 28, 20, 20, 11, 11, 28, 16, 26, 23, 11, 18, 9, 29, 31, 7, 19, 19, 19, 15, 29, 20, 24, 26, 4, 16, 18, 15, 26, 14, 
    5, 18, 6, 31, 8, 29, 0, 25, 19, 9, 7, 15, 13, 6, 24, 10, 22, 18, 8, 31, 25, 8, 4, 27, 24, 14, 14, 30, 27, 13, 7, 13, 10, 
    23, 3, 15, 10, 31, 15, 12, 11, 0, 18, 28, 1, 20, 28, 13, 1, 27, 13, 18, 22, 25, 25, 4, 14, 28, 4, 5, 19, 5, 27, 12, 27, 
    13, 0, 0, 12, 20, 4, 1, 5, 12, 4, 5, 10, 5, 27, 27, 5, 13, 22, 6, 23, 1, 19, 27, 28, 25, 21, 13, 24, 13, 22, 2, 11, 16, 
    29, 25, 18, 3, 2, 13, 15, 1, 25, 20, 24, 24, 15, 13, 26, 3, 18, 4, 8, 29, 6, 25, 1, 4, 26, 29, 16, 15, 28, 15, 11, 31, 29, 
    3, 15, 15, 25, 8, 22, 18, 24, 4, 12, 21, 11, 9, 5, 9, 23, 29, 10, 19, 14, 26, 14, 4, 23, 16, 29, 16, 21, 5, 31, 4, 27, 
    12, 28, 17, 10, 11, 26, 3, 16, 0, 28, 15, 13, 11, 27, 17, 29, 0, 3, 4, 11, 13, 9, 22, 3, 18, 25, 1, 2, 21, 24, 11, 11, 4, 
    31, 9, 17, 26, 10, 12, 3, 24, 29, 28, 29, 9, 7, 15, 5, 13, 1, 17, 1, 20, 5, 5, 0, 16, 8, 28, 25, 18, 1, 12, 15, 6, 0, 17, 
    9, 20, 27, 8, 25, 31, 16, 20, 25, 28, 17, 5, 29, 7, 14, 11, 19, 31, 18, 1, 29, 14, 8, 21, 1, 27, 23, 17, 13, 16, 13, 26, 
    11, 29, 29, 24, 1, 15, 7, 11, 27, 24, 0, 23, 11, 20, 11, 10, 23, 22, 31, 25, 20, 18, 0, 22, 28, 11, 12, 20, 23, 17, 27, 
    19, 30, 7, 9, 26, 27, 17, 0, 15, 0, 10, 8, 6, 12, 7, 4, 5, 5, 1, 23, 11, 17, 10, 11, 26, 10, 3, 11, 6, 6, 25, 15, 7, 26, 
    19, 20, 9, 20, 4, 8, 3, 11, 12, 9, 23, 22, 31, 8, 15, 3, 28, 29, 29, 17, 0, 4, 22, 31, 11, 17, 15, 0, 24, 26, 17, 12, 12, 
    21, 27, 19, 8, 1, 18, 8, 31, 0, 25, 23, 22, 5, 15, 1, 0, 31, 0, 30, 4, 18, 11, 5, 3, 10, 17, 26, 24, 15, 27, 27, 5, 19, 
    9, 12, 19, 17, 1, 11, 3, 21, 6, 21, 23, 12, 27, 4, 0, 21, 26, 18, 0, 27, 26, 11, 1, 18, 7, 19, 1, 6, 23, 7, 3, 15, 17, 9, 
    18, 5, 2, 18, 17, 0, 11, 4, 2, 19, 25, 1, 21, 3, 2, 0, 4, 30, 12, 4, 6, 0, 31, 23, 9, 21, 4, 1, 17, 19, 8, 24, 24, 30, 1, 
    25, 1, 1, 20, 2, 3, 6, 14, 0, 19, 28, 25, 7, 28, 5, 17, 2, 2, 15, 10, 14, 27, 15, 31, 0, 7, 16, 27, 3, 19, 2, 29, 5, 9, 
    23, 4, 2, 15, 3, 12, 7, 13, 8, 28, 10, 3, 11, 30, 3, 16, 11, 1, 7, 9, 19, 31, 0, 7, 11, 12, 21, 0, 27, 15, 2, 19, 28, 23, 
    25, 29, 18, 12, 21, 6, 13, 14, 15, 3, 13, 3, 15, 3, 9, 17, 30, 21, 14, 17, 27, 18, 31, 11, 12, 7, 14, 13, 2, 31, 3, 1, 
    29, 26, 23, 16, 7, 16, 17, 5, 2, 27, 8, 26, 2, 0, 4, 18, 4, 21, 16, 25, 7, 27, 25, 20, 10, 24, 21, 31, 16, 22, 14, 8, 29, 
    8, 14, 20, 3, 21, 1, 0, 16, 7, 9, 12, 11, 9, 26, 13, 5, 5, 6, 26, 23, 21, 24, 4, 21, 4, 24, 2, 3, 2, 21, 24, 30, 26, 28, 
    0, 24, 1, 26, 16, 12, 29, 11, 23, 5, 24, 7, 25, 29, 7, 18, 29, 4, 16, 12, 3, 28, 28, 28, 17, 2, 22, 12, 30, 1, 30, 31, 
    22, 2, 5, 31, 9, 20, 29, 1, 25, 3, 8, 11, 9, 11, 12, 20, 13, 10, 9, 14, 28, 4, 25, 15, 10, 11, 28, 17, 24, 21, 11, 23, 
    29, 22, 7, 5, 23, 7, 1, 20, 3, 4, 28, 31, 26, 6, 11, 10, 19, 11, 18, 31, 26, 10, 25, 16, 5, 5, 12, 19, 7, 13, 10, 9, 3, 
    15, 29, 8, 16, 18, 28, 20, 28, 7, 13, 15, 12, 31, 25, 5, 7, 6, 9, 6, 24, 28, 5, 4, 31, 1, 3, 5, 13, 16, 26, 11, 26, 30, 
    21, 7, 25, 21, 25, 28, 6, 14, 19, 25, 1, 1, 28, 23, 16, 9, 22, 24, 21, 31, 13, 31, 21, 30, 18, 12, 18, 15, 27, 2, 25, 12, 
    0, 6, 21, 0, 14, 8, 24, 2, 3, 16, 3, 13, 15, 16, 29, 27, 22, 24, 24, 7, 0, 8, 25, 2, 20, 9, 29, 5, 28, 15, 0, 25, 0, 1, 
    26, 2, 23, 18, 6, 5, 9, 13, 15, 17, 21, 13, 12, 0, 25, 1, 3, 12, 3, 15, 9, 11, 22, 29, 6, 19, 15, 19, 26, 14, 22, 25, 7, 
    8, 1, 3, 16, 23, 11, 9, 1, 22, 11, 1, 31, 3, 31, 16, 3, 30, 24, 1, 7, 29, 27, 29, 18, 3, 13, 21, 1, 2, 18, 29, 15, 14, 5, 
    31, 23, 8, 4, 9, 11, 16, 16, 23, 3, 16, 3, 9, 2, 3, 3, 8, 31, 13, 11, 0, 18, 22, 28, 0, 5, 14, 2, 1, 2, 29, 26, 17, 11, 
    8, 25, 9, 25, 20, 14, 0, 18, 11, 31, 19, 11, 0, 1, 3, 23, 2, 10, 3, 6, 19, 29, 24, 29, 2, 28, 29, 12, 18, 12, 3, 17, 25, 
    2, 12, 0, 16, 5, 29, 25, 11, 21, 5, 7, 4, 6, 3, 6, 9, 21, 26, 3, 21, 11, 29, 31, 7, 2, 31, 6, 4, 14, 10, 30, 25, 7, 30, 
    27, 11, 2, 31, 3, 22, 16, 8, 9, 1, 23, 23, 21, 4, 25, 22, 28, 0, 7, 12, 30, 4, 2, 19, 1, 5, 20, 23, 3, 15, 19, 25, 10, 
    31, 12, 19, 3, 23, 7, 11, 15, 31, 18, 24, 3, 6, 3, 15, 21, 13, 15, 9, 25, 17, 5, 3, 10, 14, 6, 13, 23, 19, 0, 15, 30, 24, 
    10, 7, 8, 27, 30, 28, 23, 11, 31, 16, 13, 13, 4, 30, 22, 1, 14, 2, 8, 27, 31, 18, 14, 12, 19, 3, 18, 27, 4, 5, 0, 9, 17,
    10, 26, 12, 0, 3, 6, 9, 12, 8, 20, 13, 27, 8, 12, 27, 28, 8, 9, 8, 15, 30, 1, 11, 12, 15, 25, 29, 15, 28, 13, 9, 11, 5, 
    19, 2, 25, 14, 15, 24, 7, 12, 25, 22, 23, 26, 25, 14, 10, 10, 18, 26, 26, 2, 1, 3, 17, 10, 5, 2, 6, 9, 5, 1, 15, 24, 12, 
    21, 16, 21, 12, 1, 8, 31, 12, 10, 31, 4, 4, 27, 29, 27, 20, 29, 13, 17, 9, 12, 5, 28, 13, 3, 14, 1, 3, 17, 11, 20, 8, 29, 
    27, 17, 29, 1, 8, 8, 16, 28, 28, 8, 21, 9, 25, 4, 18, 31, 1, 16, 4, 0, 23, 27, 25, 31, 5, 9, 16, 3, 26, 13, 27, 9, 1, 12, 
    1, 15, 20, 13, 15, 21, 17, 16, 17, 19, 21, 3, 4, 28, 26, 14, 7, 29, 10, 10, 6, 5, 25, 9, 9, 23, 15, 12, 2, 27, 17, 27, 
    10, 21, 15, 7, 14, 10, 4, 18, 4, 12, 17, 23, 5, 14, 20, 31, 20, 30, 10, 19, 13, 5, 23, 0, 25, 0, 12, 30, 27, 28, 9, 12, 
    10, 5, 16, 16, 18, 27, 16, 21, 21, 10, 25, 18, 1, 30, 9, 3, 26, 23, 11, 1, 26, 2, 6, 20, 3, 17, 14, 20, 18, 4, 20, 27, 
    25, 1, 3, 12, 27, 11, 9, 24, 9, 23, 16, 21, 5, 18, 24, 17, 20, 7, 18, 15, 3, 0, 3, 2, 6, 12, 12, 7, 5, 6, 27, 26, 26, 31, 
    13, 19, 23, 6, 5, 3, 20, 12, 6, 7, 0, 25, 1, 25, 3, 16, 22, 1, 9, 7, 7, 26, 0, 29, 30, 11, 3, 26, 29, 27, 28, 29, 24, 22, 
    15, 22, 29, 28, 11, 19, 31, 16, 9, 9, 30, 12, 9, 14, 24, 30, 9, 29, 1, 23, 9, 12, 16, 9, 6, 30, 26, 21, 1, 12, 29, 17, 
    29, 4, 0, 30, 15, 24, 21, 14, 24, 11, 15, 8, 19, 30, 13, 18, 19, 30, 24, 18, 0, 8, 23, 8, 5, 5, 4, 12, 30, 1, 0, 22, 12, 
    12, 11, 15, 18, 26, 19, 12, 6, 3, 4, 14, 2, 9, 18, 23, 0, 11, 5, 4, 28, 7, 7, 27, 4, 12, 7, 4, 9, 20, 3, 3, 23, 1, 11, 
    12, 7, 28, 1, 13, 30, 6, 11, 11, 5, 10, 8, 19, 6, 24, 28, 20, 29, 17, 6, 11, 29, 4, 15, 9, 18, 29, 29, 9, 14, 17, 13, 0, 
    0, 11, 13, 14, 9, 15, 30, 24, 15, 6, 1, 2, 14, 27, 15, 11, 24, 14, 6, 11, 10, 5, 21, 29, 14, 0, 1, 27, 13, 10, 20, 0, 26, 
    16, 17, 29, 6, 22, 4, 10, 24, 23, 0, 22, 11, 1, 0, 30, 9, 26, 3, 19, 5, 12, 1, 16, 10, 29, 24, 7, 5, 19, 8, 5, 10, 31, 
    29, 1, 9, 5, 10, 16, 23, 0, 25, 4, 21, 29, 7, 27, 2, 1, 25, 10, 28, 9, 17, 29, 9, 25, 0, 24, 16, 27, 14, 22, 9, 0, 13, 1, 
    12, 30, 22, 25, 10, 23, 10, 11, 22, 23, 16, 5, 20, 10, 9, 8, 14, 29, 26, 8, 16, 22, 29, 4, 20, 21, 1, 31, 11, 4, 9, 0, 
    11, 11, 0, 23, 27, 12, 15, 14, 15, 31, 28, 22, 21, 17, 20, 1, 8, 29, 2, 3, 8, 11, 27, 31, 7, 20, 22, 21, 13, 21, 15, 17, 
    1, 31, 22, 9, 9, 18, 19, 15, 22, 20, 1, 31, 9, 14, 5, 28, 13, 31, 1, 11, 16, 23, 9, 28, 13, 19, 31, 0, 5, 1, 9, 12, 23, 
    13, 30, 14, 9, 25, 21, 21, 6, 12, 14, 2, 12, 5, 0, 0, 31, 18, 3, 8, 7, 4, 9, 1, 23, 26, 13, 19, 8, 4, 18, 27, 27, 7, 3, 
    22, 19, 12, 5, 3, 19, 9, 18, 27, 30, 5, 12, 15, 0, 18, 31, 19, 12, 14, 0, 9, 3, 26, 15, 23, 13, 4, 26, 28, 30, 0, 22, 4, 
    23, 28, 6, 8, 7, 27, 7, 7, 26, 15, 13, 3, 0, 6, 8, 5, 17, 8, 4, 13, 6, 3, 0, 10, 0, 6, 21, 25, 8, 3, 25, 5, 27, 12, 21, 
    22, 20, 25, 1, 25, 13, 1, 4, 13, 0, 11, 26, 27, 7, 13, 0, 11, 17, 8, 26, 19, 23, 22, 6, 27, 24, 4, 1, 9, 1, 22, 5, 16, 3, 
    14, 11, 23, 13, 1, 6, 3, 3, 23, 12, 7, 21, 28, 5, 15, 15, 24, 13, 3, 29, 19, 1, 2, 24, 8, 26, 19, 5, 3, 15, 11, 4, 24, 
    11, 30, 31, 25, 2, 0, 29, 5, 0, 17, 24, 15, 24, 29, 29, 20, 23, 5, 19, 23, 9, 7, 11, 21, 22, 18, 6, 4, 9, 24, 20, 20, 29, 
    18, 9, 1, 15, 8, 31, 30, 14, 22, 26, 30, 7, 5, 18, 8, 14, 23, 28, 8, 7, 7, 12, 19, 23, 23, 27, 9, 28, 10, 8, 1, 31, 24, 
    19, 18, 18, 7, 13, 20, 22, 25, 3, 15, 26, 0, 17, 27, 27, 3, 9, 11, 1, 28, 2, 3, 22, 11, 27, 20, 1, 18, 12, 4, 14, 24, 25, 
    4, 6, 9, 27, 12, 0, 27, 15, 15, 7, 10, 9, 7, 9, 19, 27, 24, 3, 1, 29, 5, 21, 31, 24, 2, 26, 21, 15, 30, 5, 2, 9, 19, 1, 
    13, 3, 20, 12, 10, 15, 15, 17, 26, 6, 19, 10, 11, 3, 8, 3, 19, 8, 12, 7, 0, 5, 12, 0, 9, 3, 7, 9, 11, 12, 3, 1, 25, 9, 
    29, 22, 6, 31, 12, 29, 10, 1, 13, 27, 26, 3, 13, 29, 31, 27, 21, 7, 1, 15, 26, 1, 1, 17, 8, 9, 19, 18, 5, 30, 24, 0, 2, 
    13, 17, 12, 29, 4, 7, 22, 13, 26, 30, 17, 11, 21, 1, 25, 13, 8, 25, 5, 24, 5, 5, 18, 16, 23, 29, 9, 8, 9, 8, 21, 13, 6, 
    6, 28, 18, 7, 24, 24, 31, 6, 13, 15, 15, 8, 12, 11, 11, 17, 1, 13, 10, 11, 7, 9, 4, 29, 9, 16, 24, 30, 3, 24, 25, 20, 22, 
    14, 12, 2, 29, 16, 13, 27, 25, 4, 23, 13, 13, 25, 12, 17, 23, 28, 6, 0, 6, 24, 28, 22, 8, 15, 1, 26, 25, 18, 17, 9, 29, 9, 
    9, 7, 23, 26, 5, 13, 23, 27, 6, 25, 14, 13, 12, 2, 2, 20, 18, 23, 1, 8, 2, 22, 14, 11, 11, 17, 17, 12, 5, 25, 11, 10, 5, 
    0, 19, 11, 17, 17, 24, 9, 2, 25, 23, 0, 23, 6, 25, 19, 23, 24, 21, 1, 3, 14, 8, 17, 14, 13, 4, 24, 9, 5, 7, 23, 24, 1, 1, 
    11, 18, 15, 23, 1, 29, 17, 24, 15, 19, 14, 20, 4, 27, 5, 31, 13, 8, 1, 19, 0, 16, 22, 26, 30, 7, 7, 13, 0, 19, 3, 1, 8, 
    5, 28, 6, 27, 31, 14, 2, 0, 31, 16, 15, 11, 24, 20, 6, 3, 7, 11, 29, 11, 30, 7, 28, 15, 31, 11, 11, 8, 2, 9, 25, 24, 23, 
    9, 9, 7, 1, 22, 23, 29, 4, 31, 24, 6, 7, 18, 14, 7, 5, 10, 13, 2, 20, 22, 5, 15, 6, 22, 1, 28, 11, 31, 24, 19, 8, 17, 3, 
    27, 1, 0, 21, 4, 8, 4, 7, 2, 13, 23, 5, 3, 24, 1, 21, 11, 31, 22, 2, 28, 6, 12, 15, 16, 9, 19, 30, 9, 19, 25, 13, 28, 16, 
    23, 9, 10, 18, 24, 21, 3, 12, 27, 27, 15, 1, 31, 15, 25, 23, 0, 4, 3, 28, 14, 31, 7, 10, 13, 11, 1, 18, 3, 8, 1, 10, 21, 
    21, 21, 9, 5, 3, 17, 9, 28, 5, 15, 19, 9, 22, 8, 31, 2, 22, 18, 9, 24, 16, 23, 31, 7, 30, 23, 27, 30, 0, 17, 18, 23, 31, 
    2, 20, 4, 31, 30, 1, 31, 26, 9, 8, 6, 16, 4, 16, 30, 25, 7, 4, 24, 19, 13, 13, 10, 16, 20, 23, 14, 25, 8, 15, 23, 17, 20, 
    0, 3, 0, 11, 1, 19, 6, 12, 7, 23, 17, 1, 12, 4, 21, 9, 1, 26, 25, 27, 26, 2, 9, 3, 5, 14, 8, 8, 13, 20, 12, 26, 8, 30, 
    26, 27, 3, 11, 1, 3, 17, 24, 13, 19, 19, 0, 5, 3, 18, 8, 13, 15, 14, 3, 27, 3, 19, 31, 9, 5, 9, 11, 4, 24, 6, 5, 28, 17, 
    9, 24, 8, 11, 3, 6, 13, 3, 29, 2, 17, 20, 22, 24, 5, 11, 10, 2, 1, 1, 23, 22, 29, 20, 1, 16, 17, 15, 31, 9, 0, 13, 26, 
    17, 19, 22, 23, 24, 5, 24, 20, 10, 3, 2, 3, 15, 11, 13, 3, 24, 18, 3, 10, 30, 1, 1, 19, 10, 11, 10, 1, 17, 5, 29, 24, 31, 
    2, 13, 16, 10, 24, 2, 3, 3, 31, 22, 0, 29, 22, 0, 18, 30, 14, 11, 27, 3, 4, 19, 22, 31, 21, 11, 30, 11, 22, 13, 22, 19, 
    1, 1, 27, 0, 28, 5, 17, 22, 31, 9, 25, 12, 24, 26, 27, 8, 9, 4, 22, 7, 5, 11, 11, 3, 27, 5, 11, 0, 4, 27, 13, 10, 10, 29, 
    3, 9, 12, 0, 3, 5, 1, 21, 1, 14, 31, 27, 19, 13, 19, 30, 25, 7, 3, 29, 31, 27, 15, 30, 17, 29, 24, 25, 20, 21, 25, 8, 22, 
    23, 20, 21, 26, 4, 31, 13, 30, 25, 14, 23, 1, 13, 16, 29, 21, 17, 9, 7, 23, 6, 10, 6, 14, 26, 19, 0, 14, 0, 0, 15, 18, 3, 
    6, 25, 11, 15, 30, 6, 24, 5, 29, 2, 31, 14, 30, 15, 9, 12, 22, 11, 31, 9, 21, 19, 25, 7, 25, 28, 0, 18, 1, 15, 5, 10, 1, 
    1, 9, 21, 1, 1, 4, 29, 22, 7, 19, 7, 31, 18, 20, 31, 9, 9, 29, 27, 26, 25, 28, 0, 30, 23, 15, 25, 11, 15, 30, 31, 21, 8, 
    10, 26, 7, 13, 20, 25, 9, 1, 3, 3, 1, 11, 14, 17, 9, 28, 21, 4, 7, 1, 19, 24, 8, 16, 25, 23, 12, 1, 5, 0, 26, 0, 16, 14, 
    18, 7, 21, 23, 29, 25, 0, 3, 5, 28, 15, 12, 5, 4, 12, 29, 0, 18, 3, 8, 29, 0, 30, 1, 11, 25, 8, 14, 4, 20, 8, 25, 3, 0, 
    17, 18, 0, 29, 16, 27, 26, 0, 0, 25, 23, 9, 1, 3, 1, 23, 12, 1, 14, 15, 31, 27, 4, 24, 31, 5, 29, 0, 9, 12, 0, 0, 9, 5, 
    14, 6, 29, 2, 16, 3, 9, 31, 18, 18, 15, 23, 3, 12, 12, 2, 31, 27, 10, 24, 29, 9, 10, 8, 1, 15, 26, 27, 2, 7, 1, 27, 0, 
    21, 25, 1, 12, 11, 4, 23, 12, 5, 15, 21, 26, 9, 20, 10, 18, 11, 0, 22, 13, 0, 7, 1, 30, 14, 25, 16, 31, 16, 15, 17, 13, 
    24, 8, 17, 3, 25, 15, 3, 7, 8, 10, 3, 18, 19, 21, 31, 1, 3, 16, 31, 21, 5, 8, 15, 5, 2, 24, 3, 21, 28, 13, 23, 3, 12, 6, 
    4, 7, 5, 7, 24, 25, 3, 28, 19, 1, 11, 24, 13, 17, 30, 24, 25, 23, 27, 19, 24, 6, 19, 18, 22, 4, 9, 29, 26, 3, 5, 9, 21, 
    10, 1, 5, 19, 30, 19, 5, 16, 1, 0, 21, 9, 23, 22, 8, 12, 30, 9, 22, 31, 0, 18, 27, 27, 10, 23, 9, 7, 0, 24, 12, 23, 20, 
    8, 27, 4, 19, 18, 14, 3, 30, 14, 9, 25, 12, 0, 23, 15, 4, 27, 30, 13, 8, 16, 31, 0, 1, 5, 0, 15, 19, 7, 28, 0, 17, 22, 5, 
    24, 26, 13, 21, 18, 14, 12, 11, 16, 3, 27, 27, 16, 10, 30, 13, 27, 27, 14, 9, 23, 8, 15, 0, 25, 21, 3, 2, 3, 10, 11, 23, 
    16, 6, 6, 11, 3, 15, 17, 8, 24, 14, 4, 11, 26, 22, 11, 12, 19, 1, 22, 6, 24, 14, 10, 24, 16, 21, 5, 18, 7, 21, 3, 12, 20,
    14, 1, 9, 8, 7, 3, 11, 25, 15, 3, 29, 25, 28, 18, 21, 31, 15, 19, 10, 20, 3, 3, 13, 16, 20, 18, 14, 5, 19, 27, 4, 1, 18, 
    0, 7, 29, 22, 21, 16, 11, 1, 30, 9, 24, 25, 11, 23, 9, 12, 8, 21, 21, 19, 22, 2, 30, 14, 30, 7, 25, 20, 14, 28, 17, 12, 
    5, 13, 19, 7, 23, 7, 5, 16, 12, 11, 31, 30, 18, 14, 11, 21, 0, 14, 7, 9, 23, 24, 10, 14, 5, 25, 1, 22, 7, 1, 27, 26, 22, 
    17, 7, 3, 17, 17, 11, 0, 19, 17, 27, 18, 3, 20, 27, 3, 2, 23, 4, 31, 7, 3, 29, 16, 24, 25, 15, 0, 17, 9, 28, 18, 24, 17, 
    20, 0, 0, 22, 0, 24, 4, 1, 0, 4, 27, 5, 1, 30, 3, 19, 24, 20, 17, 13, 17, 23, 10, 30, 4, 11, 29, 11, 25, 27, 6, 16, 6, 
    7, 1, 25, 9, 1, 11, 21, 16, 26, 9, 3, 24, 14, 3, 11, 29, 20, 24, 1, 1, 31, 23, 13, 29, 1, 16, 25, 10, 8, 1, 24, 4, 31, 
    3, 20, 15, 19, 1, 23, 24, 29, 2, 29, 1, 14, 22, 5, 11, 5, 29, 4, 29, 4, 7, 29, 14, 10, 23, 3, 9, 20, 4, 9, 24, 8, 26, 17, 
    24, 13, 11, 28, 14, 17, 5, 0, 28, 17, 26, 18, 31, 12, 25, 1, 28, 21, 8, 5, 9, 24, 24, 18, 1, 17, 4, 31, 3, 12, 0, 5, 8, 
    29, 8, 27, 7, 15, 16, 10, 11, 17, 25, 21, 19, 25, 13, 8, 16, 20, 11, 4, 8, 1, 15, 5, 26, 22, 25, 1, 0, 4, 8, 29, 16, 12, 
    26, 18, 16, 0, 27, 25, 15, 20, 30, 3, 19, 28, 3, 21, 19, 5, 19, 23, 11, 15, 30, 22, 19, 30, 12, 13, 10, 29, 16, 27, 16, 
    3, 13, 20, 16, 21, 2, 2, 3, 27, 31, 20, 12, 7, 24, 16, 12, 9, 27, 8, 25, 16, 2, 13, 31, 1, 23, 27, 8, 0, 21, 13, 4, 29, 
    0, 21, 15, 8, 9, 27, 24, 20, 16, 12, 23, 24, 11, 23, 31, 16, 22, 5, 23, 28, 31, 22, 30, 9, 27, 10, 14, 28, 2, 13, 14, 6, 
    10, 19, 0, 10, 13, 1, 0, 26, 11, 19, 9, 7, 22, 24, 9, 16, 9, 6, 23, 0, 12, 29, 0, 23, 0, 24, 29, 2, 6, 22, 19, 31, 6, 4, 
    28, 27, 3, 15, 17, 24, 0, 18, 0, 1, 31, 13, 27, 13, 0, 8, 13, 14, 29, 14, 26, 28, 2, 13, 0, 11, 11, 8, 23, 10, 6, 11, 3, 
    0, 13, 3, 5, 28, 31, 20, 20, 19, 5, 30, 10, 14, 17, 4, 9, 28, 19, 13, 9, 9, 6, 25, 25, 8, 1, 17, 3, 1, 28, 28, 23, 4, 30, 
    25, 5, 12, 27, 17, 13, 28, 6, 4, 13, 10, 25, 23, 20, 24, 6, 11, 19, 25, 20, 4, 14, 18, 5, 27, 19, 27, 2, 1, 28, 4, 31, 
    31, 10, 3, 12, 5, 27, 13, 3, 28, 0, 15, 16, 29, 14, 1, 11, 31, 1, 31, 7, 0, 28, 8, 8, 23, 23, 1, 24, 23, 5, 16, 25, 23, 
    12, 5, 1, 26, 29, 23, 9, 16, 2, 21, 27, 26, 19, 11, 16, 1, 7, 3, 12, 6, 3, 5, 1, 4, 5, 1, 13, 5, 3, 9, 11, 1, 11, 6, 1, 4, 
    3, 21, 23, 24, 0, 21, 0, 9, 31, 4, 0, 13, 5, 23, 10, 23, 27, 27, 13, 10, 28, 4, 22, 21, 20, 1, 23, 11, 27, 17, 21, 19, 11, 
    24, 1, 6, 10, 8, 30, 17, 0, 18, 16, 28, 5, 8, 0, 26, 12, 23, 5, 13, 14, 6, 10, 10, 11, 3, 9, 10, 10, 11, 5, 11, 27, 10, 23,
    16, 4, 2, 11, 3, 22, 21, 12, 23, 24, 27, 31, 16, 6, 29, 19, 10, 9, 1, 2, 23, 26, 21, 6, 20, 3, 29, 25, 15, 13, 27, 20, 30, 
    5, 3, 28, 9, 17, 17, 0, 28, 31, 10, 26, 28, 26, 18, 7, 22, 8, 24, 22, 29, 19, 7, 7, 28, 14, 13, 15, 29, 8, 28, 24, 11, 5, 
    29, 8, 27, 17, 7, 14, 22, 15, 30, 4, 25, 8, 31, 24, 9, 22, 3, 5, 8, 12, 19, 21, 8, 8, 19, 5, 11, 6, 29, 22, 7, 31, 22, 3, 
    1, 17, 0, 9, 27, 9, 3, 4, 3, 17, 7, 28, 18, 16, 0, 25, 11, 8, 17, 4, 10, 20, 11, 23, 1, 9, 15, 13, 30, 4, 4, 23, 12, 21, 2, 
    15, 10, 1, 12, 29, 9, 12, 11, 4, 28, 22, 25, 26, 11, 14, 3, 31, 29, 11, 12, 17, 31, 13, 18, 8, 20, 6, 9, 11, 21, 6, 5, 26, 
    26, 4, 25, 31, 17, 4, 25, 24, 2, 16, 18, 7, 5, 1, 20, 28, 15, 27, 18, 27, 1, 21, 17, 13, 21, 16, 4, 1, 29, 21, 29, 5, 11, 
    16, 24, 14, 1, 17, 23, 6, 18, 14, 25, 7, 8, 24, 17, 21, 1, 24, 2, 29, 31, 27, 11, 8, 26, 31, 0, 29, 15, 28, 13, 1, 29, 1, 
    18, 30, 5, 19, 19, 3, 28, 0, 11, 23, 16, 3, 4, 15, 27, 8, 0, 8, 9, 13, 2, 6, 29, 0, 17, 3, 10, 16, 6, 25, 9, 17, 8, 17, 4, 
    9, 14, 25, 24, 30, 28, 25, 11, 3, 12, 9, 21, 24, 3, 30, 26, 21, 5, 14, 5, 1, 1, 0, 21, 18, 11, 15, 13, 25, 1, 2, 1, 1, 6, 
    22, 1, 12, 29, 3, 26, 27, 31, 8, 31, 17, 8, 29, 22, 31, 14, 10, 0, 31, 18, 4, 3, 15, 2, 21, 27, 10, 10, 1, 12, 23, 9, 28, 
    8, 7, 31, 0, 16, 7, 0, 31, 18, 7, 25, 23, 3, 24, 10, 29, 2, 25, 6, 13, 24, 19, 29, 9, 5, 23, 1, 13, 17, 11, 3, 29, 0, 12, 
    25, 31, 30, 11, 30, 29, 1, 21, 13, 9, 29, 22, 8, 8, 25, 14, 21, 4, 31, 17, 3, 23, 16, 15, 5, 12, 9, 20, 11, 4, 4, 26, 0, 
    23, 31, 18, 26, 3, 18, 15, 18, 3, 21, 5, 23, 31, 1, 5, 27, 7, 25, 9, 30, 4, 10, 27, 1, 15, 0, 27, 17, 1, 8, 1, 9, 3, 11, 
    1, 29, 9, 17, 10, 29, 25, 3, 31, 23, 26, 8, 22, 26, 29, 15, 24, 9, 4, 21, 16, 5, 9, 2, 8, 27, 2, 9, 1, 12, 26, 17, 4, 27, 
    6, 25, 5, 31, 27, 13, 6, 16, 1, 27, 27, 28, 26, 19, 12, 31, 24, 21, 31, 27, 14, 9, 11, 29, 0, 28, 1, 27, 15, 25, 17, 19, 
    26, 25, 8, 6, 27, 15, 12, 4, 29, 16, 9, 24, 26, 17, 14, 20, 28, 18, 5, 7, 4, 0, 4, 31, 8, 8, 7, 8, 23, 5, 3, 9, 0, 9, 5, 
    20, 0, 12, 4, 7, 1, 7, 2, 27, 13, 0, 11, 2, 8, 4, 23, 31, 17, 23, 21, 3, 18, 13, 14, 1, 25, 23, 0, 13, 19, 18, 3, 30, 28, 
    1, 4, 30, 26, 20, 14, 19, 17, 30, 1, 9, 27, 9, 4, 29, 29, 17, 13, 28, 28, 3, 12, 29, 25, 31, 3, 27, 11, 13, 7, 7, 8, 4, 1, 
    22, 8, 13, 1, 6, 0, 6, 18, 3, 11, 10, 24, 10, 20, 24, 21, 11, 17, 19, 7, 3, 23, 6, 26, 24, 5, 0, 2, 10, 16, 5, 19, 6, 6, 
    23, 27, 3, 7, 27, 8, 19, 5, 0, 19, 26, 15, 18, 31, 19, 17, 29, 15, 2, 15, 23, 4, 8, 22, 8, 11, 3, 1, 2, 15, 23, 12, 9, 26, 
    28, 23, 18, 13, 29, 11, 8, 10, 4, 19, 3, 23, 7, 30, 0, 4, 0, 2, 1, 8, 8, 8, 28, 15, 30, 18, 2, 11, 23, 6, 22, 24, 25, 9, 
    31, 13, 16, 18, 25, 0, 23, 3, 20, 0, 21, 3, 3, 3, 11, 4, 1, 6, 25, 27, 24, 25, 7, 29, 7, 8, 31, 20, 10, 18, 21, 0, 16, 2, 
    24, 14, 8, 5, 1, 21, 11, 9, 9, 15, 4, 25, 12, 9, 2, 26, 19, 17, 29, 1, 22, 12, 3, 26, 4, 15, 13, 11, 13, 29, 3, 8, 14, 22, 
    11, 10, 3, 20, 23, 15, 26, 23, 24, 4, 3, 9, 13, 13, 2, 2, 25, 25, 29, 21, 8, 12, 3, 19, 25, 9, 15, 30, 1, 18, 3, 23, 27, 
    16, 14, 9, 20, 11, 11, 11, 24, 12, 12, 8, 23, 8, 2, 9, 26, 8, 6, 29, 28, 30, 9, 3, 23, 10, 10, 27, 24, 31, 4, 3, 0, 26, 25, 
    0, 8, 2, 2, 25, 12, 0, 24, 2, 4, 13, 5, 30, 21, 18, 4, 11, 16, 1, 2, 21, 16, 23, 10, 9, 5, 26, 19, 26, 21, 12, 25, 7, 31, 
    30, 14, 12, 17, 4, 14, 14, 20, 0, 19, 19, 7, 0, 9, 9, 22, 11, 23, 22, 1, 8, 10, 3, 8, 19, 23, 2, 8, 5, 17, 15, 21, 31, 30, 
    25, 3, 27, 24, 4, 23, 4, 0, 9, 8, 3, 0, 1, 11, 23, 9, 17, 10, 8, 0, 4, 8, 1, 3, 22, 21, 25, 13, 17, 9, 27, 7, 16, 27, 16, 
    21, 29, 23, 8, 29, 1, 19, 7, 7, 8, 29, 3, 2, 21, 23, 27, 24, 6, 21, 29, 15, 17, 14, 25, 11, 1, 17, 21, 15, 21, 2, 9, 21, 
    13, 27, 16, 28, 1, 17, 31, 25, 21, 0, 8, 17, 27, 15, 14, 4, 1, 7, 25, 5, 14, 18, 8, 12, 25, 26, 18, 26, 17, 15, 24, 11, 30, 
    5, 26, 13, 31, 15, 1, 21, 22, 20, 11, 5, 4, 26, 28, 6, 28, 9, 31, 6, 31, 11, 9, 9, 9, 18, 7, 7, 19, 2, 2, 11, 4, 25, 29, 6, 
    7, 15, 10, 26, 0, 16, 13, 0, 25, 27, 13, 16, 12, 17, 2, 2, 13, 0, 30, 9, 15, 7, 4, 5, 6, 11, 29, 18, 21, 27, 24, 14, 3, 6, 
    3, 11, 24, 13, 16, 2, 6, 21, 13, 3, 16, 25, 19, 6, 9, 13, 8, 20, 15, 16, 15, 3, 21, 9, 1, 15, 1, 29, 18, 12, 28, 31, 19, 9, 
    23, 7, 31, 5, 0, 24, 11, 2, 21, 21, 5, 0, 9, 0, 3, 25, 31, 5, 27, 3, 7, 9, 22, 17, 9, 19, 22, 13, 23, 2, 30, 31, 10, 31, 
    17, 3, 29, 28, 21, 18, 25, 10, 8, 21, 17, 31, 28, 11, 16, 0, 28, 29, 4, 25, 7, 2, 14, 7, 2, 20, 29, 9, 0, 7, 20, 29, 1, 1, 
    10, 14, 3, 27, 22, 26, 3, 6, 22, 15, 3, 9, 30, 3, 3, 3, 19, 16, 9, 20, 19, 8, 20, 2, 13, 28, 3, 21, 11, 29, 14, 9, 31, 23, 
    17, 7, 8, 8, 18, 29, 9, 11, 26, 19, 17, 2, 13, 24, 2, 3, 1, 20, 4, 16, 11, 10, 9, 10, 28, 7, 7, 6, 0, 0, 11, 27, 21, 15, 
    23, 18, 24, 7, 17, 4, 28, 23, 31, 0, 29, 9, 27, 30, 7, 26, 8, 14, 29, 19, 30, 3, 24, 5, 9, 11, 29, 15, 19, 18, 0, 29, 10, 
    27, 10, 8, 26, 20, 6, 20, 12, 3, 1, 31, 8, 28, 15, 6, 3, 6, 27, 5, 7, 14, 11, 13, 15, 7, 13, 30, 16, 11, 4, 11, 1, 26, 21, 
    28, 28, 28, 11, 2, 24, 1, 28, 29, 9, 18, 23, 18, 15, 23, 8, 15, 13, 0, 8, 13, 9, 2, 27, 3, 24, 8, 1, 8, 19, 31, 11, 27, 21, 
    17, 7, 11, 7, 0, 17]