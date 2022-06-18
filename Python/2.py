snisli = int(input("Введите число"))    
def zadscha2():
    if(snisli<15):
        print('В первую четверть')
    elif(snisli>15) and (snisli<30):
        print('Во вторую четверть')
    else:
        if(snisli>30) and (snisli<45):
            print('В третью часть')
        else:
            if(snisli<=59):
                print("В четвертую четверть")
zadscha2()
otvet=(input("Тебе нужна подсказак по типам переменных в python"))
def zadacha3():   
    if(otvet=="Да") or (otvet=="да") or (otvet=="ДА"):
        print('Числа')
        print('Строки')
        print('Кортежи')
        print('Списки')
        print('Словари')
        print('Множества')
    else:
        print("Молодец тебе не нужны подсказки")

zadacha3()    

          
          