
def ajouter(x, y):
    return x + y

def soustraire(x, y):
    return x - y

def multiplier(x, y):
    return x * y

def diviser(x, y):
    if y == 0:
        return "Erreur : Division par zéro"
    return x / y

print("Calculatrice Simple")
print("1. Addition")
print("2. Soustraction")
print("3. Multiplication")
print("4. Division")

while True:
    choix = input("Entrez votre choix (1/2/3/4) : ")

    if choix in ('1', '2', '3', '4'):
        num1 = float(input("Entrez le premier nombre : "))
        num2 = float(input("Entrez le deuxième nombre : "))

        if choix == '1':
            print(f"{num1} + {num2} = {ajouter(num1, num2)}")
        elif choix == '2':
            print(f"{num1} - {num2} = {soustraire(num1, num2)}")
        elif choix == '3':
            print(f"{num1} * {num2} = {multiplier(num1, num2)}")
        elif choix == '4':
            print(f"{num1} / {num2} = {diviser(num1, num2)}")
    
    else:
        print("Entrée invalide")
    
    autre_calcul = input("Voulez-vous effectuer un autre calcul ? (oui/non) : ")
    if autre_calcul.lower() != 'oui':
        break

print("Merci d'avoir utilisé la calculatrice !")